import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { addHero, filtersFetched } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHttp } from '../../hooks/http.hook';

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров


const HeroesAddForm = () => {

    const [hero, setHero] = useState({id: uuidv4()});
    const dispatch = useDispatch();
    const {filters} = useSelector(state => state.filters);
    const {request} = useHttp();

    const updHero = (obj) => {
        setHero(hero => {
            return {...hero, ...obj}
        })
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        request("http://localhost:3001/heroes", 'POST', JSON.stringify(hero))
        .then(() => {
            dispatch(addHero(hero))
            setHero({id: uuidv4()})
        })
        .catch(() => console.log('error'))
     }


    useEffect(() => {
        request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => console.log('error'))

        // eslint-disable-next-line
    }, []);


    const optionsItems = filters.map((item, id) => {
        if (item.value !== 'all') {
            return (
                <option key={id} value={item.value}>{item.name}</option>
            )
        }
    })

    return (
        <form 
            className="border p-4 shadow-lg rounded"
            onSubmit={(e) => onSubmitForm(e)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    onChange={(e) => updHero({name: e.target.value})}
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    placeholder="Как меня зовут?"
                    value={hero.name ? hero.name : ''}/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    onChange={(e) => updHero({description: e.target.value})}
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    value={hero.description ? hero.description : ''}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select
                    onChange={(e) => updHero({element: e.target.value})}
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={hero.element ? hero.element : ''}>
                    <option value="" disabled>Я владею элементом...</option>
                    {optionsItems}
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;