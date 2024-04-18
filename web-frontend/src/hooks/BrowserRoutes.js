import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignInSide from "../pages/SignInSide";
import Home from "../pages/Home";

export default function BrowserRoutes()  {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInSide/>}/>
                    <Route path="/home" element={<Home/>}/>
                </Routes>
        </BrowserRouter>
    )
}