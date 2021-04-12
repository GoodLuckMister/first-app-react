import * as axios from "axios";
import React from "react";
import userPhoto from "../../images/image.jpg";
import style from "./users.module.css";

class Users extends React.Component {
  componentDidMount() {
    return axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount - 11300);
      });
  }
  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    return axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    let pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
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
                className={this.props.currentPage === p && style.totalCount}
                onClick={() => {
                  this.onPageChange(p);
                }}
              >
                {p},
              </span>
            );
          })}
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <img
              src={u.photos.small != null ? u.photos.small : userPhoto}
              width={150}
            />
            <div>
              {u.followed ? (
                <button onClick={() => this.props.unfollow(u.id)}>
                  unfollow
                </button>
              ) : (
                <button onClick={() => this.props.follow(u.id)}>follow</button>
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
  }
}

export default Users;
