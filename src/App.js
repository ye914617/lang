import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu/Menu";
import About from "./Pages/About";
import Donate from "./Pages/Donate";
import PetPage from "./Pages/PetPage";
import Adopt from "./Pages/Adopt";
import Checklist from "./Pages/Checklist";
import Footer from "./components/Footer/Footer";
import Login from "./components/LoginComponents/Login";
import Welcome from "./components/WelcomeComponents/Welcome";
import Alert from "./components/Alert/Alert";
import { useGlobalContext } from "./Global/GlobalContext";

function App() {
  const { loginState, alertState } = useGlobalContext();
  const { loginPage, isLogin } = loginState;
  const { show } = alertState;

  return (
    <>
      {show && <Alert />}
      <Router>
        <Navbar />
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cutepets" component={PetPage} />
          <Route path="/donate" component={Donate} />
          <Route path="/adopt" component={Adopt} />
          <Route path="/checklist" component={Checklist} />
          <Route component={Home} />
        </Switch>

        {loginPage && (isLogin ? <Welcome /> : <Login />)}
        {/*If user is logined, display Welcome component,else display Login component */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
