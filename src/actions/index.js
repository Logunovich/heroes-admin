import { createAction } from "@reduxjs/toolkit";
import { heroesFetching, heroesFetched, heroesFetchingError } from "../components/heroesList/heroesSlice";
import { filtersFetched } from "../components/heroesFilters/filtersSlice";

export const fetchHeroes = (request) => (dispatch) => {
    dispatch(heroesFetching());
    request("http://localhost:3001/heroes")
        .then(data => dispatch(heroesFetched(data)))
        .catch(() => dispatch(heroesFetchingError()))
}

export const fetchFilters = (request) => (dispatch) => {
    request("http://localhost:3001/filters")
            .then(data => dispatch(filtersFetched(data)))
            .catch(() => console.log('error'))
}

// export const heroesFetching = createAction('HEROES_FETCHING');
// export const heroesFetched = createAction('HEROES_FETCHED');
// export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');
// export const addHero = createAction('ADD_HERO');
// export const deleteHero = createAction('DELETE_HERO');


// export const heroesFetching = () => {
//     return {
//         type: 'HEROES_FETCHING'
//     }
// }


// export const heroesFetched = (heroes) => {
//     return {
//         type: 'HEROES_FETCHED',
//         payload: heroes
//     }
// }


// export const heroesFetchingError = () => {
//     return {
//         type: 'HEROES_FETCHING_ERROR'
//     }
// }

// export const deleteHero = (id) => {
//     return {
//         type: 'DELETE_HERO',
//         payload: id
//     }
// }

// export const addHero = (hero) => {
//     return {
//         type: 'ADD_HERO',
//         payload: hero
//     }
// }

// export const filtersFetched = (filters) => {
//     return {
//         type: 'FILTERS_FETCHED',
//         payload: filters
//     }
// }

// export const changeFilter = (filter) => {
//     return {
//             type: 'CHANGE_FILTER',
//             payload: filter
//     }
// }

// export const changeFilter = (filter) => (dispatch) => {
//     setTimeout(() => {
//         dispatch({
//                 type: 'CHANGE_FILTER',
//                 payload: filter
//         })
//     }, 1000)
// }