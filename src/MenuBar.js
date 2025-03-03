
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Latest from "./pages/Latest";
import Hottest from "./pages/Hottest";
import Search from "./pages/Search";
import Register from "./pages/Register";

export default function MenuBar() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="latest" element={<Latest />} />
                    <Route path="hottest" element={<Hottest />} />
                    <Route path="search" element={<Search />} />
                    <Route path="register" element={<Register />} />
                    <Route path="search" element={<Search />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

