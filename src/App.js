import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard';
import PlaceOrder from './pages/Dashboard/User/PlaceOrder/PlaceOrder';
import Explores from './pages/Explores/Explores/Explores';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRouter from './pages/Login/PrivateRouter/PrivateRouter';
import Signup from './pages/Login/Signup/Signup';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRouter path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRouter>
            <PrivateRouter path="/explore">
              <Explores></Explores>
            </PrivateRouter>
            <PrivateRouter path="/place-order/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRouter>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
