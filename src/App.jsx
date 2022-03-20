import "./App.css";
import Answerquestion from "./components/Answerqustion/Answerquestion";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Portfolio />
      <Answerquestion />
    </div>
  );
}

export default App;
