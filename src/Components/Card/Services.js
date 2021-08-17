import React from "react";
import "./Services.css";
import image1 from "../Card/Assets/img1.jpg";
import image2 from "../Card/Assets/img2.jpg";
import image3 from "../Card/Assets/img3.jpg";

const ServicesC = () => {
  const services = [
    {
      tiltle: "Strategy & Insight",
      img: image1,
      desc: "Actionable insights, people-inspired strategies, and digital solutions that help your brand achieve better business outcomes and limitless possibilities.",
    },
    {
      tiltle: "Creative & Experience Design",
      img: image2,
      desc: "People-inspired, accessible, and imaginative design work created with your customers’ needs and preferences top of mind.",
    },
    {
      tiltle: "Marketing & Communication",
      img: image3,
      desc: "We work with your brand to build a human-centric marketing model where strategy and technology work together.",
    },
  ];
  return (
    <div>
      <h2 className="Navtitle">Our Services</h2>
      <div className="list-services">
        {services.map((service, i) => (
          <div className="service-card" key={i}>
            <img src={service.img} alt="img" className="card-img-top"></img>
            <h3 className="title">{service.tiltle}</h3>
            <p>{service.desc}</p>
            <a href="#" className="btn btn-outline-dark">
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesC;
