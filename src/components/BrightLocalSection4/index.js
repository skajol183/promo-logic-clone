import React from "react";

const BrightLocalSection4 = () => {
  return (
    <section className="panel 			cards 			custom-bg-light" id>
      <div className="panel-content">
        <div className="cd-header">
          <div className="gm-header text-center">
            <h2 className="h2">
              BrightLocal helps agencies{" "}
              <span className="cs-text-green">scale</span> and multi-location brands{" "}
              <span className="cs-text-green">grow</span>
            </h2>
          </div>
        </div>
        <div className="cd-container cols-2">
          <article
            className="cd-main-nopad 				card-image 				cd-align-center 				 				 				 				text-center 				 				add-hov 				bg-none"
            onclick="location.href='/agencies/'"
            style={{ cursor: "pointer" }}
          >
            <figure className="image">
              <img
                className="img-respond"
                src="https://www.brightlocal.com/wp-content/uploads/2023/12/Scaling-Agencies-1.svg"
                alt="Scaling Agencies (1)"
                width="1"
                height="1"
                loading="lazy"
              />
            </figure>
            <div className="cd-text-container">
              <div className="inner">
                <div className="cd-copy">
                  <header>
                    <h3 className="h5">For Scaling Agencies</h3>
                  </header>
                  <div className="text">
                    <p style={{ textAlign: "center" }}>
                      See how agencies use BrightLocal to save 80% of time spent
                      on auditing, reporting, and ranking locations—with a
                      streamlined way to do local SEO from start to finish.
                    </p>
                  </div>
                </div>
                <div className="cd-cta">
                  <a
                    href="/agencies/"
                    className="button button-std-green"
                    title="Solutions for Agencies"
                    target
                    role="button"
                  >
                    Solutions for Agencies
                  </a>
                </div>
              </div>
              <div className="cd-testimonial-micro t-bottom">
                <div className="cd-test-inner">
                  <div className="quote">
                    "What used to take the agency 10 hours manually we can now
                    do in 10 minutes with BrightLocal."{" "}
                  </div>
                  <div className="info">
                    <div className="author-img">
                      <img
                        src="https://d317jr06u12xtj.cloudfront.net/2018/12/Matthew-Travers.png"
                        alt="Matthew Travers"
                        width="32"
                        height="32"
                      />
                    </div>
                    <div className="company">
                      Matthew Travers <br />
                      Executive VP, Lead to Conversion{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article
            className="cd-main-nopad 				card-image 				cd-align-center 				 				 				 				text-center 				 				add-hov 				bg-none"
            onclick="location.href='/multi-location/'"
            style={{ cursor: "pointer" }}
          >
            <figure className="image">
              <img
                className="img-respond"
                src="https://www.brightlocal.com/wp-content/uploads/2023/12/Multi-Location-Brands-1.svg"
                alt
                width="1"
                height="1"
                loading="lazy"
              />
            </figure>
            <div className="cd-text-container">
              <div className="inner">
                <div className="cd-copy">
                  <header>
                    <h3 className="h5">For Multi-Location Brands</h3>
                  </header>
                  <div className="text">
                    <p>
                      See how marketers use BrightLocal to rank, manage, and
                      optimize their locations—to outrank competitors and drive
                      more customers through the door.
                    </p>
                  </div>
                </div>
                <div className="cd-cta">
                  <a
                    href="/multi-location/"
                    className="button button-std-green"
                    title="Solutions for Brands"
                    target
                    role="button"
                  >
                    Solutions for Brands
                  </a>
                </div>
              </div>
              <div className="cd-testimonial-micro t-bottom">
                <div className="cd-test-inner">
                  <div className="quote">
                    "Thanks to BrightLocal I was able to achieve completely
                    dominant positions of 1st, 2nd, and 3rd across multiple
                    cities."{" "}
                  </div>
                  <div className="info">
                    <div className="author-img">
                      <img
                        src="https://www.brightlocal.com/wp-content/uploads/2023/11/Angus-Matthews-128x128.jpg"
                        alt="Angus Matthews"
                        width="32"
                        height="32"
                      />
                    </div>
                    <div className="company">
                      Angus Matthews <br />
                      Marketing Manager, Orchard Care Homes{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="cd-cta-global">
          <div className="gm-cta">
            <div className="button-outer">
              <a
                href="/small-businesses/"
                title="Are you a small local business looking to rank higher?"
                target
                role="button"
                className="cta                                                    button                                                    button-subheading-outer                                                                                                          white"
              >
                Are you a small local business looking to rank higher?{" "}
              </a>
              <sub>Keep reading... our tools work great for you, too.</sub>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrightLocalSection4;
