import './Checkboxes.sass';
import Checkbox from "@containers/Form/Checkbox/Checkbox.jsx";
import {useState} from "react";

const Checkboxes = () => {
    const itemsData1 = [
        {'title': 'Лайків більше, ніж дизлайків', "name": "likesOver"},
        {'title': 'Переглянуто більше 10 разів', "name": "moreViews10"},
        {'title': 'Переглянуто більше 100 разів', "name": "moreViews100"},
    ];

    const itemsData2 = [
        {'title': 'Має лайки', "name": "hasLikes"},
        {'title': 'Має дизлайки', "name": "hasDislikes"},
        {'title': 'Має коментарі', "name": "hasComments"},
    ];

    const prepareItem = (item, index) => {
        return (
            <div className="filter-checkboxes__checkbox" key={index}>
                <Checkbox {...item}/>
            </div>
        );
    };

    const items1 = itemsData1.map(prepareItem);
    const items2 = itemsData2.map(prepareItem);

    return (
        <div className="filter-checkboxes">
            <div className="filter-checkboxes__block">
                {items1}
            </div>
            <div className="filter-checkboxes__block">
                {items2}
            </div>
        </div>
    );
}

export default Checkboxes;