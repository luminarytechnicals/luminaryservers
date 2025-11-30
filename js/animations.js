/**
 * Animation Controller
 * Handles visual updates based on system status.
 */

const Animations = {
    elements: {
        body: null,
        robot: null,
        gear: null,
        particles: null,
        statusText: null
    },

    init() {
        this.elements.body = document.body;
        this.elements.robot = document.getElementById('robot-avatar');
        this.elements.gear = document.getElementById('gear-logo');
        this.elements.statusText = document.getElementById('status-text');

        // Initialize particle system
        this.initParticles();

        // Subscribe to status updates
        if (window.SystemStatus) {
            window.SystemStatus.subscribe(this.handleStatusChange.bind(this));
        }
    },

    handleStatusChange(status) {
        // Remove old classes
        this.elements.body.classList.remove('status-active', 'status-failure', 'status-partial');

        // Add new class
        const className = `status-${status.toLowerCase()}`;
        this.elements.body.classList.add(className);

        // Update text
        if (this.elements.statusText) {
            this.elements.statusText.innerText = `SYSTEM STATUS: ${status}`;
        }

        // Trigger specific animations
        if (status === 'FAILURE') {
            this.triggerFailureEffects();
        } else {
            this.resetEffects();
        }
    },

    triggerFailureEffects() {
        this.elements.body.classList.add('shake-effect');
        if (this.elements.gear) {
            this.elements.gear.style.animationDuration = '0.5s'; // Fast erratic spin
        }
    },

    resetEffects() {
        this.elements.body.classList.remove('shake-effect');
        if (this.elements.gear) {
            this.elements.gear.style.animationDuration = '10s'; // Normal spin
        }
    },

    initParticles() {
        const canvas = document.getElementById('particle-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 50;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 1 - 0.5;
                this.speedY = Math.random() * 1 - 0.5;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;
                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;
            }

            draw() {
                ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--main-glow-color') || '#00f3ff';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        animate();

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Animations.init();
    if (window.SystemStatus) {
        window.SystemStatus.init();
    }
});
