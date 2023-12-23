import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login/login.page";
import HomePage from "./pages/dashboard/home.page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard/:id" element={<HomePage />} />
        {/* <Route path="/account/create" element={<CreateAccountPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
