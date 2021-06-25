import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import GroceryList from './pages/GroceryList';

// Components
import Nav from './components/Nav';

// MUI
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Utility
import themeFile from './util/theme';
const theme = createMuiTheme(themeFile);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/grocery-list' component={GroceryList} />

            {/* <Route path='/404' component={FourOhFour} />
          <Redirect to='/404' /> */}
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
