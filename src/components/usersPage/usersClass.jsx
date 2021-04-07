import * as axios from "axios";
import React from "react";
import userPhoto from "../../images/image.jpg";

class Users extends React.Component {
  componentDidMount() {
    return axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }
  render() {
    return (
      <div>
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
