import React, {useEffect, useState} from 'react';
import fetch from 'isomorphic-unfetch';
import {connect,useDispatch,useSelector} from 'react-redux';
import {getSingleRoaster,getAllPlayerId} from '../redux/actions/counterActions';
import { useImmer } from "use-immer"
import Cards from '../components/Cards';

//--//
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${"./floor.png"})`,
        backgroundAttachment: 'fixed',
        height: '100vh'
    },
    table: {
        minWidth: 650,
    },
    tableStyle: {
        width: '50%',
        margin: 'auto',
    }
});

const Roster = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {teamRoaster,personIds} = useSelector((state)=>state.counter);

    const [state, setState] = useImmer({
        isLoading: true,
        players: [],
        playerBio: []
    })

    useEffect(()=>{
        dispatch(getSingleRoaster(props.teamName));
    },[])

    /*get all playerid for a given roster by team name*/
    useEffect(()=>{
         if(!teamRoaster){
             console.log('run something here');
         } else {
             console.log(teamRoaster[0].teamId);
             dispatch(getAllPlayerId(teamRoaster[0].teamId));
             getAllPlayers(teamRoaster[0].teamId);
         }
    },[teamRoaster])

   /*array of player ids*/
    useEffect(()=>{
        if(!personIds){
        } else{
            setState(draft => {
                draft.players = personIds.league.standard.players
            });
        }
    },[personIds])



    async function getAllPlayers(itemId) {
        try{
            const response = await fetch(`http://data.nba.net/10s/prod/v1/2019/players.json`);
            const data = await response.json();



            setState(draft => {
                draft.playerBio = data.league.standard.filter((team)=>{
                    return team.teamId.includes(itemId);
                })
            })



        }catch (e) {
            console.log(e)
        }
        /*setPlayer(data.league.standard.stats.careerSummary);*/
    }


    return (

        <div>
            {state.playerBio.length > 0 && (
                <Cards apost={state.playerBio}/>
            )}
        </div>
    );
};

Roster.getInitialProps = async function({store,req,res,query}) {
    const team = query.team;

    return {
        teamName: team
    };
}
export default Roster;

