import { Routes, Route } from "react-router-dom";
import PrimaryLayout from "./layout/PrimaryLayout";
import Home from "./pages/Home";
import Event from "./pages/Event";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PrimaryLayout />}>
          <Route index element={<Home />} />
          <Route path="event/:id" element={<Event />} />
        </Route>
      </Routes>
    </>
  );
}
