
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
// import LoginModal from './components/Signup';
// import Dashboard from './components/Dashbord';


function App() {
  return (
    <>
    {/* <Router> */}
    {/* <Dashboard/> */}
    <Navbar/>
{/* <Routes>

  <Route exact path="/Login" element={ <LoginModal
           modalOpen={this.state.modalOpen}
           handleModalOpen={this.handleModalOpen}
        />}/>
{/* <Route exact path="/" element={<Login/>}/> */}
           
{/* </Routes> */} 
{/* </Router> */}
    </>

    
  );
}

export default App;
