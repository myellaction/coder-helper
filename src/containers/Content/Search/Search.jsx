import './Search.sass';
import search from "../../../assets/icons/search.svg";

const Search = ({placeholder='Знайти...'}) => {
    return (
        <form className="search">
            <label htmlFor="search__title">
                <div className="search__block">
                    <img src={search} alt="search"/>
                    <input className="search__input" id="search__title" name="title" placeholder={placeholder}/>
                </div>
            </label>
        </form>
    );
}

export default Search;