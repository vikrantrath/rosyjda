import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";

class Feature extends Component {
  render() {
    //Feature loop start
    const featuredata = this.props.sectionItems.map((feature, index) => (
      <div className="col-lg-4 col-md-4" key={index}>
        <div className="single-feature">
          <div className="glyph">
            <Icofont icon={feature.icon} />
          </div>
          <h3>{feature.heading}</h3>
          <p>{feature.description}</p>
        </div>
      </div>
    ));
    //Feature loop END
    return (
      <React.Fragment>
        <section className="feature-area">
          <div className="container">
            <div className="row">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 text-center">
                  <ScrollAnimation animateIn="fadeInUp">
                    <div className="section-title">
                      <h2>{this.props.sectionTitle}</h2>
                      <p>{this.props.sectionDescription}</p>
                      <span className="section-title-bg">
                        {this.props.SectionbgTitle}
                      </span>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
              <div className="row">{featuredata}</div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

//Props Types
Feature.propTypes = {
  featuresData: PropTypes.array
};

//Default Props
Feature.defaultProps = {
  SectionbgTitle: "WHY",
  sectionTitle: "Why Jain Dhingra & Associates",
  sectionDescription:
    "We at Jain Dhingra & Associates, strive to add value to your work with our best financial guidance and services at various genres. With our easily accessible professional guidance and support, you can groom your business complying all regulatory compliances.",

  featuresData: [
    {
      icon: "icofont-responsive",
      heading: "Beautiful Designs",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
    },
    {
      icon: "icofont-brand-mercedes",
      heading: "Unique Features",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
    },
    {
      icon: "icofont-live-support",
      heading: "Reliable Support",
      description:
        "We strive to embrace and drive change in our industry which allows us to keep our clients relevant."
    }
  ],
  sectionItems: [
    {
      heading: "Accounting",
      description:
        "Maintain your Books of Accounts with our skilled and experienced Chartered Accountants who are ready to guide you with all their knowledge and potentials.",
      icon: "icofont-spreadsheet"
    },
    {
      heading: "Taxation",
      description:
        "Consult with us for all your taxation tasks and plan the most effective taxation strategies with us which will indeed help your business to excel.",
      icon: "icofont-ebook"
    },
    {
      heading: "Legal Guidance",
      description:
        "To run a business in the country of laws is not a cup of tea unless you're a pro but with us, you can and that too according to all the legal compliances of India.",
      icon: "icofont-briefcase"
    },
    {
      heading: "Business Advice",
      description:
        "Understanding your business and suggesting the best for the same is our prime agenda for which we serve 24X7 with our team to make your business graph always inclined.",
      icon: "icofont-data"
    }
  ]
};

export default Feature;
