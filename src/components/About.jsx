import React, { Component } from "react";
import PropTypes from "prop-types";
import Icofont from "react-icofont";
import ScrollAnimation from "react-animate-on-scroll";

class About extends Component {
  render() {
    //About loop start
    const aboutdata = this.props.aboutsData.map((about, index) => (
      <div className="col-lg-4 col-md-6" key={index}>
        <div className="about-info">
          <Icofont icon={about.Icon} />
          {/* <h3>{about.title}</h3> */}
          <p>{about.content}</p>
        </div>
      </div>
    ));
    //About loop END
    return (
      <React.Fragment>
        <section id="about" className="about-us ptb-100">
          <div className="container">
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
            <div className="row">{aboutdata}</div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
//Props Types
About.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  aboutsData: PropTypes.array
};

//Default Props
About.defaultProps = {
  SectionbgTitle: "About",
  sectionTitle: "About Us",
  sectionDescription:
    "Jain Dhingra & Associates is a group of experienced professionals in the field of Finance & Accounts, Taxation, Audit, Outsourcing and Compliances etc. since 1973.",
  aboutsData: [
    {
      Icon: "icofont-binoculars",
      title: "Backgrounds",
      content:
        "The certified and trusted advisors of Jain Dhingra & Associates strive to serve and support client with their exquisite services and guidance for entrepreneurs dealing in manufacturing specially FMCG sector, Trading, Exports, Charitable Institutions etc. and looking for the best financial advice for the optimum solutions of Business setup, Audit & Assurance, Taxation, Statutory Compliances, Outsourcing Services, CFO Services and others."
    },
    {
      Icon: "icofont-direction-sign",
      title: "Our Approach",
      content:
        "Since its inception, Jain Dhingra & Associates is serving the entities of corporate and dealing with the accounting affairs of giant firms, keeping loyalty and dedication as their prime armours."
    },
    {
      Icon: "icofont-thermometer",
      title: "Methodology",
      content:
        "With our best team members who are professionally experienced and well-versed with the world of digitalization; always stand to serve nothing like second with their best works of SAP, M.S. Office, Tally and other latest software programs."
    },
    {
      Icon: "icofont-users-social",
      title: "Our Rich Experience",
      content:
        "It was in 1973 when two wise brains of the accounting field CA Ravindra Nath Dhingra and CA Bhoopat S. Jain thought of establishing an entity to provide professional guidance together with all their skills and experiences under one roof."
    },
    {
      Icon: "icofont-street-view",
      title: "Our Rich Experience",
      content:
        "With their sincere efforts and potentials, they succeed in building Jain Dhingra & Associates as a big name with a small team in the field of Accounts and taxation."
    },
    {
      Icon: "icofont-polygonal",
      title: "Our Rich Experience",
      content:
        "They guided Entrepreneurs in Audit and Taxation, Legal documentations and compliances, proprietary and partnership affairs of small, medium and large associations, and also assisted individuals to Start-up their businesses smoothly without any hiccups of accounting and legal documentation, primarily for the manufacturing, trading, and exports businesses."
    },
    {
      Icon: "icofont-money",
      title: "Value for Money",
      content:
        "It's been more than 46 years of successful navigation and service providence to around 250 of small and large entities who showed their trust on JDA and we prove it worth for them. Besides this, JDA has also been auditing most of the well-known National Banks, Government Insurance Companies and Corporation (Govt. Undertakings) for more than a four decade."
    },
    {
      Icon: "icofont-unique-idea",
      title: "Flexible Development",
      content:
        "Now with the booming world of digitalisation, we also want to provide services to our clients more easily and smartly to the individuals and firms looking for professional guidance for their account and taxation related digitalisation queries. We know that the subjects of accounting and taxation require sincerity, trust and dedication and JDA is the name with all three of them."
    }
  ]
};

export default About;
