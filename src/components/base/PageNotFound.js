import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="notFoundContainer">
        <div className="fofContainer">
          4
          <img
            src="https://gist.github.com/sllozier/b9d6597945d50f21c9d37d5ee4853a0c/raw/f98adcb7e3ac283287ca322f23169fbb2b9fdefc/404_turtle.png"
            alt=""
          />
          4
        </div>
        <div>Oh no! The page you were looking for does not exist</div>
        <Link to="/">
          <div className="not-found-button">
            <button>Return Home</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
