import { Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";

export default function RouterApp() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}
