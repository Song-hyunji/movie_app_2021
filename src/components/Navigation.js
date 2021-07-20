import React from "react"
import "./Navigation.css";
import { Link} from "react-router-dom"

function Navigation(){
    return (
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <div className="more"> 
          If you want <p/> to see more, <p/>
          click movie
          </div>
        </div>
      );
}

export default Navigation;