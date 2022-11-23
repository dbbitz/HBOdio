import { useState } from "react";
import { BrowserRouter as Router,Route,Routes,Navigate,} from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Catalog } from "./pages/Catalog";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/catalog" element={<Catalog />} />
            </Routes>
        </Router>
    );
}

export default App;
