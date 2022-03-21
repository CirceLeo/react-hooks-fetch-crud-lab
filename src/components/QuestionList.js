import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDelete}) {

  const renderedQuestions = questions.map((questionObj) => {
    //console.log(questionObj)
    return( <QuestionItem onDelete={onDelete} key={questionObj.id} question={questionObj} />)
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{renderedQuestions}</ul>
    </section>
  );
}

export default QuestionList;
