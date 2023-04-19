import exit from "../assets/exit.svg";

export default function Result({ data, onClickExit, result }) {
  return (
    <div className="modalContainer">
      <div className="modal">
        <button onClick={onClickExit} className="exit">
          <img src={exit} alt="exit icon" />
        </button>
        <div className="results">
          {result ? (
            <div className="successful">
              <h2>Your Results</h2>
              <div className="resultContainer" >
              {data.map((item) => (
                <div key={item.id} className="resultDetails">
                  {item.title ? (
                    <p className="title">{item.title}</p>
                  ) : (
                    <p className="title">{` Course ${item.id + 1}`}</p>
                  )}
                  <p>{`Score: ${item.score}`}</p>
                  <p>{`Units: ${item.unit}`}</p>
                </div>
              ))}
              </div>
            </div>
          ) : (
            <div>
              <p>You didn't fill in the units for at least one course</p>
            </div>
          )}
        </div>
        {result && (
          <div className="return">
            <h2>Your CGPA</h2>
            <p>{`Your CGPA is ${result}`}</p>
          </div>
        )}
        <button className="return" onClick={onClickExit}>
          Return
        </button>
      </div>
    </div>
  );
}
