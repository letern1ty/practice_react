import React from "react";
import "./App.css";
import Orange from "./orange";
import Apple from "./funApple";
import Banana from "./Banana";
import Cat from "./view/cat";
import Dog from "./view/dog";
import Bull from "./view/Bull";

function App() {
  return (
    <div className="App">


      <Bull name="bull"/>
      <div>______________________________________</div>

      {/* 普通组件 */}
      <Orange />
      <div>______________________________________</div>
      {/* 函数式组件 */}
      <Apple name="Eternity"/>
      <Apple name="Edward">
        <Apple name="John">
            1111111111111111111
        </Apple>
      </Apple>
      <div>______________________________________</div>

      <Banana />
      <div>______________________________________</div>

      <Cat name="simple"/>
      <Dog />
    </div>
  );
}

export default App;
