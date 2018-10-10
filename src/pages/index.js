import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import App from '../components/app'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css';

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
        onChange={this.handleChange}
    />;
  }
}


const IndexPage = () => (
  <Layout>
    <Example />

    <App />
    {/* <DatePicker selected={this.state.date} onChange={this.handleChange} /> */}
    <Link to='/about/'>Go to page 2</Link>
  </Layout>
)

export default IndexPage
