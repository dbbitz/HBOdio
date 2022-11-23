import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Catalog } from "../pages/Catalog";
import { Error404 } from "../pages/Error404";

export const Router = () => (
    <Routes>
        <Route path="*" element={<Error404/>}/>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
    </Routes>
);
