import { useState } from "react";
import Course from "../components/Course";
import cgpa from "../assets/composables/cgpa";
import add from "../assets/add.svg";
import Result from "../components/Result";

export default function FillData() {
  const [data, setData] = useState([]);
  const [result, setResult] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function handleReset() {
    setData([]);
  }

  function addCourse() {
    setData([...data, { id: data.length, title: "", score: 0, unit: 1 }]);
    console.log(data);
  }

  function handleTitleChange(event, id) {
    setData(
      data.map((item) => {
        if (item.id == id) {
          return { ...item, title: event.target.value };
        }
        return item;
      })
    );
  }

  function handleScoreChange(event, id) {
    if (event.target.value >= 0 && event.target.value <= 100) {
      setData(
        data.map((item) => {
          if (item.id == id) {
            return { ...item, score: event.target.value };
          }
          return item;
        })
      );
    }
  }

  function handleUnitChange(event, id) {
    setData(
      data.map((item) => {
        if (item.id == id) {
          return { ...item, unit: event.target.value };
        }
        return item;
      })
    );
  }

  function handleDelete(event, id) {
    setData(data.filter((item) => item.id != id));
  }

  function handleSubmit() {
    setIsOpen(true);
    setResult(cgpa(data));
  }

  function handleModalExit() {
    setIsOpen(false);
  }

  return (
    <main className="dataPage">
      <div className="dataPageHeader">
        <h1>Fill in your results here</h1>
        {data.length > 0 && (
          <button className="fullButton" onClick={handleReset}>
            Reset Data
          </button>
        )}
      </div>
      {data.length < 1 && (
        <button onClick={addCourse} className="fullButton">
          {" "}
          Add A Course{" "}
        </button>
      )}
      <div className="courseView">
        {data.map((item, index) => (
          <Course
            key={item.id}
            title={item.title}
            score={item.score}
            unit={item.unit}
            onScoreChange={(event) => handleScoreChange(event, item.id)}
            onTitleChange={(event) => handleTitleChange(event, item.id)}
            onUnitChange={(event) => handleUnitChange(event, index)}
            onDelete={(event) => handleDelete(event, item.id)}
          />
        ))}
        {data.length > 0 && (
          <button className="add" onClick={addCourse}>
            <img src={add} alt="add course icon" />
            Add New Course
          </button>
        )}
      </div>
      {data.length > 0 && (
        <div className="resultButtons">
          <button onClick={handleSubmit} className="fullButton submit">
            Submit
          </button>
        </div>
      )}
      {isOpen && (
        <Result data={data} result={result} onClickExit={handleModalExit} />
      )}
    </main>
  );
}
