import User from "../Containers/User";
import Home from "../Containers/Home";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
     <Route path="/" component={Home} exact />
      <Route path="/user" component={User} exact />
    </Switch>
  );
}

export default App;
