import React from 'react'
import '../App.scss'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Nav() {

    return (
        <div className="Column">
            <div className="NavBar">
                <div className="LogoBox">
                    <img alt="logo" src="https://cdn.shopify.com/s/files/1/0040/3786/9638/files/light_it_forward_candles.png?v=1610401180" ></img>
                    <h1>Light-It-Forward<br></br>Foundation</h1>
                </div>
                <div className="Menu">
                    <Link
                        to="Mission"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <div className="NavButton">
                            <h2>What We Do</h2>
                        </div>
                    </Link>
                    <Link
                        to="Solution"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <div className="NavButton">
                            <h2>How You Can Help</h2>
                        </div>
                    </Link>
                 
                    <Link
                        to="TheWayHolder"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <div className="NavButton">
                            <h2>How It Works</h2>
                        </div>
                    </Link>
                    <Link
                        to="More"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <div className="NavButton">
                            <h2>Our Journey</h2>
                        </div>
                    </Link>
                 
                  
               
                    <a href="https://checkout.square.site/merchant/HCYYCPA084J1Z/checkout/5E7H3JQS2HCNRO2FMWAIPRVM" target="_blank" rel="noreferrer">
                        <div className="BigDonate">
                            <h2>Donate</h2>
                        </div>
                    </a>
                </div>
            </div>
            <div className="MobileMenu">
            <Link
                        to="Mission"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <div className="MobileNav">
                            <h2>What We Do</h2>
                        </div>
                    </Link>
                    <Link
                        to="Solution"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <div className="MobileNav">
                            <h2>How You Can Help</h2>
                        </div>
                    </Link>
                 
                    <Link
                        to="TheWayHolder"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <div className="MobileNav">
                            <h2>How It Works</h2>
                        </div>
                    </Link>
                    <Link
                        to="More"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >
                        <div className="MobileNav">
                            <h2>Our Journey</h2>
                        </div>
                    </Link>
                
                
            </div>
        </div>
    )
}