//This will act as entry point for our webpack.
import React from "react";
import{createRoot} from 'react-dom/client'
import App from "./client/components/App";

import styles from './style.css';

const contents = createRoot(document.getElementById("contents"))

contents.render( 
  <App/>

);