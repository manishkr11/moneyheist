import React from 'react'
import nirobi from '../pictures/nirobi.jpg'
import denver from '../pictures/icons/denver.jpg'
import helsinkiobi from '../pictures/icons/helsinki.jpg'
import "../style/Carousel.css"

function Carousel() {
    return (
        <div>
            <div id="demo" className="carousel slide" data-ride="carousel">


                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                </ul>


                    <div className="carousel-inner">
                        <div className="carousel-item active carousel-img">
                            <img src={denver} alt="Los Angeles" />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={nirobi} alt="Chicago" />
                    </div>
                    <div className="carousel-item">
                        <img src={helsinkiobi} alt="New York" />
                    </div>

            <a className="carousel-control-prev" href="#demo" data-slide="prev">
            <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
            <span className="carousel-control-next-icon"></span>
            </a>

            </div>
        </div>
    )
}

export default Carousel
