import React from "react";
import "./features.css";
const Features = () => {
  return (
    <>
      <div className="featuresWrapper">
        <ul>
          <h3>1)Product Features</h3>
          <li>1.1)Pokemon Listing with Images</li>
          <li>1.2)On Hover display stats of pokemon</li>
          <li>1.3)Search Box Implementation</li>
          <li>1.4)Pokemon Api Integration</li>

          <h3>2)Optimization</h3>
          <li>2.1)Pagination</li>
          <li>2.2)Lazy Loading</li>
          <li>2.3)Error Boundaries</li>
          <h3>3)Packages</h3>
          <li>3.1)React Router Dom</li>
          <li>3.2)Axios</li>
          <h3>4)Deployed & Hosted</h3>
          <li>
            4.1)
            <a
              href="https://github.com/ioumesh/pokemon.git"
              target="_blank"
              rel="noreferrer"
            >
              Github--Fork
            </a>
          </li>
          <li>4.2)Netlify</li>
        </ul>
      </div>
    </>
  );
};

export default Features;
