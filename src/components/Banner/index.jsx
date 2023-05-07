import React from "react";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Banner() {
    return (
        <div className="banner">
            <div className="container">
                <div className="banner-info">
                    <h4>Enjoy your vacation with our hotel</h4>
                    <h1>Let us plan a perfect your International holiday</h1>
                    <button>Explore now</button>
                </div>
                <div className="booking_div">
                    <div className="booking">
                        <div>
                            <div className="banner_main_div">
                                <div className="booking_header">
                                <div><FontAwesomeIcon icon={faUser} /></div>
                                    <h4>check in</h4>
                                    <div><FontAwesomeIcon icon={faUser} /></div>
                                </div>
                            </div>
                            <div className="booking_bof">
                                <h2>Date</h2>
                                <h4>Date</h4>
                            </div>
                        </div>
                    </div>
                    <div className="booking">
                        <div>
                            <div className="banner_main_div">
                                <div className="booking_header">
                                <div><FontAwesomeIcon icon={faUser} /></div>
                                    <h4>Check out</h4>
                                    <div><FontAwesomeIcon icon={faUser} /></div>
                                </div>
                            </div>
                            <div className="booking_bof">
                                <h2>Date</h2>
                                <h4>Date</h4>
                            </div>
                        </div>
                    </div>
                    <div className="booking">
                        <div>
                            <div className="banner_main_div">
                                <div className="booking_header">
                                <div><FontAwesomeIcon icon={faUser} /></div>
                                    <h4>Adult</h4>
                                    <div><FontAwesomeIcon icon={faUser} /></div>
                                </div>
                            </div>
                            <div className="booking_bof">
                                <h2>Date</h2>
                                <h4>Date</h4>
                            </div>
                        </div>
                    </div>
                    <div className="booking">
                        <div>
                            <div className="banner_main_div">
                                <div className="booking_header">
                                <div><FontAwesomeIcon icon={faUser} /></div>
                                    <h4>Child</h4>
                                    <div><FontAwesomeIcon icon={faUser} /></div>
                                </div>
                            </div>
                            <div className="booking_bof">
                                <h2>Date</h2>
                                <h4>Date</h4>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
export default Banner;
