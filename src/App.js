import './input.css'
import { Routes, Route } from "react-router-dom";
import Navber from './Components/Navber';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashbord from './Components/Dashbord';

function App() {

  return (
    <div className="App bg-black h-[100vh] w-full" >
      <Navber />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Dashbord />} />
      </Routes>
    </div>
  );
}

export default App;
