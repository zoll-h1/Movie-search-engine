import "./css/App.css";
import { Home } from './pages/Home';
import { Routes, Route} from 'react-router-dom';
import { Favorites } from "./pages/Favorites";
import { NavBar } from "./Components/NavBar";
import { MovieProvider } from "./context/movieContext";
function App() {
  return (
   <MovieProvider>
    <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={ < Home />}/>
        <Route path="/favorites" element={ < Favorites />}/>
      </Routes>
    </main>
   </MovieProvider>
  );
}
export default App;