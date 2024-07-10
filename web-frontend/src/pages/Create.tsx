import React from "react";
// @ts-ignore
import Board from "../components/Board";
import {createTheme} from "@mui/material/styles";
import Frame from "./Frame";

export default function Create(){

    return (<>
        <Frame children={<Board/>}></Frame>
    </>);
}