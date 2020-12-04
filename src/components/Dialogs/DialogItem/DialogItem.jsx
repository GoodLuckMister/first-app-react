import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink className={s.nameLink} activeClassName={s.activeLink} to={path}>
                <img className={s.image} src="https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg" />
                {props.name}
            </NavLink>
        </div>
    )

};

export default DialogItem;
