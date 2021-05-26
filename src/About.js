import React from "react";
import Question from "./Question";

function About() {
  return (
    <div className="About">
      <h1 className="faq">Frequently asked questions</h1>
      <div className="questionContainer">
        <Question title="How much will the delivery cost?" />
        <Question title="Do you ship around the world?" />
        <Question title="How can I check my delivery status?" />
        <Question title="Do I get a waranty?" />
        <Question title="How to use cupons?" />
      </div>
    </div>
  );
}

export default About;
