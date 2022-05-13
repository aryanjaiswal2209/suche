import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./owl.css";
import header1 from "../data/bg1.png";
import header2 from "../data/bg2.png";
import header3 from "../data/bg3.jpg";
import styles from "./Picture.module.css";

export const OwlDemo = (props) => {
  return (
    <div>
      <div class="container-fluid">
        <div className="row title" style={{ marginBottom: "20px" }}>
          <div class="col-sm-12 btn btn-info">
            Owl Carousel with Auto Play Property In React Application
          </div>
        </div>
      </div>

      <div class="container-fluid">
        <OwlCarousel items={1} margin={5} autoplay={true}>
          <div>
            {/* <h1> Welcome to Suche</h1> */}
            {/* <img className="img" src="img/header1.jpg" /> */}
            <header id="header">
              <div className="intro">
                <div className="overlay">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8 col-md-offset-2 intro-text">
                        <h1>Welcome to Suche</h1>
                        

                        {/* {!props.adminsignedin ? (
                          <>
                            <a href="/Form">
                              <button className="btn btn-custom btn-lg page-scroll">
                                Apply now
                              </button>
                            </a>
                          </>
                        ) : (
                          <>
                            <a href="/Applications">
                              <button className="btn btn-custom btn-lg page-scroll">
                                View
                              </button>
                            </a>
                          </>
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>

          <div>
            <article className={styles.article}>
              <picture className={styles.picture}>
                <img src={header1} alt="header1" />
              </picture>
              <h1 className={styles.header}>We Assure You get the best</h1>
            </article>
          </div>
          <div>
            {/* <img className="img" src={header2} /> */}
            <article className={styles.article}>
              <picture className={styles.picture}>
                <img src={header2} alt="header2" />
              </picture>
              <h1 className={styles.header}>We Understand Your Need</h1>
            </article>
          </div>
          <div>
            <article className={styles.article}>
              <picture className={styles.picture}>
                <img src={header3} alt="header3" />
              </picture>
              <h1 className={styles.header}>We Work Efficiently</h1>
            </article>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

//export default OwlDemo;
