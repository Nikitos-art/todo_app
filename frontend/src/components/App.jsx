import React from 'react';
import axios from 'axios';
import BodyTasksList from "./Body";
import Header from './Header';
import Footer from './Footer';
import TaskForm from './TaskAdd';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/tasks").then(
      response => {
        const tasks = response.data
        this.setState({
        "tasks": tasks
        });
      }
    ).catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <Header />     
        <TaskForm />
        <BodyTasksList tasks={this.state.tasks} />
        <Footer />
      </div>
    );
  }
}



export default App;
