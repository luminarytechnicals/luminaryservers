/**
 * System Status Manager
 * Handles the state of the server monitor and updates CSS variables.
 */

const SystemStatus = {
    currentStatus: 'ACTIVE',

    init() {
        console.log('System Status Initialized');
        this.startMonitoring();
    },

    setStatus(status) {
        if (window.CONFIG.COLORS[status] && this.currentStatus !== status) {
            this.currentStatus = status;
            console.log(`System Status Changed: ${this.currentStatus}`);
            this.applyTheme(status);
        }
    },

    applyTheme(status) {
        const color = window.CONFIG.COLORS[status];
        const root = document.documentElement;

        // Update CSS Variable for global color
        root.style.setProperty('--main-glow-color', color);

        // Update Animation Speeds based on status
        if (status === 'FAILURE') {
            root.style.setProperty('--gear-speed', window.CONFIG.ANIMATION.GEAR_SPEED_FAST);
            document.body.classList.add('shake-effect');
        } else {
            root.style.setProperty('--gear-speed', window.CONFIG.ANIMATION.GEAR_SPEED);
            document.body.classList.remove('shake-effect');
        }

        // Update Status Text
        const statusText = document.getElementById('status-text');
        if (statusText) {
            statusText.innerText = `SYSTEM STATUS: ${status}`;
        }
    },

    startMonitoring() {
        // Initial Apply
        if (window.CONFIG && window.CONFIG.STATUS) {
            this.setStatus(window.CONFIG.STATUS);
            this.applyTheme(window.CONFIG.STATUS); // Ensure theme is applied on load
        }

        setInterval(() => {
            if (window.CONFIG) {
                // Check Status Change
                if (window.CONFIG.STATUS && this.currentStatus !== window.CONFIG.STATUS) {
                    this.setStatus(window.CONFIG.STATUS);
                }

                // Update Dashboard if available
                if (window.Dashboard) {
                    window.Dashboard.update();
                }
            }
        }, window.CONFIG.ANIMATION.REFRESH_RATE || 1000);
    }
};

window.SystemStatus = SystemStatus;

document.addEventListener('DOMContentLoaded', () => {
    SystemStatus.init();
});
