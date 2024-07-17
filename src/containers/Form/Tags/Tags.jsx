import './Tags.sass';
import Tag from "@containers/Form/Tag/Tag.jsx";
import {
    addTag,
    handleWindowClick,
    onKeyDown,
    removeTag
} from "@containers/Form/Tags/tagsHelpers.js";

import {useEffect, useRef, useState} from "react";
import classNames from 'classnames';
import {clickAction, onClickAction} from "../../../utils/actions.js";

const Tags = ({resetForm, defaultTitleStyle=true, afterChange=false}) => {
    const [inputTags, setInputTags] = useState([]);
    const [tags, setTags] = useState(['python', 'php', 'package', 'pillow', 'post', 'pinteres', 'phpstorm']);

    const tagsBlockRef = useRef(null);
    const variantsRef = useRef(null);
    const inputRef = useRef(null);

    const [isFocused, setIsFocused] = useState(false);
    const [variants, setVariants] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleWindowClickListener = (e) => {
        handleWindowClick({e, inputRef, tagsBlockRef, setIsFocused});
    }

    useEffect(() => {
        window.addEventListener(clickAction(), handleWindowClickListener);
        return () => {
            window.removeEventListener(clickAction(), handleWindowClickListener);
        };
    }, []);

    useEffect(() => {
        if(inputValue.length === 0){
            setVariants([]);
        } else {
            setVariants(tags.filter(item => item.startsWith(inputValue) && !inputTags.includes(item)));
        }
    }, [inputValue, tags, inputTags]);

    useEffect(() => {
        setInputTags([]);
    }, [resetForm]);

    useEffect(() => {
        if(afterChange){
            afterChange();
        }
    }, [inputTags]);

    const removeTagHandler = (e) => {
        removeTag({e, setInputTags});
    }

    //Prepare html

    const inputTagsHtml = inputTags.map((item, index) => {
        return <Tag title={item} key={index} removeTag={removeTagHandler} />;
    });

    const variantsHtml = variants.map((item, index) => {
        return(
            <div className="tags__variant small" key={index}
                {...{[onClickAction()]: () => addTag({setInputTags, inputTags, setInputValue, inputValue: item})}}
            >{item}</div>
        );
    });

    return (
        <div className="tags">
            <div className={classNames("tags__title", defaultTitleStyle ? 'small' : "semi-bold")}>Теги</div>
            <div className={classNames("tags__desc", {'tags__desc_not-default': defaultTitleStyle})}
            >
                (через пробіл)
            </div>
            <input className="tags__skills" name="skills" value={JSON.stringify(inputTags)} readOnly />
            <div className="tags__skills-block">
                <label htmlFor="skill-tag" className="tags__skills-label">
                    <div className={classNames("tags__block", {'tags__block_focus': isFocused},
                        {'tags__block_variants': isFocused && variants.length > 0}
                        )}
                         ref={el => tagsBlockRef.current = el}
                    >
                        {inputTagsHtml}
                        <input className="tags__input small" name="tag" id="skill-tag"
                               onFocus={() => setIsFocused(true)} onChange={e => setInputValue(e.target.value)}
                               onKeyDown={e => onKeyDown({e, inputTags, inputValue, setInputValue, setInputTags,
                               isFocused, setIsFocused})}
                               value={inputValue}
                               ref={inputRef}
                        />
                    </div>
                </label>
                {variants.length > 0 && isFocused &&
                    <div className="tags__variants" ref={variantsRef}>
                        {variantsHtml}
                    </div>
                }
            </div>
        </div>
    );
}

export default Tags;
