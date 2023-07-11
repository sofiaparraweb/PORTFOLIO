module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      fontFamily: {
        primary: 'Playfair Display',
        body: 'Work Sans',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          lg: '3rem',
        },
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      extend: {
        content: {
          about: 'url("/src/assets/img/outline-text/about.svg")',
          portfolio: 'url("/src/assets/img/outline-text/portfolio.svg")',
          services: 'url("/src/assets/img/outline-text/services.svg")',
          testimonials: 'url("/src/assets/img/outline-text/testimonials.svg")',
          contact: 'url("/src/assets/img/outline-text/contact.svg")',
        },
        colors: {
          primary: '#b5ae83',
          secondary: '#b5ae83',
          tertiary: '#0f3041',
          accent: {
            DEFAULT: '#0f3041',
            hover: '#861a27',
          },
          paragraph: '#0f3041',
        },
      },
    },
    plugins: [],
  };
  