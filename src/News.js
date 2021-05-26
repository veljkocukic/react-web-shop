import React from "react";

function News({ name, url }) {
  return (
    <div className="News">
      <img src={url} alt="laptop-news" />
      <h1>{name}</h1>
      <p>
        Some words to fill the space Some words to fill the space Some words to
        fill the space Some words to fill the space vSome words to fill the
        space Some words to fill the space Some words to fill the space{" "}
      </p>

      <h3>Read more</h3>
    </div>
  );
}

export default News;
