import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // --- 1. SETUP ---
    const scene = new THREE.Scene();
    // Deep dark blue fog to blend distant stars
    scene.fog = new THREE.FogExp2(0x0f172a, 0.0015);

    const camera = new THREE.PerspectiveCamera(65, container.clientWidth / container.clientHeight, 0.1, 5000);
    // Camera Position
    camera.position.set(0, 5, 70);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // ==========================================
    // SYSTEM A: THE HOLOGRAPHIC SKILL RINGS
    // ==========================================

    // Helper: High-Res Text Texture
    const createTextTexture = (text, color) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 1024;
      canvas.height = 256;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = 'bold 100px "Courier New", monospace';
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = color;
      ctx.shadowBlur = 20;
      ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    const ringsGroup = new THREE.Group();
    scene.add(ringsGroup);

    const layers = [
      { radius: 30, speed: 0.2, color: '#61DAFB', items: ['React', 'Next.js', 'Tailwind', 'Three.js'] },
      { radius: 50, speed: -0.15, color: '#68A063', items: ['Node.js', 'Express', 'MongoDB', 'REST API'] },
      { radius: 70, speed: 0.1, color: '#F05032', items: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub'] }
    ];

    layers.forEach((layer) => {
        // Track
        const trackGeometry = new THREE.RingGeometry(layer.radius - 0.2, layer.radius + 0.2, 64);
        const trackMaterial = new THREE.MeshBasicMaterial({ 
            color: layer.color, transparent: true, opacity: 0.1, side: THREE.DoubleSide 
        });
        const track = new THREE.Mesh(trackGeometry, trackMaterial);
        track.rotation.x = -Math.PI / 2;
        ringsGroup.add(track);

        // Text Sprites
        const itemCount = layer.items.length;
        const angleStep = (Math.PI * 2) / itemCount;
        const ringObj = new THREE.Group(); // Pivot object
        ringObj.userData = { speed: layer.speed };

        layer.items.forEach((item, index) => {
            const angle = index * angleStep;
            const texture = createTextTexture(item, layer.color);
            const material = new THREE.SpriteMaterial({ map: texture, transparent: true, opacity: 0.9 });
            const sprite = new THREE.Sprite(material);
            sprite.scale.set(16, 4, 1); 
            sprite.position.x = Math.cos(angle) * layer.radius;
            sprite.position.z = Math.sin(angle) * layer.radius;
            ringObj.add(sprite);
        });
        ringsGroup.add(ringObj);
    });

    // Central Core
    const coreGeometry = new THREE.IcosahedronGeometry(8, 1);
    const coreMaterial = new THREE.MeshBasicMaterial({ 
        color: 0x2563eb, wireframe: true, transparent: true, opacity: 0.3
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    ringsGroup.add(core);


    // ==========================================
    // SYSTEM B: THE NEURAL STARFIELD (INTERACTIVE)
    // ==========================================

    // Helper: Glowing Star Texture
    const createStarTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64; canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(130, 200, 255, 1)'); 
      gradient.addColorStop(0.4, 'rgba(37, 99, 235, 0.5)'); 
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const particleCount = 1500;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const r = 200 + Math.random() * 400; 
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      posArray[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      posArray[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      posArray[i * 3 + 2] = r * Math.cos(phi);
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 3,
      map: createStarTexture(),
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const starSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(starSystem);

    // -- Interactive Lines Setup --
    const maxConnections = 15;
    const impulseGeometry = new THREE.BufferGeometry();
    const impulsePositions = new Float32Array(maxConnections * 2 * 3);
    impulseGeometry.setAttribute('position', new THREE.BufferAttribute(impulsePositions, 3));
    
    const impulseMaterial = new THREE.LineBasicMaterial({
        color: 0x60a5fa, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending
    });
    const impulseLines = new THREE.LineSegments(impulseGeometry, impulseMaterial);
    scene.add(impulseLines);

    // Interaction Variables
    const raycaster = new THREE.Raycaster();
    raycaster.params.Points.threshold = 30;
    const mouse = new THREE.Vector2(999, 999); 

    // ==========================================
    // ANIMATION LOOP
    // ==========================================
    const animate = () => {
      requestAnimationFrame(animate);

      // 1. Animate Rings
      ringsGroup.rotation.y += 0.002;
      ringsGroup.children.forEach(child => {
         if (child.userData.speed) child.rotation.y += child.userData.speed * 0.01;
      });

      // 2. Pulse Core
      const time = Date.now() * 0.001;
      core.scale.setScalar(1 + Math.sin(time) * 0.1);
      core.rotation.y -= 0.01;

      // 3. Animate Stars
      starSystem.rotation.y += 0.0005;

      // 4. Interactive Impulse Lines
      raycaster.setFromCamera(mouse, camera);
      const intersections = raycaster.intersectObject(starSystem);

      impulsePositions.fill(0); // Reset lines
      
      if (intersections.length > 0) {
          const closestIndex = intersections[0].index;
          const starPos = starSystem.geometry.attributes.position.array;
          
          // Center point (Closest Star)
          const cx = starPos[closestIndex * 3];
          const cy = starPos[closestIndex * 3 + 1];
          const cz = starPos[closestIndex * 3 + 2];

          // FIX: Renamed lineIdx to lineIndex to match usage below
          let lineIndex = 0; 
          let connections = 0;

          for(let i=0; i<particleCount; i++) {
              if(i === closestIndex) continue;
              if(connections >= maxConnections) break;

              const px = starPos[i * 3];
              const py = starPos[i * 3 + 1];
              const pz = starPos[i * 3 + 2];

              const distSq = (cx-px)**2 + (cy-py)**2 + (cz-pz)**2;

              if(distSq < 15000) {
                  impulsePositions[lineIndex++] = cx;
                  impulsePositions[lineIndex++] = cy;
                  impulsePositions[lineIndex++] = cz;
                  
                  impulsePositions[lineIndex++] = px;
                  impulsePositions[lineIndex++] = py;
                  impulsePositions[lineIndex++] = pz;
                  connections++;
              }
          }
      }
      impulseLines.geometry.attributes.position.needsUpdate = true;
      
      impulseLines.rotation.y = starSystem.rotation.y;

      renderer.render(scene, camera);
    };

    animate();

    // --- INTERACTION ---
    const handleMouseMove = (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        ringsGroup.rotation.x = 0.2 + (mouse.y * 0.1);
        ringsGroup.rotation.z = (mouse.x * 0.1);
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- CLEANUP ---
    const handleResize = () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousemove', handleMouseMove);
        if (container && container.contains(renderer.domElement)) {
            container.removeChild(renderer.domElement);
        }
        
        // Explicitly dispose of Geometries and Materials
        coreGeometry.dispose();
        coreMaterial.dispose();
        
        particlesGeometry.dispose();
        particlesMaterial.dispose();
        
        impulseGeometry.dispose();
        impulseMaterial.dispose();
        
        // Clean up Rings
        ringsGroup.traverse((object) => {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
                if(object.material.map) object.material.map.dispose();
                object.material.dispose();
            }
        });

        renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 opacity-100" />;
};

export default ThreeBackground;