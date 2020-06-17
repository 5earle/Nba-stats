import { useImmer } from "use-immer"
import React, {useEffect} from 'react';
import { connect,useDispatch,useSelector } from 'react-redux';
import {searchPlayers,searchPlayerTwo} from '../redux/actions/counterActions';
import Cards from './Cards';
import TextField from '@material-ui/core/TextField';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from "next/link";



const useStyles = makeStyles({
    textFields: {
        background: "#fff",
        color: "white"
    },

    root: {
        minWidth: 275,
        width: '100%'
    },
    columnCard:{
        width: '50%',
        margin: 'auto',
        padding: '.75rem',
        backgroundColor: '#00d1b2',
        color: '#fff',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: '32px',
        fontWeight: '600',
        textAlign: 'center',
        textTransform: 'capitalize',
        color: '#fff',
    },
    subTitle: {
        fontSize: '20px',
        fontWeight: '400',
        textAlign: 'center',
        textTransform: 'capitalize',
        color: '#fff',
    },
    pos: {
        marginBottom: 12,
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        '& > div':{
            width: '40%',
            marginRight: '20px',
        }
    },
    tableStyle: {
        width: '50%',
        margin: 'auto',
    },
    mainContainer:{
        display: 'flex',
        flexDirection: 'column'
    },
    searcContainer:{
      width: '50%'
    },
    teamsContainer:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        '& img':{
            width: '150px',
            margin: '10px 6px',
            cursor: 'pointer'
        }
    },
    hvrUnderlineFromCenter: {
        display: 'inline-block',
        verticalAlign: 'middle',
        transform: 'perspective(1px) translateZ(0)',
        boxShadow: '0 0 1px transparent',
        position: 'relative',
        overflow: 'hidden',
        '&:before':{
            content: "",
            position: 'absolute',
            zIndex: -1,
            left: '50%',
            right: '50%',
            bottom: '0',
            background: '#006bb7',
            height: '4px',
            transitionProperty: 'left, right',
            transitionDuration: '0.3s',
            transitionTimingFunction: 'ease-out',
        }
    }

});

const Search = (props) => {
    const classes = useStyles();
    const [state, setState] = useImmer({
        searchTerm: "",
        teams: [
            "sixers", "blazers", "bucks", "bulls", "cavaliers",
            "celtics", "clippers", "grizzlies", "hawks", "heat",
            "hornets", "jazz", "kings", "knicks", "lakers",
            "magic", "mavericks", "nets", "nuggets", "pacers",
            "pelicans", "pistons", "raptors", "rockets", "spurs",
            "suns", "thunder", "timberwolves", "warriors", "wizards"
        ],
        searchResults: [
            "sixers", "blazers", "bucks", "bulls", "cavaliers",
            "celtics", "clippers", "grizzlies", "hawks", "heat",
            "hornets", "jazz", "kings", "knicks", "lakers",
            "magic", "mavericks", "nets", "nuggets", "pacers",
            "pelicans", "pistons", "raptors", "rockets", "spurs",
            "suns", "thunder", "timberwolves", "warriors", "wizards"
        ]
    });

    function  handleInputChange(event) {
        const value = event.target.value
        setState(draft => {
            draft.searchTerm = value
        })

        filterTeams(value);
    }

    function filterTeams(input) {
        let filteredTeams = state.teams.filter((team)=>{
            return team.includes(input.toLowerCase());
        })
        setState(draft => {
            draft.searchResults = filteredTeams
        })
    }

    function renderResults(searchResults){
        return state.searchResults.map((team, index) => {
            return (
                <div key={index}>
                    <Link href={`/roster?team=${team}`}>
                        <div className={classes.hvrUnderlineFromCenter}>
                            <img src={`/images/teams/${team}.png`} alt={team} />
                        </div>
                    </Link>
                </div>
            )
        })
    }


    return (
        <React.Fragment>
            <div className={classes.mainContainer}>

                <div className={classes.searcContainer}>
                    <TextField
                        className={classes.textFields}
                        id="first"
                        label="Search your team"
                        variant="outlined"
                        autoComplete="off"
                        color="primary"
                        onChange={handleInputChange}/>
                </div>

                <div className={classes.teamsContainer}>
                    {renderResults(state.searchResults)}
                </div>
            </div>
        </React.Fragment>


    );

};

Search.getInitialProps = async function({store}) {

}

export default Search;

