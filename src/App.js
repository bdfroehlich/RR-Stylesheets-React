import reactDom from 'react-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';

const aboutStyle = {
  fontSize: "25px",
  textAlign: "center",
  margin: "40px",
  border: "1px solid green",
  background: "orange",
  color: "pink"
};

const contactStyle = {
  fontSize: "3vw",
  textAlign: "center",
  margin: "20px",
  border: "5px dashed red",
  background: "blue",
  color: "white"
};

const profileStyle = {
  fontSize: "5vw",
  textAlign: "center",
  margin: "10px",
  border: "20px solid blue",
  background: "black",
  color: "green"
};

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <About aboutStyle={aboutStyle} />
      <Contact contactStyle={contactStyle} />
      <Profile profileStyle={profileStyle} />
    </div>
  );
}

export default App;
