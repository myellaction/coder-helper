import './SelectAvatars.sass';

import avatarImg from "@icons/avatar.png";
import SelectAvatar from "@containers/Profile/SelectAvatar/SelectAvatar.jsx";
import {useEffect, useState} from "react";
import {onClickAction} from "../../../utils/actions.js";

const SelectAvatars = ({resetForm, resetSelect, name, afterChange=false}) => {
    const [avatarId, setAvatarId] = useState(null);

    const avatars = [{id: 1, img: avatarImg}, {id: 2, img: avatarImg},
        {id: 3, img: avatarImg}, {id: 4, img: avatarImg},
        {id: 5, img: avatarImg}, {id: 6, img: avatarImg},
        {id: 7, img: avatarImg}, {id: 8, img: avatarImg},
        {id: 9, img: avatarImg}, {id: 10, img: avatarImg},
    ];

    const onClick = (id) => {
        setAvatarId(id);
        if(afterChange){
            afterChange();
        }
    }

    const avatarsHtml =  avatars.map(item => {
        return <SelectAvatar avatarImg={item.img} key={item.id}
            {...{[onClickAction()]: () => onClick(item.id)}} selected={item.id === avatarId}
        />
    });

    useEffect(() => {
        setAvatarId(null);
    }, [resetForm, resetSelect]);

    return (
        <>
            <input className="select-avatars__input" name={name} value={avatarId} />
            <div className="select-avatars">
                {avatarsHtml}
            </div>
        </>
    );
}

export default SelectAvatars;