import React from "react";
import twitter from "./Images/Icons/twitter.gif";
import github from "./Images/Icons/github.gif";
import insta from "./Images/Icons/insta.gif";
import linkedin from "./Images/Icons/linkedin.gif";
import topCursor from "./Images/Icons/topCursor.gif";
import { IconsProps } from "./PropsHub";
const iconArr = [{ src: twitter, hrefs: "https://twitter.com/RohanDu16382942?s=09" },
{ src: linkedin, hrefs: "https://www.linkedin.com/in/rohan-dutta-772033221/" },
{ src: github, hrefs: "https://github.com/rohandutta2710" },
{ src: insta, hrefs: "https://www.instagram.com/rohandutta2000/" }];

function Icons() {
    return (
        <>
            <div className="icons">
                {iconArr.map((val, index) => {
                    return <IconsProps index={index} source={val} />
                })}
            </div>
            <div className="top-cursor">
                <a href="#" rel="noreferrer">
                    <img src={topCursor} alt="loading" />
                </a>
            </div>
        </>
    );
}
export default Icons;