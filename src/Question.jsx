import React, { useState } from "react";
import data from "./questionFile";
import SingleQuestion from "./SingleQuestion";
function Question() {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="question-container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default Question;
