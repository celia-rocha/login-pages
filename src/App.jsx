import "./App.css";
import Login from "./pages/Login/Login";
import bgImage from "./assets/bg.webp";

function App() {
  return (
    <div 
      className="flex justify-center items-center min-h-screen bg-cover bg-center font-sans text-shadow"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Login />
    </div>
  );
}

export default App;
