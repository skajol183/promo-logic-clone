import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import styles from "./index.module.scss";

const pricing = () => {
  return (
    <>
      <Header />
      <div className={styles.pricing_main_container}>
        <div className={styles.pricing_first_sec}>
          <div className={styles.left}>
            <h1>Plans and Pricing</h1>
            <p>Start a 14-day free trial today—no card needed.</p>
          </div>

          <div className={styles.right}>
            <h5>Managing over 50 locations?</h5>
            <a
              className="button button-small"
              href="https://academy.brightlocal.com/course/google-analytics-essentials-for-local-seo"
              title="START TODAY"
            >
              Get a custom plan
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default pricing;
