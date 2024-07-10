import React from "react";
import Dashboard from "./Dashboard";
import Frame from "./Frame";

export default function Home() {
    return (
        <Frame children={<Dashboard/>}></Frame>);
}