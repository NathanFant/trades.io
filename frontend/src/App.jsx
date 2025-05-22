import HomePage from "./pages/HomePage";
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Login from "./pages/Login";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
