 // Set current year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');
        btn.addEventListener('click', () => menu.classList.toggle('hidden'));

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                menu.classList.add('hidden'); 
                document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Sticky Navbar effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('shadow-md', window.scrollY > 20);
        });

        // --- Scroll Animation Observer (MODIFIED FOR REPEAT) ---
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                } else {
                    // Remove class when scrolling away to trigger animation again
                    entry.target.classList.remove('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
        });

        // --- Typewriter Effect ---
        const words = ["Full Stack Developer", "MERN Stack Specialist", "UI/UX Enthusiast", "Problem Solver"];
        let i = 0;
        let timer;

        function typeWriter() {
            const heading = document.getElementById("typewriter-text");
            const word = words[i];
            const currentText = heading.textContent;

            if (!heading.classList.contains("deleting")) {
                // Typing
                if (currentText.length < word.length) {
                    heading.textContent = word.substring(0, currentText.length + 1);
                    timer = setTimeout(typeWriter, 100);
                } else {
                    // Finished typing, wait then delete
                    heading.classList.add("deleting");
                    timer = setTimeout(typeWriter, 2000);
                }
            } else {
                // Deleting
                if (currentText.length > 0) {
                    heading.textContent = word.substring(0, currentText.length - 1);
                    timer = setTimeout(typeWriter, 50);
                } else {
                    // Finished deleting, move to next word
                    heading.classList.remove("deleting");
                    i = (i + 1) % words.length;
                    timer = setTimeout(typeWriter, 500);
                }
            }
        }
        
        typeWriter();

        // --- Three.js 3D Animation Code (Enhanced) ---
        function initThreeJS() {
            const container = document.getElementById('canvas-container');
            if (!container) return;

            while(container.firstChild) container.removeChild(container.firstChild);

            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
            camera.position.z = 80; 

            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 
            container.appendChild(renderer.domElement);

            // Enhanced Particle System
            const particleCount = 200; 
            const particles = new THREE.BufferGeometry();
            const positions = new Float32Array(particleCount * 3);
            const velocities = [];

            for (let i = 0; i < particleCount; i++) {
                positions[i * 3] = (Math.random() * 2 - 1) * 120; 
                positions[i * 3 + 1] = (Math.random() * 2 - 1) * 80; 
                positions[i * 3 + 2] = (Math.random() * 2 - 1) * 80; 
                
                velocities.push({
                    x: (Math.random() - 0.5) * 0.15,
                    y: (Math.random() - 0.5) * 0.15,
                    z: (Math.random() - 0.5) * 0.15
                });
            }

            particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            
            const particleMaterial = new THREE.PointsMaterial({
                color: 0x2563eb,
                size: 1.2, 
                transparent: true,
                opacity: 0.9
            });

            const particleSystem = new THREE.Points(particles, particleMaterial);
            scene.add(particleSystem);

            const lineMaterial = new THREE.LineBasicMaterial({
                color: 0x2563eb,
                transparent: true,
                opacity: 0.2 
            });

            const linesGeometry = new THREE.BufferGeometry();
            const lines = new THREE.LineSegments(linesGeometry, lineMaterial);
            scene.add(lines);

            // Interaction
            let mouseX = 0;
            let mouseY = 0;
            const windowHalfX = container.clientWidth / 2;
            const windowHalfY = container.clientHeight / 2;

            container.addEventListener('mousemove', (event) => {
                mouseX = (event.clientX - container.getBoundingClientRect().left - windowHalfX);
                mouseY = (event.clientY - container.getBoundingClientRect().top - windowHalfY);
            });

            window.addEventListener('resize', () => {
                const width = container.clientWidth;
                const height = container.clientHeight;
                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            });

            const animate = () => {
                requestAnimationFrame(animate);

                const positions = particleSystem.geometry.attributes.position.array;

                for (let i = 0; i < particleCount; i++) {
                    positions[i * 3] += velocities[i].x;
                    positions[i * 3 + 1] += velocities[i].y;
                    positions[i * 3 + 2] += velocities[i].z;

                    if (Math.abs(positions[i * 3]) > 120) velocities[i].x *= -1;
                    if (Math.abs(positions[i * 3 + 1]) > 80) velocities[i].y *= -1;
                    if (Math.abs(positions[i * 3 + 2]) > 80) velocities[i].z *= -1;
                }
                
                particleSystem.geometry.attributes.position.needsUpdate = true;

                // Mouse interaction
                scene.rotation.y += 0.05 * (mouseX * 0.0003 - scene.rotation.y);
                scene.rotation.x += 0.05 * (mouseY * 0.0003 - scene.rotation.x);
                scene.rotation.z += 0.0005;

                // Connect particles logic
                const linePositions = [];
                for (let i = 0; i < particleCount; i++) {
                    for (let j = i + 1; j < particleCount; j++) {
                        const dx = positions[i * 3] - positions[j * 3];
                        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
                        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
                        const distSq = dx * dx + dy * dy + dz * dz;

                        if (distSq < 600) { 
                            linePositions.push(
                                positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
                                positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
                            );
                        }
                    }
                }
                lines.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

                renderer.render(scene, camera);
            };

            animate();
        }

        window.addEventListener('load', initThreeJS);