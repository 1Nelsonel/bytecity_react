import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "reactstrap";
import client1 from "../assets/clientone.svg";
import client2 from "../assets/clienttwo.svg";
import client3 from "../assets/clientthree.svg";
import "./Pages.css";

export default function Clients() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container className="p-5">
      <div className="client-title p-4">
        <h1 className="fw-bolder text-center">Our Clients</h1>
      </div>

      <div style={{ position: "relative" }} >
        <Carousel responsive={responsive}>
          <div>
            <img className="clients-image" src={client1}  />
          </div>
          <div>
            <img className="clients-image" src={client2}  />
          </div>
          <div>
            <img className="clients-image" src={client3}  />
          </div>
          <div>
            <img className="clients-image" src={client2}  />
          </div>
          <div>
            <img className="clients-image" src={client3}  />
          </div>
          <div>
            <img className="clients-image" src={client2}  />
          </div>
        </Carousel>
      </div>
    </Container>
  );
}
