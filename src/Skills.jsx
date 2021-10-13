import React from "react";
import { SkillsProps } from "./PropsHub";
import html from "./Images/SkillsImages/html5.png";
import css from "./Images/SkillsImages/CSS.png";
import js from "./Images/SkillsImages/javascript.png";
import bootstrap from "./Images/SkillsImages/bootstrap.png";
import react from "./Images/SkillsImages/react.png";
import express from "./Images/SkillsImages/express.jpg";
import node from "./Images/SkillsImages/nodejs.png";
import mongodb from "./Images/SkillsImages/mongodb.svg";
const imgArr = [html, css, js, bootstrap, react, express, node, mongodb];
// 512 * 512 size o0f imgs
function Skills() {
    return (
        <>
            <h1 className="skills-heading" id="skills">
                My Skills
            </h1>
            <div className="outer-about">
                <div className="inner-about">
                    <div className="row">
                        {imgArr.map((val, index) => {
                            return <SkillsProps imgSrc={val} keys={index}></SkillsProps>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skills;