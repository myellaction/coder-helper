import './Pagination.sass';
import leftArrow from '@icons/pg-left-arrow.svg';
import rightArrow from '@icons/pg-right-arrow.svg';

import {NavLink} from 'react-router-dom';
import classNames from 'classnames';

import {getPagesArr} from "@containers/Content/Pagination/paginationHelper.js";

const Pagination = ({page, pageCount}) => {

    const pagesHtml = [];
    const pages = getPagesArr({page, maxPages: pageCount});
    pages.forEach((i, index) => {
        if(i === '-'){
            pagesHtml.push(<span className="pagination__page pagination__space" key={index}>...</span>)
        } else if(i === page){
            pagesHtml.push(<span className="pagination__page pagination__page-selected" key={index}>{i}</span>)
        } else {
            pagesHtml.push(<NavLink to={`?page=${i}`} className="pagination__page" key={index}>{i}</NavLink>)
        }
    });

    return (
        <div className="pagination">
            <div className="pagination__block">
                {page > 1 ?
                    <NavLink to={`?page=${page - 1}`} className={
                        classNames("pagination__page pagination__prev")}
                    >
                        <img src={leftArrow} alt="prev"/>
                    </NavLink>
                :
                    <span className="pagination__page pagination__prev">
                        <img src={leftArrow} alt="prev"/>
                    </span>
                }
                {pagesHtml}
                {page < pageCount ?
                    <NavLink to={`?page=${page + 1}`} className="pagination__page pagination__next">
                        <img src={rightArrow} alt="prev"/>
                    </NavLink>
                :
                    <span className="pagination__page pagination__next">
                        <img src={rightArrow} alt="prev"/>
                    </span>
                }
            </div>
        </div>
    );
}

export default Pagination;