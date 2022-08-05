import React, { useState } from 'react'
interface User {
    name:string;
}

function Banana() {
    const [userInfo,setUserInfo] = useState<User>({ name: 'Banana'})
    const user = {name:'Banana'};
    setTimeout(() => {
        setUserInfo({name:'newBanana'})
    }, 2000);
  return (
    <div>
        {user.name}
        <br />
        {userInfo.name}
    </div>
  )
}

export default Banana