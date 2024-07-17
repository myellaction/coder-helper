import './Sorting.sass';
import sortingImg from '@icons/form/sorting.svg';
import SortingColumn from "@containers/Form/SortingColumn/SortingColumn.jsx";
import SortingRow from "@containers/Form/SortingRow/SortingRow.jsx";

const Sorting = () => {
    const sortingData = [
        {'type': 'created_at', 'data': {
            'title': 'Дата публікації',
            'desc': 'Нові',
            'asc': 'Минулі'
            }
        },
        {'type': 'views', 'data': {
                'title': 'Перегляди',
                'desc': 'Більше',
                'asc': 'Менше',
            }
        },
        {'type': 'likes', 'data': {
                'title': 'Лайки',
                'desc': 'Більше',
                'asc': 'Менше',
            }
        },
        {'type': 'dislikes', 'data': {
                'title': 'Дизлайки',
                'desc': 'Більше',
                'asc': 'Менше',
            }
        },
        {'type': 'comments', 'data': {
                'title': 'Коментарі',
                'desc': 'Більше',
                'asc': 'Менше',
            }
        }
    ];

    const SortingBlock = window.innerWidth >= 575 ? SortingColumn : SortingRow;

    return (
        <div className="sorting">
            <div className="sorting__title semi-bold">Сортувати</div>
            <div className="sorting__block">
                <SortingBlock sortingData={sortingData}/>
            </div>
        </div>
    );
}

export default Sorting;