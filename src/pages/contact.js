import React from "react";
import Layout from "../components/Layout";

const contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to Get in Touch ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              nihil ab eveniet omnis dignissimos veniam quos, doloribus tempora
              fuga eius.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              odit, dolor excepturi quo exercitationem ad!
            </p>
          </article>
          <article>
            <form action="" className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Connect
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default contact;
