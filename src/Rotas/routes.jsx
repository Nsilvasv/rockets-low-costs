import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Components/Login";
import Cadastro from "../Components/Cadastro";
import ConfirmaIdade from "../Components/Idade";
import Dashboard from "../Components/Dashboard";
import LogViewer from "../Components/Logs";

const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/confirma-idade" element={<ConfirmaIdade/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
                <Route path="/logs" element={<LogViewer/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;