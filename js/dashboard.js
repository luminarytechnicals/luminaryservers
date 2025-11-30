/**
 * Dashboard Manager
 * Handles UI updates for the dashboard view.
 */

const Dashboard = {
    init() {
        console.log('Dashboard Initialized');
        this.startUpdates();
    },

    startUpdates() {
        // Update immediately
        this.update();
    },

    update() {
        if (!window.CONFIG || !window.CONFIG.DATA) return;

        // Update Charts
        const cpuChart = document.getElementById('cpu-chart');
        const memChart = document.getElementById('mem-chart');

        if (cpuChart) {
            cpuChart.innerHTML = `
                <div style="width: ${window.CONFIG.DATA.CPU_LOAD}%; height: 100%; background: var(--main-glow-color); opacity: 0.7; border-radius: 3px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9rem;">${window.CONFIG.DATA.CPU_LOAD}%</div>
            `;
        }
        if (memChart) {
            memChart.innerHTML = `
                <div style="width: ${window.CONFIG.DATA.MEMORY_USAGE}%; height: 100%; background: var(--main-glow-color); opacity: 0.7; border-radius: 3px; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 0.9rem;">${window.CONFIG.DATA.MEMORY_USAGE}%</div>
            `;
        }

        // Update Server Description
        const serverDesc = document.getElementById('server-description');
        if (serverDesc && window.CONFIG.DATA.SERVER_DESCRIPTION) {
            serverDesc.innerText = window.CONFIG.DATA.SERVER_DESCRIPTION;
        }

        // Update Server Table
        const tableBody = document.getElementById('server-table-body');
        if (tableBody && window.CONFIG.DATA.SERVERS && window.CONFIG.DATA.SERVERS.length > 0) {
            tableBody.innerHTML = '';
            window.CONFIG.DATA.SERVERS.forEach(server => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${server.name}</td>
                    <td>${server.load}%</td>
                    <td><div class="status-dot" style="background: ${server.status === 'ONLINE' || server.status === 'ACTIVE' ? 'var(--main-glow-color)' : (server.status === 'PARTIAL' ? '#ffa500' : 'red')}"></div></td>
                `;
                tableBody.appendChild(row);
            });
        }

        // Update Config Display
        const configGrid = document.getElementById('config-grid');
        if (configGrid) {
            configGrid.innerHTML = '';
            const configItems = [
                { label: 'STATUS', value: window.CONFIG.STATUS },
                { label: 'REFRESH RATE', value: window.CONFIG.ANIMATION.REFRESH_RATE + 'ms' },
                { label: 'PARTICLES', value: window.CONFIG.ANIMATION.PARTICLE_COUNT },
                { label: 'TEMP', value: window.CONFIG.DATA.TEMPERATURE + '°C' }
            ];

            configItems.forEach(item => {
                const div = document.createElement('div');
                div.className = 'config-item';
                div.innerHTML = `
                    <span class="config-label">${item.label}</span>
                    <span class="config-value">${item.value}</span>
                `;
                configGrid.appendChild(div);
            });
        }
    }
};

window.Dashboard = Dashboard;

document.addEventListener('DOMContentLoaded', () => {
    Dashboard.init();
});
