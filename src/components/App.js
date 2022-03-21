import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questionArray, setQuestionArray] = useState([])

  function handleSubmit(newQObj){
    setQuestionArray([...questionArray, newQObj])
  }

  function handleDelete(questionID){
    console.log(questionID)
    const filteredQuestions = questionArray.filter((question)=>{
      return (question.id !== questionID)
    })
    fetch(`http://localhost:4000/questions/${questionID}`, {
      method: "DELETE"
    })
    .then(() => setQuestionArray(filteredQuestions))
  }

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then(resp => resp.json())
    .then(questionData => setQuestionArray(questionData))
  }, [])

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onFormSubmit={handleSubmit}/> : <QuestionList onDelete={handleDelete} questions={questionArray} />}
    </main>
  );
}

export default App;
