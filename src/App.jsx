import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Navbar from "./components/header/Navbar";
import Profile from "./components/Profile";
import Landing from "./components/Landig/Landing";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
