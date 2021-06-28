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
      paddingTop: '80px',
      minHeight: '100vh',
    },
    groceryListPage: {
      paddingTop: '80px',
      minHeight: '100vh',
    },
    maintenanceListPage: {
      paddingTop: '80px',
      minHeight: '100vh',
    },
    registerPage: {
      padding: '80px',
      minHeight: '100vh',
    },
    loginPage: {
      padding: '80px',
      minHeight: '100vh',
    },
    accountPage: {
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
    form: {
      textAlign: 'center',
    },
    textField: {
      margin: '10px auto 10px auto',
    },
    gridItem: {
      marginTop: '10px',
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
      color: '#3e5879',
    },
  },
};
