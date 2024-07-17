import './Filter.sass';
import Block from "@containers/Content/Block/Block.jsx";
import Checkboxes from "@containers/Filter/Checkboxes/Checkboxes.jsx";
import Tags from "@containers/Form/Tags/Tags.jsx";
import Sorting from "@containers/Form/Sorting/Sorting.jsx";
import Button from "@containers/Form/Button/Button.jsx";

import {useState} from 'react';

const Filter = ({afterChange}) => {
    const [reset, setReset] = useState(false);

    const onReset = () => {
        setReset(!reset);
    }

    return (
        <div className="article-filter">
            <Block>
                <form className="article-filter__form" onReset={onReset}>
                    <div className="article-filter__title semi-bold">Оберіть фільтр</div>
                    <div className="article-filter__checkboxes">
                        <Checkboxes/>
                    </div>
                    <div className="article-filter__tags">
                        <Tags afterChange={afterChange} defaultTitleStyle={false} resetForm={reset} />
                    </div>
                    <div className="article-filter__sorting">
                        <Sorting />
                    </div>
                    <div className="article-filter__buttons">
                        <div className="article-filter__btn-reset">
                            <Button type="reset"/>
                        </div>
                        <div className="article-filter__btn-submit">
                            <Button/>
                        </div>
                    </div>
                </form>
            </Block>
        </div>
    );
}

export default Filter;