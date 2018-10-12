import React from 'react'
import { Link } from 'gatsby'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css';


  // Declaring variables for date checking
let today = new Date();
let dd = today.getDate();
let ddPlus = (dd > 9) ? dd : `0` + dd;
let mm = today.getMonth()+1;
let mmPlus = (mm > 9) ? mm : `0` + mm;
let yyyy = today.getFullYear();
//var for correct url for gameday api
// let url = `https://gd.mlb.com/components/game/mlb/year_${yyyy}/month_${mmPlus}/day_${ddPlus}/master_scoreboard.json`;
 const url = 'https://gd.mlb.com/components/game/mlb/year_2011/month_09/day_20/master_scoreboard.json';


 class Example extends React.Component {
   constructor (props) {
     super(props)
     this.state = {
       startDate: moment()
     };
     this.handleChange = this.handleChange.bind(this);
   }
 
   handleChange(date) {
     this.setState({
       startDate: date
     });
   }
 
   render() {
     return <DatePicker
         selected={this.state.startDate}
         onSelect= { console.log(this.state.startDate._d)}
         onChange={this.handleChange}
     />;
   }
 }
 //let theDate = document.querySelector('input')
 //theDate.value  = = = returns current selected value from datepicker
 // can then split it into value


class App extends React.Component {
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
      <div id="App" >
        <header className="App-header">          
          <h3 className="App-title">Baseball Games for {mm}/{dd}/{yyyy} </h3>
          <Example />
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
              border: '2.5px solid #e0dbd1',
              color: 'rgba(0, 0, 0, .8)',
              textAlign: 'center',
              width: '75%'

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
