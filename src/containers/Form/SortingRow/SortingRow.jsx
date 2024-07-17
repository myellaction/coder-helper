import './SortingRow.sass';
import sortingImg from "@icons/form/sorting.svg";

const SortingRow = ({sortingData}) => {
    const items = sortingData.map((item, index) => {
        return(
            <div className="sorting-row__item" key={index}>
                <div className="sorting-row__type">
                    <img src={sortingImg} alt="Сортування"/>
                    <div className="sorting-row__type-title">{item.data.title}</div>
                </div>
                <div className="sorting-row__options">
                    <div className="sorting-row__desc-item">
                        <input type="radio" name={item.type} id={item.type + '_desc'} value="desc"/>
                        <label htmlFor={item.type + '_desc'} className="radio-label">
                            <div className="sorting-row__desc-item-title">{item.data.desc}</div>
                        </label>
                    </div>
                    <div className="sorting-row__asc-item">
                        <input type="radio" name={item.type} id={item.type + '_asc'} value="asc"/>
                        <label htmlFor={item.type + '_asc'} className="radio-label">
                            <div className="sorting-row__asc-item-title">{item.data.asc}</div>
                        </label>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="sorting-row__block">
            {items}
        </div>
    );
}

export default SortingRow;