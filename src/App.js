import Navi from "./routes/Navi";
import Main from "./routes/Main";
import Skill from "./routes/Skill";
import Experience from "./routes/Experience";
import Hobby from "./routes/Hobby";
import Contact from "./routes/Contact";
import Footer from "./routes/Footer";

function App() {
  return (
    <div className="App">
      <Navi/>
      <Main/>
      <Skill/>
      <Experience/>
      <Hobby/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
