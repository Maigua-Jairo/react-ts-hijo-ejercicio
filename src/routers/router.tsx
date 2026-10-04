import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Modulo1Page } from "../pages/Modulo1Page";
import { HomePage } from "../pages/HomePage";

export function MyRoutes(){
    return(
        <BrowserRouter>
        <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="modulo1" element={<Modulo1Page/>}/>
        </Routes>
        </BrowserRouter>
    )
}