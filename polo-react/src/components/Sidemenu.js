import { React, useState } from "react";
import "../styles/Sidemenu.scss";

const CLOSE = "CLOSE";
const OPEN = "OPEN";

const Sidemenu = () => {
  return (
    <div class="sidemenu">
      <ul>
        <section class="home">
          <li class="menu-item">
            <i class="fa fa-home"></i>Home
          </li>
          <li class="menu-item">
            <i class="fa fa-bell"></i>Notifications
          </li>
          <li class="menu-item">
            <i class="fa fa-paper-plane"></i>Messages
          </li>
        </section>
        <section class="links">
          <li class="menu-item">
            <i class="fa fa-gamepad"></i>Gaming
          </li>
          <li class="menu-item">
            <i class="fa fa-code"></i>Programming
          </li>
          <li class="menu-item">
            <i class="fa fa-motorcycle"></i>Travel
          </li>
          <li class="menu-item">
            <i class="fa fa-gears"></i>Technology
          </li>
          <li class="menu-item">
            <i class="fa fa-hashtag"></i>Mathematics
          </li>
          <li class="menu-item">
            <i class="fa fa-wrench"></i>Physics
          </li>
          <li class="menu-item">
            <i class="fa fa-globe"></i>Web Development
          </li>
          <li class="menu-item">
            <i class="fa fa-android"></i>Android Development
          </li>
        </section>
        <section class="social">
          <li class="menu-item">
            <i class="fa fa-facebook"></i>Facebook
          </li>
          <li class="menu-item">
            <i class="fa fa-twitter"></i>Twitter
          </li>
          <li class="menu-item">
            <i class="fa fa-github"></i>Github
          </li>
        </section>
      </ul>
    </div>
  );
};

export default Sidemenu;
