import React from 'react'
import { Link } from 'gatsby'

  // Declaring variables for date checking
let today = new Date();
let dd = today.getDate();
let ddPlus = (dd > 9) ? dd : `0` + dd;
let mm = today.getMonth()+1;
let mmPlus = (mm > 9) ? mm : `0` + mm;
let yyyy = today.getFullYear();

//var for correct url for gameday api
let url = `https://gd.mlb.com/components/game/mlb/year_${yyyy}/month_${mmPlus}/day_${ddPlus}/master_scoreboard.json`;
//  var url = 'https://gd.mlb.com/components/game/mlb/year_2011/month_09/day_20/master_scoreboard.json';




class App extends Component {
  state = { users: [] };
  componentDidMount() {
    fetch(url)
      .then(results => results.json())
      .then(response => {
        const users = response.data.games.game;
        this.setState({ users });
      });
  }

  render() {
    return (
      <div className="App"  >
        <header className="App-header">          
          <h3 className="App-title">Baseball Games for {mm}/{dd}/{yyyy} </h3>
        </header>
        {this.state.users.map(user => {

          //detect if game has score yet and set score variable. Show 0 if not.
           let homeScore = 0;
           let awayScore = 0;
           if('linescore' in user){
            homeScore = user.linescore.r.home;
            awayScore = user.linescore.r.away;
          } else {
            homeScore += 0;             
           }
          
          return (
            <div style={{
              margin: 'auto',
              border: '2.5px solid #e0dbd1',
              backgroundColor: 'rgba(68, 82, 127, .9)',
              color: 'rgba(0, 0, 0, .8)',
              textAlign: 'center',
              width: 'auto'

            }} key={user.id}>
            <p>
            {user.home_team_name} {homeScore} vs. {user.away_team_name} {awayScore} Start Time: {user.time}est 
            </p>
          </div>
        );
      } 
      )
      }
      </div>
    );
  }
}





export default App
