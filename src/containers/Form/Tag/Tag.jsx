import './Tag.sass';
import cancelImg from '@icons/form/tag-cancel.svg';
import {onClickAction} from "../../../utils/actions.js";

const Tag = ({title, removeTag}) => {
    return (
        <div className="form-tag">
            <div className="form-tag__title small">{title}</div>
            <div className="form-tag__img-block" {...{[onClickAction()]: removeTag}}>
                <img src={cancelImg} alt="cancel"/>
            </div>
        </div>
    );
}

export default Tag;