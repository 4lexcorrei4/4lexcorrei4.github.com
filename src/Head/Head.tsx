import * as React from "react";
import * as ReactDOM from "react-dom";

const headRoot = document.head!;
const Portal: React.FC<{ children: React.ReactNode }> = ({ children }) => 
  ReactDOM.createPortal(children, headRoot);

export default Portal;