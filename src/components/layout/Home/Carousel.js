import React, { Component } from 'react'
import './Carousel.css'
import Slider from 'react-slick';
import kitchen1 from '../../../images/carouselImages/kitchen1.jpeg';
import kitchen2 from '../../../images/carouselImages/kitchen2.jpg';
import laundryRoom1 from '../../../images/carouselImages/laundryRoom1.png';
// import jimmy from '../../../images/jimmy3.jpg';
import MyButton from '../../utils/MyButton';


class Carousel extends Component {
  render() {
    const settings = {
      dots: false,
      inifinite: true,
      speed: 500,
      autoplay: true
    }

    return (
      <div className="jumbotron-fluid">
        <div 
          className="container-fluid carousel-container"
          style={{
            height: `${window.innerHeight}px`,
            width: '100%',
            overflow: 'hidden'
          }}
        >
         <div id="bg-overlay">
          <div className="carousel-home">
            
                {/* <div className="container"> */}
                  <div className="row">
                    <div className="col-md-12">
                    <br/>
                        <h1>we help you
                          <br />
                          help your appliance
                        </h1>
                        <div className="header-button">
                        <MyButton
                          link="#services"
                          bck="#db7a24"
                          color="black"
                          className="button"
                          text="My Services"
                        />
                        <MyButton 
                          link="#contact-form"
                          bck="#db7a24"
                          color="black"
                          className="button"
                          text="Get Quote"
                        />
                        </div>
                    </div>
                    {/* if I want to add jimmy photo on other half of front page */}

                    {/* <div className="col-md-4">
                      <div className="img-container">
                        <img src={jimmy} alt="Jimmy at Legend Appliance Repair" className="jimmyImage" />
                      </div>
                    </div> */}
                  </div>
                {/* </div> */}
            </div>
         </div>
         <Slider {...settings}>
            <div>
              <div  
                className="carouselImage"
                style={{
                  background: `url(${kitchen1})`,
                  // height: `${window.innerHeight}`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'          
                }}
              >
              </div>
            </div>
            <div>
              <div  
                className="carouselImage"
                style={{
                  background: `url(${kitchen2})`,
                  // height: `${window.innerHeight}`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              >
              </div>
            </div>
            <div>
              <div  
                className="carouselImage"
                style={{
                  background: `url(${laundryRoom1})`,
                  // height: `${window.innerHeight}px`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
              >
              </div>
            </div>
          </Slider>
        </div>
        </div>
      )
  }
}

export default Carousel;
