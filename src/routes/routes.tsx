import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Catalog } from "../pages/Catalog";

export const Router = () => (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
    </Routes>
);
