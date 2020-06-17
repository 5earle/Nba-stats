import {INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    SAVE_TEAMS,
    GET_PLAYERS,
    SEARCH_PLAYER_ONE,
    SEARCH_PLAYER_TWO,
    GET_SINGLE_ROASTER,
    SET_LOADING,
    GET_ALL_PLAYERS_ID } from './types'
import {useDispatch} from 'react-redux';


//Action Creator
export const incrementCounter = () => ({
    type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
});





export const searchPlayerTwo = text => async dispatch => {
    try{
        const res = await fetch(`http://data.nba.net/10s/prod/v1/2019/players/${text}_profile.json`);
        const data = await res.json();

        dispatch({
            type: SEARCH_PLAYER_TWO,
            payload: data.league.standard.stats.careerSummary
        })

    }catch (e) {
        console.log(e);
    }

};

export const getPlayers = () => async dispatch => ({
    type: GET_PLAYERS
});


//-//
export const addTeams = Teams => ({
    type: SAVE_TEAMS,
    payload: Teams
});

export const searchPlayers = (term)  => async dispatch => {
    try{
        //send to the reducer
        setLoading();

        const res = await fetch(`http://data.nba.net/10s/prod/v1/2019/players/${term}_profile.json`);
        const data = await res.json();

        dispatch({
            type: SEARCH_PLAYER_ONE,
            payload: data.league.standard.stats.careerSummary
        })


    }catch (e) {
        console.log(e);
    }

};

export const getSingleRoaster = teamname => dispatch =>{

    //send to the reducer
    setLoading();

    dispatch({
        type: GET_SINGLE_ROASTER,
        payload: teamname
    })
}

export const getAllPlayerId = teamid => async dispatch =>{

    try{
        //send to the reducer
        setLoading();

        const res = await fetch(`http://data.nba.net/10s/prod/v1/2019/teams/${teamid}/roster.json`);
        const data = await res.json();

        dispatch({
            type: GET_ALL_PLAYERS_ID,
            payload: data
        })
    }catch (e) {

    }
}


// Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};
