import * as axios from "axios";
import React from "react";
import userPhoto from "../../images/image.jpg";
console.log(userPhoto);

const Users = (props) => {
  if (props.users.length === 0) {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        props.setUsers(response.data.items);
      });
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <img
            src={u.photos.small != null ? u.photos.small : userPhoto}
            width={150}
          />
          <div>
            {u.followed ? (
              <button onClick={() => props.unfollow(u.id)}>unfollow</button>
            ) : (
              <button onClick={() => props.follow(u.id)}>follow</button>
            )}
          </div>
          <div>
            <div>{u.name}</div>
            <div>{u.status}</div>
            <div>{"u.cityName"}</div>
            <div>{"u.countryName"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
