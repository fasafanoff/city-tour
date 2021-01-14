import React from 'react';
import "./NavBar.scss";
import logo from '../../logo.png';
import { logRoles } from '@testing-library/react';


/// I pulled links out of NavBar class because I don't know how to solve my problem in a better way
/// the proplem occures when I click on link , the react recreates the NavBar instead of using the same one so the data is always static If I were to leave it in
/// constructor
var links = [
        { link: "/", text: "home"},
        { link: "/about", text: "about" },
        { link: "/list", text: "tours" },
      ]


export default class NavBar  extends React.Component{
  render() {
    return (
      <nav className="navbar">
        <img src={logo} alt="City tours logo." />
        <ul className="nav-links">
          {
             links.map((link,index) => {return (
               <li key={index}>
                 <a
                   href={link.link}
                   className={`nav-link ${this.props.active===index && "active"}`}
                 >
                   {link.text}
                 </a>
               </li>
             );
              })
          }
        </ul>
      </nav>
    );
  }
}
