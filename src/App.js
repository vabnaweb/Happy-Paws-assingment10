import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Details from './components/Home/Details/Details'
import Contract from './components/Home/Contract/Contract';
import More from './components/Home/More/More';
import NotFound from './components/Home/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import LogIn from './components/Header/LogIn/LogIn';
import Services from './components/Home/Services/Services';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './Contex/AuthProvider';

function App() {
  return (
    <div >
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>

            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/contract">
              <Contract></Contract>
            </PrivateRoute>
            <Route path="/more">
              <More></More>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
