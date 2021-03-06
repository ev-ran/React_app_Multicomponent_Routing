import React from 'react';

//import Link from react-dom-router
import { Link } from "react-router-dom";
function Navigation(props) {
    let name = "Paul";
    let secondName = "Stout"
    return (
        <div className="Navigation">
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/clock">Clock</Link></li>
                <li><Link to="/contact">Contact</Link> </li>
                <li><Link to="/welcome">Welcome</Link> </li>
                <li><Link to={"/welcome/Peter"}>Welcome+Name</Link> </li>
                <li><Link to={"/welcome/"+name}>Welcome+[name]</Link> </li>
                <li><Link to={"/welcome/"+name+"/"+secondName}>Welcome+[name]+[sname]</Link> </li>
                <li><Link to={"/fetch"}>TestFetch</Link></li>
                <li><Link to={"/jeopardy"}>Jeopardy</Link></li>
            </ul>
        </div>
    );
}
export default Navigation;