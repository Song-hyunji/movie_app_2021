import React from "react";
import "./About.css";

function About(props){
  console.log(props);
    return (
        <div className="about__container">
          <span>
           Hello, I'm HyunJi-Song <p/>
           Welcome to my Movie app 2021 <p/>
           Enjoy ! Thank U.
          </span>
          <span className="text-right">− HJ − </span>
        </div>
      );
}
export default About;