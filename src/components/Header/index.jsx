import React from "react";
import logo from '../../assets/logo.png'
function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="main">
                    <div className="logo-div">
                        <img className="logo" alt="" src={logo} />
                    </div>
                    <div className="header_center">
                        <div className="center_button">Home</div>
                        <div className="center_button">Rooms and suits</div>
                        <div className="center_button">Offers</div>
                        <div className="center_button">My bookings</div>
                        <div className="center_button">Profile</div>
                    </div>
                    <div className="header_right">
                        <div className="header_container">
                            <a href="">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;