import { Link } from "react-router-dom";

const Home = function () {
  return (
    <main className="home">
      <h1>Calculate your CGPA</h1>
      <p>
        This site only processes University of Ibadan's 4 point grading system
      </p>
      <Link to={'scores'} ><button className="fullButton">Get Started</button></Link>
    </main>
  );
};

export default Home;
