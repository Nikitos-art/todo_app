import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import UsersList from "./components/User";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/users").then(
      response => {
        const users = response.data
        this.setState({
        "users": users
        });
      }
    ).catch(error => console.log(error))
//    const users = [
//      {
//        name: "UncleFrost"
//      },
//      {
//        name: "Popsicle"
//      }
//    ];
// http://127.0.0.1:8000/api/users/
  }

  render() {
    return (
      <div>
        <UsersList users={this.state.users} />
      </div>
    );
  }
}



export default App;
