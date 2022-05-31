import { Routes, Route } from "react-router-dom";
import DetailPage from "./views/DetailPage";
import HomePage from "./views/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:pokemonName" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
