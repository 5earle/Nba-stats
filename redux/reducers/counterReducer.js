import {INCREMENT_COUNTER,
    DECREMENT_COUNTER,
    SAVE_TEAMS,
    GET_PLAYERS,
    SEARCH_PLAYER_ONE,
    SEARCH_PLAYER_TWO,
    GET_SINGLE_ROASTER,
    SET_LOADING,
    GET_ALL_PLAYERS_ID } from '../actions/types'



const initialState = {
    basketballTeams: null,
    counter: 0,
    contestantOne: null,
    contestantTwo: null,
    careerSummary: null,
    teamRoaster: null,
    loading: false,
    personIds: null
};

const counterReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_PLAYERS:
            return {
                ...state,
                basketballTeams: action.payload
            };

        case SEARCH_PLAYER_TWO:
            return {
                ...state,
                contestantTwo: action.payload
            };

        case INCREMENT_COUNTER:
            return {...state, counter: state.counter + 1};
        case DECREMENT_COUNTER:
            return {...state, counter: state.counter - 1};

        case SAVE_TEAMS:
            return {
                ...state,
                basketballTeams: action.payload
            };

        case GET_SINGLE_ROASTER:
            return{
                ...state,
                teamRoaster: state.basketballTeams.filter(team =>{
                    return team.fullName.toLowerCase().includes(action.payload.toLowerCase());
                }),
                loading: false
            }

        case SET_LOADING:
            return {
                ...state,
                loading: true
            };

        case GET_ALL_PLAYERS_ID:
            return {
                ...state,
                personIds: action.payload,
                loading: false
            }

        case SEARCH_PLAYER_ONE:
            return {
                ...state,
                contestantOne: action.payload,
                loading: false
            };
        default:
            return {...state};
    }
};

export default counterReducer;

