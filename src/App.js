import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Modalform from "./Components/Modalform";
import ProtectedRoute from "./Components/ProtectedRoute";
import Signup from "./Components/Signup";
import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div>
    <Header/>
     <Routes>
     <Route path='/' element={<ProtectedRoute Component={Home}/>}/>
     <Route path='/signup' element={<Signup/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path="/modalform" element={<Modalform/>} />
     </Routes>
    </div>
  );
}

export default App;
