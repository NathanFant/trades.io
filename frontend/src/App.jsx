import HomePage from "./pages/HomePage";
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Login from "./pages/Login";
import CreateListing from "./pages/CreateListing";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";


export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreateListing />} />
        <Route path="/profile/:user_id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
}
