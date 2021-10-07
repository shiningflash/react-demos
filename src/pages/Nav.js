import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Home from "./Home";


function Nav() {
    return (
        <Router>
            <div style={{padding:"10px"}}>
                <Link style={{padding:"10px"}} to="/">Home</Link>
                <Link style={{padding:"10px"}} to="/blogs">Blog Articles</Link>
                <Link style={{padding:"10px"}} to="/contact">Contact Me</Link>
            </div>

            <hr/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/blogs">
                    <Blogs/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Nav;
