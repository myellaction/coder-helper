import './Views.sass';
import classNames from 'classnames';

const Views = ({count=1, white=false}) => {
    return (
        <div className={classNames("article__views", {'article__views_white': white})}>
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M1.61481 7C3.29054 9.867 5.92711 12.5 10 12.5C14.0729 12.5 16.7095 9.867 18.3852 7C16.7095 4.133 14.0729 1.5 10 1.5C5.92711 1.5 3.29054 4.133 1.61481 7ZM0.212904 6.61412C1.99944 3.37616 5.05937 0 10 0C14.9406 0 18.0006 3.37616 19.7871 6.61412L20 7L19.7871 7.38587C18.0006 10.6239 14.9406 14 10 14C5.05937 14 1.99944 10.6239 0.212904 7.38587L0 7L0.212904 6.61412ZM10 3.125C8.03201 3.125 6.43667 4.85987 6.43667 7C6.43667 9.14012 8.03201 10.875 10 10.875C11.968 10.875 13.5633 9.14012 13.5633 7C13.5633 4.85987 11.968 3.125 10 3.125Z"
                      fill="#9AA1A6"/>
            </svg>
            <div className="article__views-count small">{count}</div>
        </div>
    );
}

export default Views;