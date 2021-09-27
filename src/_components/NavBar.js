import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [blackShirtsVisible, setBlackShirtsVisible] = useState(false);

  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <li>
            Home
            <div className>
              {/* <img src="../_assets/blackshirts.svg" alt="#" /> */}
            </div>
          </li>
          <li>Schedule</li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">
                News
                {/* <i class="fa fa-caret-down"></i> */}
              </button>
              <div class="dropdown-content">
                <a href="#">Top Headlines</a>
                <a href="#">Husker News</a>
                <a href="#">Around The League</a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">
                Stats
                {/* <i class="fa fa-caret-down"></i> */}
              </button>
              <div class="dropdown-content">
                <a href="#">Team Stats</a>
                <a href="#">Player Stats</a>
              </div>
            </div>
          </li>
          <li>
            <div class="dropdown">
              <button class="dropbtn">
                Roster
                {/* <i class="fa fa-caret-down"></i> */}
              </button>
              <div class="dropdown-content">
                <a href="#">Nebraska Roster</a>
                <a href="#">Nebraska Depth-Chart</a>
              </div>
            </div>
          </li>

          <li>Recruiting</li>
          <li>Blog</li>
          <li>Rankings</li>
          <li>Standings</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
