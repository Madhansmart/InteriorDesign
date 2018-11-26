import React , { Component } from 'react';
import './Header.css';

class Header extends Component {
  render(){
    return(
      <div className="Header">
         <div className="container-fluid">
             <nav className="navbar navbar-expand-md bg-custom navbar-dark">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                   <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                     <ul className="navbar-nav">
                         <li className="nav-item">
                            <a className="nav-link" href="/#">ABOUT US</a>
                         </li>
                         <li className="nav-item">
                            <a className="nav-link" href="/#">SERVICES</a>
                         </li>
                         <li className="nav-item">
                            <a className="nav-link" href="/#">CATALOGUE</a>
                         </li>
                         <li className="nav-item">
                            <a className="nav-link" href="/#">PRICING</a>
                         </li>
                         <li className="nav-item">
                            <a className="nav-link" href="/#">CONTACTS</a>
                         </li>
                     </ul>
                  </div>
              </nav>
              <div className="container head-text">
                  <div className="row">
                    <div className="col-md-5">
                        <h1>INT<b className="orange">E</b>RIOR <span>DESIGN</span></h1>
                    </div>
                    <div className="col-md-1 offset-md-4">
                        <form action="/action_page.php">
                            <input type="text" name="search" /><i class="fa fa-search"></i>
                        </form>
                    </div>
                  </div>
              </div>
         </div>
      </div>
    )
  }
}

export default Header;
