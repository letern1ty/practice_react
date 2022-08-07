import React, { ChangeEvent, useState } from "react";


function Dog() {
    const [inputVal, setVal] = useState('请输入账号')
    const change = ( e: ChangeEvent<HTMLInputElement>) =>{
        console.log(e.target.value)
        setVal(e.target.value)
    }


  let [age, setState] = useState(10);
  const myClick = () => {
    setState(age + 1);
  };
  
  return (
    <div >
      <button onClick={() => myClick()}>+1</button>
      <h1 > {age} </h1>
      <input type="text" onChange={change} value={inputVal}/>
      <p></p>
      <br />

      <br />

    </div>
  );
}

export default Dog;
