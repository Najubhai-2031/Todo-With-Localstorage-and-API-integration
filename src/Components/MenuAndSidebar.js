import React from 'react';
import { MdDashboard, MdSettings, MdShoppingCart, MdOutlineSearch, MdMessage, MdNotifications,MdSupervisedUserCircle } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import '../style.css'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

function MenuAndSidebar(props) {

    const openNav = () => {
        document.getElementById("mySidenav").style.width = "300px";
        document.getElementById("left").style.marginLeft = "300px"
        document.getElementById("open-btn").style.display = "none"
        document.getElementById("open-btn-two").style.display = "block"
    }

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("left").style.marginLeft = "0"
        document.getElementById("open-btn").style.display = "block"
        document.getElementById("open-btn-two").style.display = "none"
    }

    return (
        <React.Fragment>

            <section className='green'>
                <nav>
                    <div>
                        <ul id='left' className='menu-bar'>
                            <li>
                                <span id='open-btn' style={{ fontSize: '27px', cursor: "pointer" }} onClick={openNav}>&#9776; </span>
                            </li>
                            <li>
                                <span id='open-btn-two' style={{ fontSize: '27px', cursor: "pointer", display: 'none' }} onClick={closeNav}>&#9776;</span>
                            </li>
                            <li><Link to='/'><MdOutlineSearch /></Link></li>
                            <li><Link to='/'>Items Lookup</Link></li>
                            <li><Link to='/'><MdMessage /></Link></li>
                            <li><Link to='/'><MdNotifications /></Link></li>
                            <li><Link to='/'><CgProfile /></Link></li>
                        </ul>
                    </div>
                </nav>
            </section>
            <div id="mySidenav" className="sidenav">
                <img src={logo} alt="stackSummation" />
                <Link to='/'><MdDashboard /> Dashboard</Link>
                <Link to="/user"><MdSupervisedUserCircle /> Users</Link>
                <Link to="/"><MdSettings /> Settings </Link>
                <Link to="/"><MdShoppingCart /> Purchase Order </Link>
            </div>
        </React.Fragment>
    );
}

export default MenuAndSidebar;