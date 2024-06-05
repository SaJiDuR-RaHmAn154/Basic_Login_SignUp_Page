import { Route, Routes } from "react-router-dom";
import Login from "./Login.jsx";
import SignUp from "./SignUp.jsx";
import Home from "./Home.jsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="Basic_Login_SignUp_Page" element={<Home/>}/>
        <Route path="Basic_Login_SignUp_Page/Login" element={<Login/>}/>
        <Route path="Basic_Login_SignUp_Page/SignUp" element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
