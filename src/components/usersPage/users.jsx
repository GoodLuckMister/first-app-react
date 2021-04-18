import React from "react";
import style from "./users.module.css";
import userPhoto from "../../images/image.jpg";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={props.currentPage === p ? style.totalCount : null}
              onClick={() => {
                props.onPageChange(p);
              }}
            >
              {p},
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <NavLink to={"/content/" + u.id}>
            <img
              src={u.photos.small != null ? u.photos.small : userPhoto}
              width={150}
            />
          </NavLink>
          <div>
            {u.followed ? (
              <button onClick={() => props.unfollow(u.id)}>unfollow</button>
            ) : (
              <button onClick={() => props.follow(u.id)}>follow</button>
            )}
          </div>
          <div>
            <div>{u.name}</div>
            <div>{u.status != null ? u.status : "not status"}</div>
            <div>{"u.cityName"}</div>
            <div>{"u.countryName"}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
