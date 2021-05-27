import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import'./App.css';
import Header from './Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
