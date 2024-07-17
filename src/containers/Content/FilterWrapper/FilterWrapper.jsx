import './FilterWrapper.sass';

const FilterWrapper = ({children}) => {
    return (
        <div className="filter-wrapper">
            {children}
        </div>
    );
}

export default FilterWrapper;