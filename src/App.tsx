import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Newspage from "./pages/Newspage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/news" element={<Newspage />} />
    </Routes>
  );
}
