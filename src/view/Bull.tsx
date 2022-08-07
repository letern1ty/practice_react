import React, { Fragment, useState } from "react";

interface IProps {
  name: string;
}
interface IUser {
  id: number;
  name: string;
}

const _userList: IUser[] = [];
for (let i = 0; i < 10; i++) {
    _userList.push({
    id: i,
    name: "username" + i,
  });
}

const Delete:React.FC<{user:IUser,onDelete:(user:IUser) => void}> = ({user,onDelete}) =>{
    function delectUser(){
        setTimeout(() => {
        console.log(user);
        onDelete(user)
        }, 500);
    }
    return<>
    <button onClick={delectUser}> 删除</button>
    </>
}

const Bull: React.FC<IProps> = ({ name }) => {
    const [userList,setUserList] = useState(_userList)
    function deleteUser(user:IUser) {
        setUserList(userList.filter((u) => u.id !== user.id))
    } ;
  return (
    <div>
      <div>{name}</div>
      <br />
      <ul>
        {userList.map((u) => (
          <Fragment key={u.id}>
            <li>{u.name} {' '}  <Delete user={u} onDelete={deleteUser}/> </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Bull;
