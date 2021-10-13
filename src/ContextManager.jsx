import React, { createContext, useState } from "react";
const context = createContext();
const ContextManager = (props) => {
    const [contactForm,setContactForm] = useState({})
    return (
        <>
            <context.Provider value={{contactForm,setContactForm}}>
                {props.children}
            </context.Provider>
        </>
    )
}
export default ContextManager;
export { context };