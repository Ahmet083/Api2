import React from "react";





const Header = () =>{
    return (
        <div className="container">
        <header className="bg-warning p-2">
        <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
         
          <span class="fs-4">Hizmet Bulma App</span>
          </a>
    
          <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a href="#/Login" className="btn btn-light mx-2">Login  </a>
          <a href="#/Register" className="btn btn-light">Register</a>
            
          </nav>
        </div>
    
      </header>
        </div>

    )
}


export default Header