import React, { ReactNode } from "react";
function Orange() {
  interface User {
    name: string;
    age: number;
  }
  function formatName(user: User) {
    return user.name + "" + user.age;
  }
  const name = "john";
  const element: ReactNode = <h1>hello , {name}</h1>;

  const user: User = {
    name: "xiaoming",
    age: 33,
  };
  return (
    <div>
      Orange ,{element}
      <br />
      {formatName(user)}
      <br />
        
    </div>
  );
}

export default Orange;
