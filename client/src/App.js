import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Signup from "../src/signup/Signup"
import Booking from "./components/Bookings/Booking";
import Profile from "./components/profile/Profile";
import EditUser from "./components/Edituser/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup />}/>
        <Route path="/hotels/room/book/:roomid" element={<Booking/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/edituser" element={<EditUser/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
