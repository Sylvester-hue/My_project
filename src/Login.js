import logo from './logo.svg';
import { Link } from "react-router-dom";
import './App.css';

function App() {
        
  function togglePassword() {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}

function handleLogin() {
  const codeId = document.getElementById("codeId").value;
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;
  console.log("Logging in with:", { codeId, password, remember });
  alert("Welcome"+ codeId +"")
}
       
  return (
    <div className="App">
      <head>
      </head>
      <header className="App-header">
     
      </header>
       <main>
       <div
  style={{
    maxWidth: "320px",
    margin: "40px auto",
    padding: "30px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontFamily: "sans-serif"
  }}
>
  <h2 style={{ textAlign: "center" }}>Login</h2>
  <p style={{ textAlign: "center", color: "#666" }}>Welcome back!</p>

  <label htmlFor="codeId">CODE ID</label><br/>
  <input
    type="text"
    id="codeId"
    placeholder="Enter Code ID"
    required
    style={{
      width: "65%",
      padding: "10px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "5px"
    }}
  />

 <br/> <label htmlFor="password">Password</label>
  <div
    style={{
      display: "flex",
     // alignItems: "center",
      width: "100%",
      padding: "10px",
      borderRadius: "5px"
    }}
  >
    <input
      type="password"
      id="password" required
      placeholder="Enter Password"
      style={{
        flex: 1,
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginLeft : "32px",
         width: "100%"
      }}
    />
    <button
      onClick={togglePassword}
      style={{
        marginLeft: "30px",
        background: "none",
        border: "none",
        fontSize: "18px",
        cursor: "pointer"
      }}
    >
      👁️
    </button>
  </div>

  <div style={{ marginTop: "10px" }}>
    <input type="checkbox" id="remember" />
    <label htmlFor="remember"> Remember Me!</label>
  </div>

  <button
    onClick={handleLogin}
    style={{
      marginTop: "20px",
      width: "100%",
      padding: "12px",
      background: "#007bff",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer"
    }}
  >
    Login
  </button>
  <Link to="/FileManager">Dashborad</Link>
   <Link to="/SignUpForm">Sign-up</Link>
</div>
</main>
    </div>
    
  );
}

export default App;
