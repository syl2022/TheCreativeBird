import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignInSide from "../pages/SignInSide";
import Home from "../pages/Home";
import Create from "../pages/Create";

export default function BrowserRoutes()  {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInSide/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/create" element={<Create/>}/>
                </Routes>
        </BrowserRouter>
    )
}