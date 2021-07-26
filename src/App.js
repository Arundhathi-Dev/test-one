import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Admin from "./components/Admin.js";
import Form from "./components/Form.js";
function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route exact path = "/" component = {Form}/>
        <Route path = "/admin" component = {Admin}/>
      </Switch>      
    </Router>
    </>
  );
}
export default App;
