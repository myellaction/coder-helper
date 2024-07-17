import './PageButton.sass';

const PageButton = ({type, img, title}) => {
    return (
        <div className={`page-btn page-btn__type-${type}`}>
            <img className="page-btn__img" src={img} alt={title} />
            <div className="page-btn__title">{title}</div>
        </div>
    );
}

export default PageButton;