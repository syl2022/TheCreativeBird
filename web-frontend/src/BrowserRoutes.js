import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignInSide from "./SignInSide";

export default function BrowserRoutes()  {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignInSide/>}/>
                </Routes>
        </BrowserRouter>
    )
}