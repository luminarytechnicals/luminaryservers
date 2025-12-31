/**
 * Centralized Configuration
 * Controls STATUS, animation speeds, and mock data.
 */

window.CONFIG = {
    // STATUS: 'ACTIVE', 'FAILURE', 'PARTIAL', 'SERVICE'
    STATUS: 'FAILURE',

    // Centralized Color Definitions
    COLORS: {
        ACTIVE: '#00f3ff',   // Blue
        FAILURE: '#ff0033',  // Red
        PARTIAL: '#00ff66',  // Green
        SERVICE: '#ffd700'   // Gold
    },

    // Animation Controls
    ANIMATION: {
        GEAR_SPEED: '20s',         // CSS time string
        GEAR_SPEED_FAST: '0.5s',   // For failure state
        ROBOT_FLOAT_DURATION: '4s',
        PARTICLE_COUNT: 50,
        REFRESH_RATE: 1000,
        ENABLE_SPARKS: true
    },

    // Mock Data Configuration
    DATA: {
        CPU_LOAD: 45, // %
        MEMORY_USAGE: 60, // %
        ACTIVE_NODES: 12,
        TEMPERATURE: 42, // Celsius
        NETWORK_THROUGHPUT: 850, // Mbps
        DISK_USAGE: 72, // %
        SERVER_DESCRIPTION: 'CURRENT: All systems operational. ACTIVE: Monitoring enabled. SOON: Maintenance scheduled for 02:00 UTC.',
        SERVERS: [
            { name: 'Backend', load: 67, status: 'ACTIVE' },
            { name: 'Front-User', load: 45, status: 'ACTIVE' },
            { name: 'Dev-End', load: 23, status: 'ACTIVE' },
            { name: 'Manager-End', load: 89, status: 'PARTIAL' },
            { name: 'Repo-End', load: 34, status: 'ACTIVE' },
            { name: 'AI-End', load: 91, status: 'ACTIVE' },
            { name: 'OS-End', load: 56, status: 'ACTIVE' },
            { name: 'Security-End', load: 12, status: 'ACTIVE' },
            { name: 'Network-End', load: 78, status: 'ACTIVE' }
        ]
    }
};



