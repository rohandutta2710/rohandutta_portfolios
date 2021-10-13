import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./MainPage"
import ContextManager from "./ContextManager"
ReactDOM.render(<ContextManager><MainPage></MainPage></ContextManager>, document.getElementById("root"));