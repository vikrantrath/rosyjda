import React, { Component } from "react";
import Icofont from "react-icofont";
import OwlCarousel from "react-owl-carousel3";
import PropTypes from "prop-types";

class Testimonials extends Component {
  render() {
    //Testimonials loop start
    const testimonialsitem = this.props.testimonialsData.map(
      (testimonials, index) => (
        <div className="single-testimonial-item text-center" key={index}>
          <Icofont icon="icofont-quote-left" />
          <p>{testimonials.Content}</p>
          <div className="client-info">
            <h3>{testimonials.Name}</h3>
          </div>
        </div>
      )
    );
    //Testimonials loop END
    return (
      <React.Fragment>
        <section className="testimonials ptb-100">
          <div className="container">
            <OwlCarousel
              className="owl-theme testimonial-slides"
              items={1}
              nav={true}
              dots={false}
              autoplay={false}
              loop={true}
              autoplayHoverPause={true}
              smartSpeed={1000}
              navText={[
                "<i class='icofont-arrow-left'></i>",
                "<i class='icofont-arrow-right'></i>"
              ]}
            >
              {testimonialsitem}
            </OwlCarousel>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

//Props Types
Testimonials.propTypes = {
  testimonialsData: PropTypes.array
};

//Default Props
Testimonials.defaultProps = {
  testimonialsData: [
    {
      clientImage: require("../assets/img/client-one.png"),
      Content:"To help our clients to meet their goals through our professionals, services and solutions.",
      Name: "Our Mission",
      Profession: "Founder & Director"
    },
    {
      clientImage: require("../assets/img/client-one.png"),
      Content:
      "To provide the best professional solutions to fulfil the client's business requirements, guiding at our best.",
      Name: "Our Vision",
      Profession: "Founder & Director"
    }
  ]
};

export default Testimonials;
