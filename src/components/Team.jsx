import React, { Component } from "react";
import PropTypes from "prop-types";
import Icofont from "react-icofont";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel3";
import ScrollAnimation from "react-animate-on-scroll";

class Team extends Component {
  render() {
    //Team loop start
    const teamdata = this.props.teamItems.map((team, index) => (
      <div className="team-box" key={index}>
        <img src={team.Image} alt="Description" />
        <div className="box-content">
          <div className="box-inner-content">
            <h3 className="title">{team.Name}</h3>
            <span className="post">{team.Profession}</span>
            <ul className="icon">
              <li>
                <Link to={team.facebookLink}>
                  <Icofont icon="icofont-facebook" />
                </Link>
              </li>
              <li>
                <Link to={team.linkedinLink}>
                  <Icofont icon="icofont-linkedin" />
                </Link>
              </li>
              <li>
                <Link to={team.twitterLink}>
                  <Icofont icon="icofont-twitter" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ));
    //Team loop END
    return (
      <React.Fragment>
        <section id="team" className="our-team ptb-100">
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

            <div className="row">
              <OwlCarousel
                className="owl-theme team-slides"
                dots={false}
                autoplay={true}
                loop={true}
                margin={30}
                nav={true}
                smartSpeed={1000}
                autoplayHoverPause={true}
                navText={[
                  "<i class='icofont-arrow-left'></i>",
                  "<i class='icofont-arrow-right'></i>"
                ]}
                responsive={{
                  0: { items: 1 },
                  768: {
                    items: 2
                  },
                  1024: {
                    items: 3
                  },
                  1200: {
                    items: 3
                  }
                }}
              >
                {teamdata}
              </OwlCarousel>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
//Props Types
Team.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  teamsData: PropTypes.array
};

//Default Props
Team.defaultProps = {
  SectionbgTitle: "Team",
  sectionTitle: "Our Team",
  sectionDescription:
    "With our team of experts in accountancy, Company Law and the corporate taxation system Jain Dhingra & Associates stands high on its core values and services with its certified and experienced Chartered Accountants, Business Analysts, Tax and Finance Experts, IT Professionals, and the Support Staff who strive to resolve your queries and guide you at their best. Meet the top-notch professionals of Jain Dhingra & Associates.",
  teamsData: [
    {
      Image: require("../assets/img/person-anonymous-thumb.jpg"),
      Name: "Williamson",
      Profession: "Web Developer",
      facebookLink: "/#0",
      linkedinLink: "/#0",
      twitterLink: "/#0"
    },
    {
      Image: require("../assets/img/person-anonymous-thumb.jpg"),
      Name: "Jone Doy",
      Profession: "Designer",
      facebookLink: "/#0",
      linkedinLink: "/#0",
      twitterLink: "/#0"
    },
    {
      Image: require("../assets/img/person-anonymous-thumb.jpg"),
      Name: "Oliver",
      Profession: "Photographer",
      facebookLink: "/#0",
      linkedinLink: "/#0",
      twitterLink: "/#0"
    },
    {
      Image: require("../assets/img/person-anonymous-thumb.jpg"),
      Name: "Mark Jone",
      Profession: "CEO",
      facebookLink: "/#0",
      linkedinLink: "/#0",
      twitterLink: "/#0"
    }
  ],
  teamItems: [
    {
      Name: "K.C Agarwal",
      Image: require("../assets/img/person-anonymous-thumb.jpg"),
      Profession: "C.A",
      facebookLink: "/#0",
      linkedinLink: "/#0",
      twitterLink: "/#0"
    },
    {
      Name: "Rakesh Gupta",
      Image: require("../assets/img/person-anonymous-thumb.jpg"),
      Profession: "C.A",
      facebookLink: "/#0",
      linkedinLink: "/#0",
      twitterLink: "/#0"
    },
    {
      Name: "Pankaj Kumpawat",
      Image: require("../assets/img/person-anonymous-thumb.jpg"),
      Profession: "C.A",
      facebookLink: "/#0",
      linkedinLink: "/#0",
      twitterLink: "/#0"
    },
    {
      Name: "Shekhar Nigam",
      Image: require("../assets/img/person-anonymous-thumb.jpg"),
      Profession: "C.A",
      facebookLink: "/#0",
      linkedinLink: "/#0",
      twitterLink: "/#0"
    },
    {
      Name: "Ajay Gupta",
      Image: require("../assets/img/person-anonymous-thumb.jpg"),
      Profession: "C.A",
      facebookLink: "/#0",
      linkedinLink: "/#0",
      twitterLink: "/#0"
    }
  ]
};

export default Team;
