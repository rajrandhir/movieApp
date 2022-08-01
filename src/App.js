import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import PageNoutFound from "./pages/PageNoutFound";
import Movie from "./pages/Movie";
import SingleMovie from "./pages/SingleMovie";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="*" element={<PageNoutFound />} />
      </Routes>
    </>
  );
}

export default App;
