import './ArticleOptions.sass';
import dotsImg from "@icons/my-page/dots.svg";
import classNames from "classnames";
import LinePreloader from "@containers/Preloaders/LinePreloader/LinePreloader.jsx";
import {onClickAction} from "../../../utils/actions.js";

const ArticleOptions = ({item, setOpenedOption, isOpenedOption, changeArticleStatus}) => {
    const {id, status, action} = item;
    
    const changeOpenedStatus = (e) => {
        setOpenedOption(isOpenedOption ? null : id);
    }
    return (
        <div className="article-options">
            <div className="article-options__options-dots"
                 onClick={changeOpenedStatus}
            >
                <img className="article-options__options-img" src={dotsImg} alt="options"/>
            </div>
            <div className={classNames("article-options__options-block",
                {"article-options__options-block_opened": isOpenedOption})}
                 {...{[onClickAction()]: e => e.stopPropagation()}}
            >
                <div className="article-options__option small">Редагувати</div>
                {status !== 'hide' && status !== 'pinned' &&
                    <div className="article-options__option"
                        {...{[onClickAction()]: () => changeArticleStatus(id, 'pinned')}}
                    >
                        <div className="article-options__option-title small">Закріпити</div>
                    </div>
                }

                {status === 'pinned' &&
                    <div className="article-options__option"
                        {...{[onClickAction()]: () => changeArticleStatus(id, 'unpinned')}}
                    >
                        <div className="article-options__option-title small">Відкріпити</div>
                    </div>
                }

                {status !== 'hide' ?
                    <div className="article-options__option small"
                         {...{[onClickAction()]: () => changeArticleStatus(id, 'hide')}}
                    >Сховати</div>
                :
                    <div className="article-options__option small"
                        {...{[onClickAction()]: () => changeArticleStatus(id, 'published')}}
                    >Показати</div>
                }

                {action !== 'toDelete' ?
                    <div className="article-options__option" {...{[onClickAction()]: () => changeArticleStatus(id, 'toDelete')}}>
                        <div className="article-options__option-title small">Видалити</div>
                    </div>
                    :
                    <div className="article-options__option" {...{[onClickAction()]: () => changeArticleStatus(id, 'cancelDelete')}}>
                        <div className="article-options__option-title small">Скасувати</div>
                        <LinePreloader/>
                    </div>
                }
            </div>
        </div>
    );
}

export default ArticleOptions;