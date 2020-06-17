import React, {useEffect} from 'react';
import fetch from "isomorphic-fetch";
import { connect,useDispatch,useSelector } from 'react-redux';



import StatsDisplay from '../components/StatsDisplay';
import Teams from '../components/teams';
import theme from '../src/Theme';
import {addTeams} from '../redux/actions/counterActions';
import {makeStyles, MuiThemeProvider} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles({
    root: {
        backgroundImage: `url(${"./floor.png"})`,
        backgroundAttachment: 'fixed',
        height: '100vh'
    },

});


const Index = (prop) => {
    console.log(prop);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        if(prop.stats){
            dispatch(addTeams(prop.stats['standard']));
        }
    },[])
   /* (function addToState() {
        dispatch(addTeams(prop.stats['standard']));
    })()*/


    return (
        <MuiThemeProvider theme={theme}>
                   <div>
                    <Teams />
                   </div>
        </MuiThemeProvider>

    );
};


//life cycle method, run when load
Index.getInitialProps = async function({store}) {
    let data;

    try{
        //npm i isomorphic-unfetch
        const res = await fetch('http://data.nba.net/10s/prod/v2/2019/teams.json');
        data = await res.json();

    }catch (e) {
        console.log(e)
        data = "empty"
    }

    return {
        stats: data.league
    };
}

export default Index;


