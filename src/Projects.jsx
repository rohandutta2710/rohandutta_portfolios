import React, { useEffect } from "react";
import { ProjectsProps } from "./PropsHub";
import Swiper from "swiper/swiper-bundle";
import game2048 from "./Images/Project/game2048.jpg";
import rdxeducation from "./Images/Project/rdxeducation.jpg";
import snake from "./Images/Project/snake.jpg";
import login from "./Images/Project/login.jpg";
import completewords from "./Images/Project/completewords.jpg";
import tictactoe from "./Images/Project/tictactoe.jpg";
const projectArr = [
    { src: game2048, title: "Game 2048", description: "It is built using ReactJS.", hrefs: "https://games2048.netlify.app/" },
    { src: rdxeducation, title: "RDX Education", description: "This education website is made using ReactJS.", hrefs: "https://rdxeducation.netlify.app/" },
    { src: login, title: "Login Authentication", description: "This web app is developed using ReactJS & ExpressJS.", hrefs: "https://loginauthentications.netlify.app/" },
    { src: snake, title: "Snake Game", description: "This game is developed using HTML, CSS & Javascript.", hrefs: "https://memerboy.000webhostapp.com/snake" },
    { src: completewords, title: "Complete the Word", description: "It is built using HTML, CSS & Javascript.", hrefs: "https://memerboy.000webhostapp.com/completetheword" },
    { src: tictactoe, title: "Tic Tac Toe", description: "It is developed using HTML, CSS & Javascript.", hrefs: "https://rohandutta2710.github.io/rdx.github.io/tictactoe" },

]
function Projects() {
    useEffect(() => {
        var swiper = new Swiper(".mySwipers", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 60,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            },
            pagination: {
                el: ".swiper-pagination",
            },
        });
    }, [])
    return (
        <>
            <div className="projects" id="projects">
                <h1 className="projects-heading" >
                    My Projects
                </h1>
                <div className="swiper mySwipers">
                    <div className="swiper-wrapper">
                        {projectArr.map((val, index) => {
                            return (
                                <div className="swiper-slide" key={index}>
                                    <ProjectsProps card={val} />
                                </div>
                            )
                        })}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </>
    )
}
export default Projects;