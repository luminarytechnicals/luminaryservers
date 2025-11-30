# Luminary Server Status

> **A futuristic, real-time server monitoring dashboard with stunning visualizations and PWA support**

![Status](https://img.shields.io/badge/status-active-success.svg)
![PWA](https://img.shields.io/badge/PWA-enabled-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🌟 Overview

Luminary Server Status is a beautiful, futuristic web-based dashboard for monitoring your server infrastructure in real-time. Built with vanilla JavaScript, it features animated gears, robots, particle effects, and a sleek cyan-themed interface that makes server monitoring both functional and visually stunning.

## ✨ Features

### 🎨 Visual Design
- **Futuristic UI** with animated gears and robot avatars
- **Particle effects** and dynamic background animations
- **Scanline & vignette** effects for retro-tech aesthetic
- **Color-coded status** indicators (blue, red, orange, gold)
- **Smooth transitions** and responsive animations

### 📊 Dashboard Capabilities
- **Real-time metrics**: CPU load, memory usage, network throughput
- **Server node monitoring**: Track up to 9 servers with individual load percentages
- **Status indicators**: Visual dots showing server health at a glance
- **Live feed**: System event logging
- **Custom info cards**: Configurable status messages

### 📱 Progressive Web App (PWA)
- ✅ **Installable** on desktop and mobile devices
- ✅ **Offline support** via service worker
- ✅ **Standalone mode** runs like a native app
- ✅ **Custom icons** and splash screens
- ✅ **Fast loading** with caching strategies

### 🔍 SEO Optimized
- Comprehensive meta tags for search engines
- Open Graph tags for social media sharing
- Twitter Card support
- Structured data with sitemap.xml
- robots.txt for search engine crawlers

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- A local web server (for testing) or any web hosting service

### Installation

1. **Clone or download** the repository:
   ```bash
   git clone https://github.com/yourusername/luminary-servers.git
   cd luminary-servers
   ```

2. **Serve locally** (choose one):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (with http-server)
   npx http-server -p 8000
   
   # PHP
   php -S localhost:8000
   ```

3. **Open in browser**:
   ```
   http://localhost:8000
   ```

4. **Install as PWA** (optional):
   - Click the install icon in your browser's address bar
   - Or use the browser menu: "Install Luminary Server Status"

## 📁 Project Structure

```
Luminary Servers/
├── index.html              # Main HTML file with SEO meta tags
├── manifest.json           # PWA manifest configuration
├── sw.js                   # Service worker for offline support
├── robots.txt              # Search engine crawler instructions
├── sitemap.xml             # XML sitemap for SEO
├── README.md               # This file
│
├── css/
│   └── style.css           # All styling and animations
│
├── js/
│   ├── config.js           # Centralized configuration
│   ├── dashboard.js        # Dashboard UI logic
│   ├── system-status.js    # Status management and theming
│   ├── animations.js       # Particle effects and animations
│   └── pwa.js              # PWA initialization
│
└── assets/
    ├── icon-512x512.png    # Large PWA icon
    ├── icon-192x192.png    # Medium PWA icon
    ├── favicon-32x32.png   # Browser favicon
    ├── favicon-16x16.png   # Small favicon
    └── apple-touch-icon.png # iOS home screen icon
```

## ⚙️ Configuration

All settings are centralized in `js/config.js` for easy customization:

### Change STATUS
```javascript
window.CONFIG = {
    STATUS: 'ACTIVE'  // Options: 'ACTIVE', 'FAILURE', 'PARTIAL', 'SERVICE'
}
```

### Status Color Themes
- **ACTIVE** (Blue `#00f3ff`): All systems operational
- **FAILURE** (Red `#ff0033`): Critical system failure
- **PARTIAL** (Green `#00ff88`): Partial service degradation
- **SERVICE** (Gold `#ffd700`): Scheduled maintenance

### Update Server Data
```javascript
DATA: {
    SERVERS: [
        { name: 'Backend', load: 67, status: 'ACTIVE' },
        { name: 'Front-User', load: 45, status: 'ACTIVE' },
        // Add more servers...
    ]
}
```

### Customize Animations
```javascript
ANIMATION: {
    GEAR_SPEED_FAST: '10s',
    PARTICLE_COUNT: 50,
    REFRESH_RATE: 2000  // milliseconds
}
```

## 🎯 Usage

### Navigation
1. **Home View**: Displays animated gear/robot and STATUS
2. **Dashboard View**: Shows detailed metrics and server information
3. **Swipe Control**: Click "SWIPE TO DASHBOARD" to switch views
4. **Back Button**: Return to home view from dashboard

### Monitoring Your Servers

1. **Edit `js/config.js`**: Add your server names and initial data
2. **Update DATA.SERVERS**: Array of server objects with name, load, status
3. **Refresh Dashboard**: Changes reflect automatically
4. **Integration**: Connect to your backend API for real-time updates

### Real-Time Integration (Advanced)

To connect live server data, modify `js/dashboard.js`:

```javascript
async fetchServerData() {
    const response = await fetch('https://your-api.com/servers');
    const data = await response.json();
    window.CONFIG.DATA.SERVERS = data.servers;
    this.update();
}
```

## 🛠️ Customization

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --main-glow-color: #00f3ff;  /* Change main theme color */
    --bg-color: #050505;          /* Background color */
    --text-color: #ffffff;        /* Text color */
}
```

### Modify Server Info Message
In `js/config.js`:
```javascript
SERVER_DESCRIPTION: 'CURRENT: Your custom message. ACTIVE: Status info. SOON: Upcoming changes.'
```

### Add More Servers
Extend the `SERVERS` array in `config.js`:
```javascript
SERVERS: [
    { name: 'New-Server', load: 42, status: 'ACTIVE' },
    // ... more servers
]
```

## 🌐 Deployment

### Before Deploying

1. **Update URLs**: Replace `https://yourdomain.com/` in:
   - `index.html` (meta tags)
   - `robots.txt`
   - `sitemap.xml`

2. **Test All Status Modes**: Verify colors for ACTIVE, FAILURE, PARTIAL, SERVICE

3. **Verify PWA**: Check that service worker registers correctly

### Deployment Options

- **GitHub Pages**: Push to `gh-pages` branch
- **Netlify**: Drag and drop folder or connect repo
- **Vercel**: Import project and deploy
- **Traditional Hosting**: Upload via FTP/SFTP

## 📊 Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Edge    | ✅ Full |
| Safari  | ✅ Full |
| Opera   | ✅ Full |

## 🔧 Technologies Used

- **HTML5**: Semantic structure and SVG graphics
- **CSS3**: Animations, gradients, and responsive design
- **Vanilla JavaScript**: No frameworks, pure JS
- **Service Workers**: Offline functionality
- **Web Manifest**: PWA configuration

## 📝 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2025 Luminary Technologies

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Support

For support, email support@luminary.dev or open an issue in the repository.

## 🎉 Acknowledgments

- Inspired by cyberpunk and sci-fi UI designs
- Built with attention to performance and user experience
- Designed for sysadmins who appreciate beautiful interfaces

---

**Made with ❤️ by Luminary Technologies**
