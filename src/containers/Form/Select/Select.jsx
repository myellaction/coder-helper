import './Select.sass';
import selectArrow from '@icons/form/select-arrow.svg';
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {clickAction} from "../../../utils/actions.js";

const Select = ({name, placeholder, title, items, resetForm}) => {

    const [isOpened, setIsOpened] = useState(false);
    const [selectItemValue, setSelectItemValue] = useState('');
    const selectRef = useRef(null);

    const closeBlock = (e) => {
        const target = e.target;
        if(![target, target.parentNode].some(item => item === selectRef.current)){
            setIsOpened(false);
        }
    }

    useEffect(() => {
        window.addEventListener(clickAction(), closeBlock);
        return () => window.removeEventListener(clickAction(), closeBlock);
    }, []);

    useEffect(() => {
        setSelectItemValue('');
    }, [resetForm]);

    const choseItem = (item) => {
        setSelectItemValue(item);
        setIsOpened(false);
    }

    const itemsHtml = items.map((item, index) => {
        return <div className="select-form__item" key={index}
                    onClick={() => choseItem(item)}
                >{item.title}</div>
    });

    return (
        <div className="select-form">
            <div className="select-form__title small">{title}</div>
            <input name={name} value={selectItemValue && selectItemValue.value} />
            <div className="select-form__block">
                <div className={classNames("select-form__select-block",
                    {"select-form__select-block_active": isOpened})}
                     onClick={() => setIsOpened(!isOpened)}
                     ref={selectRef}
                >
                    {selectItemValue ? <div className="select-form__value">{selectItemValue.title}</div>
                        :
                        <div className="select-form__placeholder">{placeholder}</div>
                    }
                    <img src={selectArrow} alt="select-arrow" />
                </div>

                {isOpened &&
                    <div className="select-form__items" onClick={e => e.stopPropagation()}>
                        {selectItemValue &&
                            <div className="select-form__placeholder select-form__item"
                                 onClick={() => choseItem('')}
                            >{placeholder}</div>
                        }
                        {itemsHtml}
                    </div>
                }
            </div>
        </div>
    );
}

export default Select;