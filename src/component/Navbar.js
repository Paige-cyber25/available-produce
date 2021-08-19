import React, {useState, useEffect} from "react";
import classes from "./Navbar.module.css";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    // The function that displays the items when clicked to true and vice versa
    const togglerClick = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)

        //Cleaner function used whenever the component gets destroyed
        return () => {
            window.removeEventListener('resize',changeWidth)
        }
    }, [])

  return (
    <nav className={classes.navContainer}>
        <div className={classes.imageContainer}>
            <img
              src="/zeroHungerIcon.svg"
              alt="zeroHungerIcon"
              className={classes.navbarIcon}
            />
            <span className={classes.iconTitle}>Zerohunger</span>
          </div>
        {(toggleMenu || screenWidth > 768) && (
            <> 
          <ul className={classes.listContainer}>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
          <input type="text" placeholder="Search" />
          <div className={classes.cartContainer}>
            <img className={classes.cartIcon} src="/cartIcon.svg" alt="cartIcon" />
            <span className={classes.cartNumber}>0</span>
          </div>
          <div className={classes.buttonContainer}>
              <a href=" ">
                  <button type="button" className={classes.loginButton}>Login</button>
              </a>
              <a href=" ">
                  <button type="button" className={classes.signupButton}>Signup</button>
              </a>
          </div>
          
          </>
        )}
      <button type="button" className={classes.togglerButton} onClick={togglerClick}>
          <i class="fa fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;
