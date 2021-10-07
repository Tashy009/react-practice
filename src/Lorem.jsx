import React, { useState } from "react";
import data from "./loremData";
function Lorem() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState(data.slice(0, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    let para = parseInt(count);
    if (count <= 0) {
      para = 1;
    }
    if (count > 8) {
      para = 8;
    }
    setText(data.slice(0, para));
  };
  return (
    <section className="section-center">
      <h3 className="lorem">Need lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label className="lorem" htmlFor="amount">
          paragraphs:
        </label>
        <input
          className="lorem"
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="lorem btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default Lorem;
