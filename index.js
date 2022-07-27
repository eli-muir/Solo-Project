//This will act as entry point for our webpack.
import React from "react";
import {render} from 'react-dom'
import App from "./src/App";

import styles from './style.css';

render(<App />,
 document.getElementById("root")
 );