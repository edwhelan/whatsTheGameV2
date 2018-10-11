import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import App from '../components/app'
// import DatePicker from 'react-datepicker'
// import moment from 'moment'

// import 'react-datepicker/dist/react-datepicker.css';

// class Example extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       startDate: moment()
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(date) {
//     this.setState({
//       startDate: date
//     });
//   }

//   render() {
//     return <DatePicker
//         selected={this.state.startDate}
//         onChange={this.handleChange}
//     />;
//   }
// }
//let theDate = document.querySelector('input')
//theDate.value  = = = returns current selected value from datepicker

const IndexPage = () => (
  <Layout>
    {/* <Example /> */}
    <App />
  </Layout>
)

export default IndexPage
