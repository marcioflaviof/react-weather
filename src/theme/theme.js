const themes = {
  fontSizes: [12, 14, 16, 24, 28, 36, 48, 56, 64],
  fonts: {
    body: "Roboto, sans-serif",
    heading: "serif",
  },
  breakpoints: ["512px", "768px", "1024px", "1152px", "1440px"],

  colors: {
    orange: "#F98E01",
    alert: "#414141",
  },
  forms: {
    input: {
      background: "white",
    },
  },

  text: {
    heading: {
      fontSize: [6, 8],
      fontWeight: "bold",
      color: "white",
    },
    title: {
      fontSize: [4, 4, 5],
      fontWeight: "bold",
      color: "white",
    },
    small: {
      fontSize: 1,
      color: "#222",
      fontWeight: "bold",
    },
    bold: {
      fontWeight: "bold",
    },
  },

  styles: {
    root: {
      fontFamily: "body",
      background: "linear-gradient(to top, #FFB401, #F98E01)",
      minHeight: "100vh",
    },
  },
};

export default themes;
