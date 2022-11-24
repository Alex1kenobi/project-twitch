import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import twitter from "../../img/twitter.svg" 

export const Footer = () => {
  return (
    <footer class="py-3"><div class="container">
    <div class="d-flex justify-content-center align-items-center flex-column">
      <h5 class="mb-3"><a href="#">Alex1kenobi</a></h5>
      <div class="d-flex mb-3">
        <a href="#">
          <img src={Logo}/></a>

        <a href="#">
          <img src="src/front/img/instagram.svg" /></a>
      </div>
      <div class="d-flex">
        <p class="mb-0 small text-muted">© 2022 Alex1kenobi. All rights reserved.</p>
      </div>
    </div>
    </div>
  </footer>
  );
};
