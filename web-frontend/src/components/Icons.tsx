
import React from "react";
// @ts-ignore
import mainLogo from '../resources/logo.png';
// @ts-ignore
import img from "../resources/bird.jpg";

export const AdbIcon=() => {
    return (
                <div className="container logo" >
                    <img className={"logo"} src={mainLogo}  alt="fireSpot"/>
                </div>

        );

};

export const BirdImg=() => {
    return (
        <div className="container " >
            <img src={img} className={"bg1"} alt="fireSpot"/>
        </div>

    );

};