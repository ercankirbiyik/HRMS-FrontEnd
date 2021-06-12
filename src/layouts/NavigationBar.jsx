import React from 'react'

import "./CustomNavigation.css"

import { AiFillMessage } from "react-icons/ai"

function NavigationBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-light bg-white nav-shadow">
        <div class="container-fluid container">
          <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
            <ul class="navbar-nav me-auto navbar-links">
              <li class="nav-item active">
                <a class="nav-link logo" href="#">HRMS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link long" href="//codeply.com">looking for a job</a>
              </li>
              <li class="nav-item">
                <a class="nav-link long" href="#">Profile</a>
              </li>
              <li class="nav-item long">
                <a class="nav-link " href="#">CV</a>
                <span className="new">New</span>
              </li>
              <li class="nav-item ">
                <a class="nav-link long" href="#">Career</a>
              </li>
            </ul>
          </div>
          <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul class="navbar-nav ms-auto d-flex align-items-center">
              <li className="nav-item">
                <AiFillMessage size={20} color={"#979797"} />
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Ercan Kırbıyık</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavigationBar