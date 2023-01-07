import React from 'react'

const Filters = (props) => {
  return (
    <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "280px",backgroundColor:"#fff",height: "100%" ,position: "absolute" }}>
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black text-decoration-none ">
        <svg class="bi pe-none me-2" width="40" height="32"></svg>
        <span class="fs-5 me-4 toggle">Dark Mode </span>
        <div class="form-check form-switch d-flex align-items-center mb-3 mb-md-0 me-md-auto " >
  <input class="form-check-input" onClick={props.toggleMode} style={{ width: "60px", height:"30px" }} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
</div>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link text-black" aria-current="page">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Trending News
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-black">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Business
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-black">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Entertainment
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-black">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Health
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-black">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Science
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-black">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Sports
          </a>
        </li>
        <li>
          <a href="#" class="nav-link text-black">
            <svg class="bi pe-none me-2" width="16" height="16"></svg>
            Technology
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Filters
