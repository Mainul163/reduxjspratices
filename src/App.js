import GridCrud from "./Component/GridCrud/GridCrud/GridCrud";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GridCrudDetails from "./Component/GridCrud/GridCrudDetails/GridCrudDetails";
import Navbar from "./Component/Navbar/Navbar";
import AddData from "./Component/AddData/AddData/AddData";
function App() {
  return (
    <div className="">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <GridCrud></GridCrud>
          </Route>

          <Route path="/cruddetails/:id">
            <GridCrudDetails></GridCrudDetails>
          </Route>

          <Route path="/add">
            <AddData></AddData>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
