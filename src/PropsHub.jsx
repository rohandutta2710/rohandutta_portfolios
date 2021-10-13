import React from "react";
import Tilt from "react-vanilla-tilt";

function SkillsProps(props) {
    return (
        <>
            <Tilt className="skill-tilt " options={{ scale: 5, max: 10, transformStyle: "preserve-3d" }}>
                <div className="props-div">
                    <img src={props.imgSrc} alt="Loading" />
                </div>
            </Tilt>
        </>
    )

}

function ProjectsProps(props) {
    return (
        <>
            <div className="project-card">
                <img src={props.card.src} alt="Loading"/>
                <div className="project-data">
                    <h1>{props.card.title}</h1>
                    <p>{props.card.description}</p>
                    <div className="link-project">
                        <a href={props.card.hrefs} target="_blank" rel="noreferrer">Check Out</a>
                    </div>
                </div>
            </div>
        </>
    )

}
function IconsProps(props) {
    return (
        <>
            <div key={props.index}>
                <a href={props.source.hrefs} target="_blank" rel="noreferrer">
                    <img src={props.source.src} alt="loading" />
                </a>
            </div>
        </>
    )

}

export { SkillsProps, ProjectsProps, IconsProps };