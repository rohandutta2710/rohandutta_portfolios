import React, { createContext, useState } from "react";
const context = createContext();
const ContextManager = (props) => {
    const [contactForm,setContactForm] = useState({});
     const websiteLink = process.env.REACT_APP_API_URL;
    return (
        <>
            <context.Provider value={{contactForm,setContactForm,websiteLink}}>
                {props.children}
            </context.Provider>
        </>
    )
}
export default ContextManager;
export { context };
