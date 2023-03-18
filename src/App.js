
import './App.css';

function App() {
  return (
    <div >
      <input type="text" name="username" placeholder="Enter username"/>
      <input type="password" name="password" placeholder="Enter password"/> 
      <button onClick={()=>alert('Login Successful!')}>Login</button>
      <hr></hr>
    </div>
  );
}

export default App;
