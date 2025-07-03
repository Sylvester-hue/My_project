// App.js
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import FileManager from "./FileManager";
import SignUpForm from "./SignUpForm";
//import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/FileManager" element={<FileManager />} />
      <Route path="/SignUpForm" element={<SignUpForm />} />
    </Routes>
  );
}

export default App;
