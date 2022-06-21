import { Routes, Route, Navigate } from "react-router-dom";

//Routes fica em volta das rotas
//Route informa a rota
//<Route path="*" element={<Navigate to="/pagina-inicial" />} /> é o redirecionamento, caso ele nao encontre a página renderizada, ele vai pelo * entrar na pagina-inicial

export const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/pagina-inicial" element={<p>Página Inicial</p>} />
            <Route path="*" element={<Navigate to="/pagina-inicial" />} />
        </Routes>
    );
}