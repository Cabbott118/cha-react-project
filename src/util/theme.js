export default {
  palette: {
    primary: {
      main: '#dd723c',
      contrastText: '#333',
    },
    secondary: {
      main: '#3e5879',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: [
      // 'Nunito',
      // 'Roboto',
      // '"Helvetica Neue"',
      // 'Arial',
      '"Prompt"',
      'sans-serif',
    ].join(','),
  },
  spreadThis: {
    homePage: {
      minHeight: '100vh',
    },
    groceryListPage: {
      minHeight: '100vh',
    },
    footer: {
      backgroundColor: '#eee',
      padding: '20px 0px',
    },
    footerTitle: {
      textDecoration: 'underline',
      color: '#3e5879',
    },
    copyright: {
      backgroundColor: '#ddd',
    },
    button: {
      marginTop: 20,
      marginBottom: 20,
      position: 'relative',
      textTransform: 'none',
    },
    customError: {
      color: 'red',
      fontSize: '0.8rem',
      marginTop: 5,
    },
    progress: {
      position: 'absolute',
    },
  },
};
