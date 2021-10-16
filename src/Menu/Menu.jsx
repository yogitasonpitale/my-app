import "./Menu.css";
import React from "react";
import {HashRouter,Route,Switch,Redirect} from 'react-router-dom';
import Home from '../Home/index';
import About from '../About/index';
import Contact from '../Contact/index';

function template() {
  const {menuItem,isMobileView,isShowMobileMenu}=this.state;
  return(
            <div><ul style={{left:isShowMobileMenu ? 0 : -170}} onClick={this.fnMenuClick} className={isMobileView && 'mobile-view-ul'}>
             
                <li id='home' className={menuItem == 'home' && 'menu-active'}><a href="#/home">Home</a></li>
                <li id='about' className={menuItem == 'about' && 'menu-active'}><a href="#/about">About</a></li>
                <li id='contact' className={menuItem == 'contact' && 'menu-active'}><a href="#/contact">Contact</a></li>
                
           </ul>
            {isMobileView && <input onClick={this.fnMenuBtnClick.bind(this)} className="mobile-menu-btn" type='button' value="menu" /> }
           <HashRouter>
             <Switch>
           <Route path="/" exact  component={Home} />
             <Route path="/home" component={Home} />
             <Route path="/about" component={About} /> 
             <Route path="/contact" component={Contact} />
              <Redirect to="/home" />
             </Switch>
            </HashRouter>
                    
           
           </div>
           );
  
};

export default template;
