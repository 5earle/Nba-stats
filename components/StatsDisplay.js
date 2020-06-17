import { useEffect } from 'react';
import {useState} from 'react';
import { connect,useDispatch,useSelector } from 'react-redux';
import {getPlayers } from '../redux/actions/counterActions';


const StatsDisplay = ({stats}) => {
    console.log(stats);
    const [players,setPlayers] = useState('standard');
    const  {basketBallPlayers} = useSelector((state)=>state.counter);
    console.log(basketBallPlayers);


    return (
        <div>
          <ul>
              {/*{basketBallPlayers[players].map((name) =>
                  <li key={name.personId}>
                      {name.firstName +" "+
                      name.lastName + "=>" + name.personId}
                  </li>
              )}*/}
              {/*{basketBallPlayers.map((name) =>
                  <li key={name.personId}>
                      {name.firstName +" "+
                      name.lastName + "=>" + name.personId}
                  </li>
              )}*/}

          </ul>
        </div>
    );
};

StatsDisplay.getInitialProps = async function({store}) {

}

export default StatsDisplay;

