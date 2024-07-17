import './SortingColumn.sass';
import sortingImg from "@icons/form/sorting.svg";

const SortingColumn = ({sortingData}) => {
    const sortingTitles = sortingData.map((item, index) => {
        return (<div className="sorting-column__type-item" key={index}>
                <img src={sortingImg} alt="Сортування" />
                <div className="sorting-column__type-item-title">{item.data.title}</div>
            </div>
        );
    })

    const sortingDesc = sortingData.map((item, index) => {
        return (
            <div className="sorting-column__desc-item" key={index}>
                <input type="radio" name={item.type} id={item.type + '_desc'} value="desc"/>
                <label htmlFor={item.type + '_desc'} className="radio-label">
                    <div className="sorting-column__desc-item-title">{item.data.desc}</div>
                </label>
            </div>
        );
    })

    const sortingAsc = sortingData.map((item, index) => {
        return (
            <div className="sorting-column__asc-item" key={index}>
                <input type="radio" name={item.type} id={item.type + '_asc'} value="asc"/>
                <label htmlFor={item.type + '_asc'} className="radio-label">
                    <div className="sorting-column__asc-item-title">{item.data.asc}</div>
                </label>
            </div>
        );
    })

    return (
        <div className="sorting-column__block">
            <div className="sorting-column__type-block">
                {sortingTitles}
            </div>
            <div className="sorting-column__desc-block">
                {sortingDesc}
            </div>
            <div className="sorting-column__asc-block">
                {sortingAsc}
            </div>
        </div>
    );
}

export default SortingColumn;