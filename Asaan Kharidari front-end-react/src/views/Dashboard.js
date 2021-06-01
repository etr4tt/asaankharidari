import React from "react";
import { Navbar, Container, Nav, Dropdown, Button, Carousel } from "react-bootstrap";
import logo from "assets/img/coursole1.jpg";
import logo2 from "assets/img/2.jpeg";
import logo3 from "assets/img/3.jpg";
function Dashboard() {
  return (
   
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={logo}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Asaan Kharidari</h3>
        <p>Syed Rafay Javaid & Abdul Moiz</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={logo2}
        alt="Second slide"
      />
  
      <Carousel.Caption>
      <h3>Asaan Kharidari</h3>
        <p>Syed Rafay Javaid & Abdul Moiz</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={logo3}
        alt="Third slide"
      />
  
      <Carousel.Caption>
      <h3>Asaan Kharidari</h3>
        <p>Syed Rafay Javaid & Abdul Moiz</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>



  );
}

export default Dashboard;
