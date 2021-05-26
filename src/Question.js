import React from "react";
import { useRef } from "react";

function Question({ title }) {
  const ref = useRef(null);
  function handleClick(e) {
    e.target.classList.toggle("rotate");
    ref.current.classList.toggle("questionShow");
  }

  return (
    <div className="question">
      <h1>
        {title}
        <i onClick={handleClick} class="fas fa-plus"></i>
      </h1>
      <p ref={ref}>
        Some random words to fill the space Some random words to fill the space
        Some random words to fill the space Some random words to fill the space
        Some random words to fill the space Some random words to fill the space
        Some random words to fill the space Some random words to fill the space
        Some random words to fill the space.
      </p>
    </div>
  );
}

export default Question;
