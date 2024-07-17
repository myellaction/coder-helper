import './Home.sass';
import filter from '../../assets/icons/filter.svg';
import filterArrow from '../../assets/icons/filter-arrow.svg';
import Article from "../../containers/Content/Article/Article.jsx";
import Search from "../../containers/Content/Search/Search.jsx";
import PostTypes from "../../containers/Content/PostTypes/PostTypes.jsx";
import articleImg from "../../assets/img/article-img.jpg";
import Filter from "@containers/Content/Filter/Filter.jsx";
import {useRef, useState, useEffect} from "react";
import classNames from "classnames";
import {onClickAction} from "../../utils/actions.js";

const Home = ({data}) => {
    const [isFilterShow, setIsFilterShow] = useState(null);

    const filterBlockWrapper = useRef(null);

    /**
     * @param {*} value
     */
    const changeFilterBlockHeight = (value=false) => {
        let newHeight;
        if(value === false){
            newHeight = filterBlockWrapper.current.scrollHeight + 'px';
        } else {
            newHeight = value;
        }
        filterBlockWrapper.current.style.height = newHeight;
    }

    const afterChange = () => {
        if(isFilterShow){
            if(!filterBlockWrapper.current.classList.contains('no-transition')){
                filterBlockWrapper.current.classList.add('no-transition');
            }
            changeFilterBlockHeight(0);
            changeFilterBlockHeight();
        }
    };

    useEffect(() => {
        if(isFilterShow){
            changeFilterBlockHeight();
        } else {
            if(isFilterShow !== null){
                filterBlockWrapper.current.classList.remove('no-transition');
                changeFilterBlockHeight(0);
            }
        }
    }, [isFilterShow]);

    return (
        <div className="articles">
            <div className="articles__title-block">
                <div className="articles__title menu-title">Статті</div>
                <div className="articles__search">
                    <Search />
                </div>
            </div>
            <div className="articles__filters">
                <PostTypes />
                <div className="articles__filter"
                     {...{[onClickAction()]: () => setIsFilterShow(isFilterShow => !isFilterShow)}}
                >
                    <img className="articles__filter-img" src={filter} alt="Фільтр" />
                    <div className="articles__filter-title">Фільтри</div>
                    <img className={classNames("articles__filter-arrow",
                        {'articles__filter-arrow_rotate': isFilterShow})}
                        src={filterArrow} alt="Відкрити фільтри"  />
                </div>
            </div>
            <div className="articles__block">
                <div className={classNames("articles__filter-block",
                    {'articles__filter-block_show': isFilterShow})}
                     ref={filterBlockWrapper}
                >
                    <Filter afterChange={afterChange} />
                </div>
                <div className="articles__article-wrapper">
                    <Article img={articleImg}/>
                </div>
                <div className="articles__article-wrapper">
                    <Article commented={true}/>
                </div>
            </div>
        </div>
    );
}

export default Home;