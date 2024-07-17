import {useRef, useState, useEffect} from "react";
import classNames from "classnames";
import {onClickAction} from "../../../utils/actions.js";

const PostTypes = ({articleTypes=['Нові', "Минулі", "Популярні", "Коментовані"]}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevActiveIndex, setPrevActiveIndex] = useState(0);
    const [lineStyle, setLineStyle] = useState({});
    const articleTypesRef = useRef([]);
    const activeClass = 'articles__type-selected';

    const changeActiveIndex = (index) => {
        setPrevActiveIndex(prevPrevActiveIndex => activeIndex);
        setActiveIndex(prevActiveIndex => index);
    };

    const articleTypesHtml = articleTypes.map((item, index) => {
        return (
            <li className={classNames("articles__type", {[activeClass]: index === activeIndex})} key={index}
                ref={el => (articleTypesRef.current[index] = el)}
                {...{[onClickAction()]: () => changeActiveIndex(index)}}>
                {item}
            </li>
        );
    });

    useEffect(() => {
        const currentType = articleTypesRef.current[activeIndex];
        const indexDiff = Math.abs(activeIndex - prevActiveIndex);
        let k = 1;
        for(let i=1; i < indexDiff; i++){
            k = k * 80/100;
        }
        const transitionDuration = indexDiff * k * 0.3 + 's';
        setLineStyle({'width': currentType.offsetWidth + 'px',
            'left': currentType.offsetLeft + 'px',
            'transitionDuration': transitionDuration});
    }, [activeIndex]);

    return (
        <ul className="articles__types">
            {articleTypesHtml}
            <div className="articles__line" style={lineStyle}></div>
        </ul>
    );
}

export default PostTypes;