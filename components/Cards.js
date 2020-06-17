import React,{useEffect,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {searchPlayers} from '../redux/actions/counterActions';

//-//
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {makeStyles,styled} from '@material-ui/core/styles';



const useStyles = makeStyles({
    root: {
        minWidth: 275,
        width: '100%',
        backgroundColor: '#00d1b2',
        color: '#fff',
        margin: '20px 0',
    },
    loser: {
        minWidth: 275,
        width: '100%',
        backgroundColor: '#ffdd57',
        color: '#fff',
        margin: '20px 0',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    flexCenter: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '100px 0',
        '& > div':{
            width: '40%',
            marginRight: '20px',
        }
    },
    columnCard:{
        width: '50%',
        margin: 'auto',
        padding: '.75rem',
        backgroundColor: '#00d1b2',
        color: '#fff',
    },
    tableStyle: {
        width: '50%',
        margin: 'auto',
        '&:hover':{
            cursor: 'pointer'
        }
    }

});

const Cards = ({apost}) => {
    const classes = useStyles();
    const [player,setPlayer] = useState([]);
    const [playerlist,setPlayerList] = useState([]);

   /* useEffect(() => {
        getPlayer(apost);
    }, []);*/



    async function getPlayer(item) {
        try{
            const response = await fetch(`http://data.nba.net/10s/prod/v1/2019/players/${item}_profile.json`);
            const data = await response.json();
            setPlayer(data.league.standard.stats.careerSummary);
        }catch (e) {
            console.log(e);
            setPlayer([]);
        }
    }




    return (
        <TableContainer component={Paper} className={classes.tableStyle}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>NAME</TableCell>
                        <TableCell align="left">POSITION</TableCell>
                        <TableCell align="center">JERSEY#</TableCell>
                        <TableCell align="center">HEIGHT</TableCell>
                        <TableCell align="center">YEARS PRO</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {apost.map((row) => (
                        <TableRow key={row.personId}>
                            <TableCell component="th" scope="row">
                                {row.firstName} {row.lastName}
                            </TableCell>
                            <TableCell align="left">{row.pos}</TableCell>
                            <TableCell align="center">{row.jersey}</TableCell>
                            <TableCell align="center">{row.heightFeet}{"'"}{row.heightInches}</TableCell>
                            <TableCell align="center">{row.yearsPro}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

    );
};

Cards.getInitialProps = async function({store}) {

}
export default Cards

