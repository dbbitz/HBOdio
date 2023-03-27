import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Catalog } from "../pages/Catalog";
import { Error404 } from "../pages/Error404";

/* Routes: É o componente que envolve todas as rotas da aplicação. Ele é responsável por fornecer a aplicação com as funcionalidades de navegação. */
/* Route: É o componente que representa uma rota da aplicação. Ele é responsável por renderizar um componente quando a URL da aplicação corresponder ao path declarado. */

export const Router = () => (
    <Routes>
        <Route path="*" element={<Error404/>}/>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/catalog" element={<Catalog />} />
    </Routes>
);
