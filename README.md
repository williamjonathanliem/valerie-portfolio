# Valerie Nelson - Artist Portfolio

A modern, responsive portfolio website built with React.js and Tailwind CSS for Valerie Nelson, a NAFA arts student. The website showcases her artwork through a beautiful and interactive interface.

## Features

- 🎨 Modern and elegant design
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive layout
- ✨ Smooth animations with Framer Motion
- 🖼️ Interactive image gallery
- 📝 Contact form with validation
- 🎯 Custom cursor effects
- 🚀 Optimized performance with image lazy loading

## Technologies Used

- React.js
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router DOM
- Lucide Icons

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/valerie-portfolio.git
   ```

2. Navigate to the project directory:
   ```bash
   cd valerie-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
valerie-portfolio/
├── public/
│   └── images/         # Image assets
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── App.tsx        # Main app component
│   └── index.tsx      # Entry point
└── README.md
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Customization

### Colors

The color scheme can be customized in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: '#6366f1',
      secondary: '#4f46e5',
      accent: '#f43f5e',
    },
  },
}
```

### Fonts

The website uses the following Google Fonts:
- Inter (sans-serif)
- Playfair Display (display)

To change the fonts, update the links in `public/index.html` and the font family configuration in `tailwind.config.js`.

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
