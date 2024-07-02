import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './Components/MainPage';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Mainpage></Mainpage>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>


      <Routes>
        <Route path="/projects" element={<Projects></Projects>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
