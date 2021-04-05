import React from "react";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        imageLink:
          "https://images11.popmeh.ru/upload/img_cache/276/276226951557a7e898a39994ebf744d9_ce_810x810x561x0_cropped_800x800.jpeg",
        followed: true,
        name: "Andre",
        statusPage: "description",
        cityName: "Kiev",
        countryName: "Ukraine",
      },
      {
        id: 2,
        imageLink:
          "https://images11.popmeh.ru/upload/img_cache/276/276226951557a7e898a39994ebf744d9_ce_810x810x561x0_cropped_800x800.jpeg",
        followed: true,
        name: "Dmitri",
        statusPage: "description",
        cityName: "Moscow",
        countryName: "Russia",
      },
      {
        id: 3,
        imageLink:
          "https://images11.popmeh.ru/upload/img_cache/276/276226951557a7e898a39994ebf744d9_ce_810x810x561x0_cropped_800x800.jpeg",
        followed: false,
        name: "Ignat",
        statusPage: "description",
        cityName: "Minsk",
        countryName: "Belarus",
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <img src={u.imageLink} width={150} />
          <div>
            {u.followed ? (
              <button onClick={() => props.unfollow(u.id)}>unfollow</button>
            ) : (
              <button onClick={() => props.follow(u.id)}>follow</button>
            )}
          </div>
          <div>
            <div>{u.name}</div>
            <div>{u.statusPage}</div>
            <div>{u.cityName}</div>
            <div>{u.countryName}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
