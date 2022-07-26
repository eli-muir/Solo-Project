//This will act as entry point for our webpack.
import React from "react";
import reactDom from "react-dom";
import App from "./src/App";

import styles from './style.css';

reactDom.render(<App />, document.getElementById("root"));