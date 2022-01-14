import { useSelector, useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { changeFilter } from "../../actions";

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом



const HeroesFilters = () => {

    const {filters, activeFilter} = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(activeFilter)

    const buttons = filters.map(item => {
        return (
            <button 
                onClick={() => dispatch(changeFilter(item.value))}
                key={uuidv4()} 
                className={`btn ${item.className} ${item.value === activeFilter ? 'active' : null}`}>
                {item.name}
            </button>
        )
    })
    

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {buttons}
                    {/* <button className="btn btn-outline-dark active">Все</button>
                    <button className="btn btn-danger">Огонь</button>
                    <button className="btn btn-primary">Вода</button>
                    <button className="btn btn-success">Ветер</button>
                    <button className="btn btn-secondary">Земля</button> */}
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;