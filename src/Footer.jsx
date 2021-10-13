import React from "react";
function Footer(){
    const date=new Date();
    return(
        <>
            <div className="footer">
                <p> ©  Copyright {date.getFullYear()}</p>
                <p>Built by <span>Rohan Dutta ( Full Stack Web Developer )</span></p>
            </div>
        </>
    )
}
export default Footer;