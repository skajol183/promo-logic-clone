import React from "react";

const WhyBrightLocal = () => {
  return (
    <section className="panel 			cards 			custom-bg-dark" id>
      <div className="panel-content">
        <div className="cd-header">
          <div className="gm-header text-center">
            <h2 className="h2">Why do marketers love BrightLocal? </h2>
            <aside className="sub-heading">
              <p>
                BrightLocal doesn’t offer everything under the sun, only what
                you need to get local done.
                <br />
                <br />
                Our mission is simple:{" "}
                <strong>
                  <em>
                    give marketers everything they need to excel at local SEO,
                    at an unbeatable price.
                  </em>
                </strong>
                <br />
              </p>
            </aside>
          </div>
        </div>
        <div className="cd-container cols-3">
          <article className="cd-main card-icon cd-align-center   bg-none text-center">
            <div className="bl-custom-icon">
              <i className="fa-4x icon-black"></i>
            </div>
            <div className="cd-text-container">
              <header>
                <h3 className="h5">Easy to use</h3>
              </header>
              <div className="card-text">
                <p>
                  BrightLocal doesn’t leave you drowning in data. It uncovers
                  insights so you can take action.
                </p>
              </div>
            </div>
          </article>
          <article className="cd-main card-icon cd-align-center   bg-none text-center">
            <div className="bl-custom-icon">
              <i className="fa-4x icon-black"></i>
            </div>
            <div className="cd-text-container">
              <header>
                <h3 className="h5">Flexible pricing</h3>
              </header>
              <div className="card-text">
                <p>
                  BrightLocal doesn’t box you into one-size-fits-all
                  subscriptions. You can pay for what you need with{" "}
                  <a href="https://www.brightlocal.com/pricing/">
                    flexible pricing
                  </a>
                  .
                </p>
              </div>
            </div>
          </article>
          <article className="cd-main card-icon cd-align-center   bg-none text-center">
            <div className="bl-custom-icon">
              <i className="fa-4x icon-black"></i>
            </div>
            <div className="cd-text-container">
              <header>
                <h3 className="h5">All under one roof</h3>
              </header>
              <div className="card-text">
                <p>
                  Save time, cut costs, and streamline your process with all the
                  tools you need to manage 100s of locations, under one roof.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default WhyBrightLocal;
