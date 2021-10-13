import React, { useEffect } from "react";
import "./index.css";
import Swiper from "swiper/swiper-bundle";
import img1 from "./Images/About/img1.jpg";
import img2 from "./Images/About/img2.jpg";
import img3 from "./Images/About/img3.jpg";
import img4 from "./Images/About/img4.jpg";
import img5 from "./Images/About/img5.jpg";
import img6 from "./Images/About/img6.jpg";
const aboutArr = [img1, img3, img4, img5, img6, img2];
function About() {
    useEffect(() => {
        var swiper = new Swiper(".mySwiper", {
            effect: "cards",
            grabCursor: true,
        });
    }, [])
    return (
        <>
            <div className="about-grid">
                <div>
                    <div className="swiper mySwiper">
                        <div className="swiper-wrapper">
                            {aboutArr.map((val, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <img src={val} alt="loading" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="about-me" id="about">
                    <div>
                        <h2>About me</h2>
                        <p>
                            I completed my gradution from Hansraj College, Delhi Univerity and looking to establish a career in the field of Information Technology, I wish to work in a growth-oriented company and contribute to the development of the organization while upgrading my skill set and knowledge.
                            I like to play cricket, swimming, meditation and reading books.
                            A book, Avenue of Spirituality, is written by myself which is based on spiritual living.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;