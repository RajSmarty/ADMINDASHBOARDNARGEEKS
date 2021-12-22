import React from 'react'
import cmplogo from '../images/cmplogo.png'
import fblogo from '../images/fb.png'
import twitterlogo from '../images/twitter.png'



export default function Navbar() {
    return (
        <div>
            <div style={{ height: "2rem", backgroundColor: "rgb(72 113 165)", display:"flex", justifyContent:"center" }}>
                <div style={{width:"90%"}}> 
                    <img style={{ height: "30px", filter: "invert(100%)", cursor:"pointer" }} src={fblogo} alt="" />
                    <img className="mx-3" style={{ height: "30px", filter: "invert(100%)", cursor:"pointer" }} src={twitterlogo} alt="" />
                    
                </div>
            </div>
            <nav style={{ backgroundImage: "linear-gradient(to right, white, #668CCD", padding: "15px 35px" }} className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
                    <img src={cmplogo} alt="" />
                     
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li style={{marginLeft:"5.5rem" }} className="nav-item">
                                <a style={{ color: "black" , fontSize:"25px", fontWeight:"bold", fontFamily:"font-family: 'Secular One', sans-serif;" }} className="nav-link mx-5 active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: "black" , fontSize:"25px", fontWeight:"bold", fontFamily:"font-family: 'Secular One', sans-serif;" }} className="nav-link mx-5" href="/">About Us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a style={{ color: "black" , fontSize:"25px", fontWeight:"bold", fontFamily:"font-family: 'Secular One', sans-serif;" }} className="nav-link mx-5 dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Careers
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/">1</a></li>
                                    <li><a className="dropdown-item" href="/">2</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">3</a></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
