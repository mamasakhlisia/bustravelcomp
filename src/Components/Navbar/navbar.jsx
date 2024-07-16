/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const Navbar = () => {
  const [state, setState] = useState("navBar");

  const showNav = () => {
    setState('navBar activeNavbar');
  }
  const removeNav = () => {
    setState('navBar');
  }


  const [formState, setFormState] = useState(false);
  const alterForm = () => {
    formState ? setFormState(false) : setFormState(true);
  };

  return (
    <section className ='navBarSection'>
      <header className = 'header flex'>
        <div className = 'logoDiv'>
          <a href = "#" className="logo flex">
            <h1><MdOutlineTravelExplore className="icon"/> Tniggers.</h1>
          </a>
        </div>

        <div className={state}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">Packages</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">Shop</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">Pages</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">News</a>
            </li>
            <li className="navItem">
              <a href="" className="navLink">Contact</a>
            </li>

            <button onClick={alterForm} className='btn'>
              <a href="#">Login</a>
            </button>
          </ul>
          <div onClick = {removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
      <div class="login-page">
        <div class={formState ? "form activeForm" : "form"}>
          <form class="login-form">
            <button action="" className="login-action btn"><FaGoogle />Login with Google</button>
            <button action="" className="login-action btn"><form className=""><FaFacebookF /></form>Login with Facebook</button>
            <button action="" className="login-action btn"><form className=""><FaTwitter /></form>Login with Twitter</button>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button className = "btn">Login</button>
            <p class="message">Not registered? <a href="#">Create an account</a></p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Navbar