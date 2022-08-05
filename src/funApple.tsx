import React, {  ReactNode,  } from "react";
import './Apple.css'
interface IProps {
  name: string;
  children?: ReactNode;
}
function funApple({ name , children }: IProps) {
  return (
    <div className="red">
      <h1>{name}</h1>
      <br />
      {children}
      <h1> this is {new Date().toLocaleTimeString()}</h1>
    </div>
  );
}

export default funApple;
