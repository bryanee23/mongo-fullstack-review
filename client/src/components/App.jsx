import React from 'react';
import Form from './Form.jsx';
import List from './List.jsx';
import axios from 'axios';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            todos : []
        }

    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData() {

    }

    addData(name, priority) {

    }

    deleteData(id){
    }

    updateTodo(index, change) {

    }

    render() {
        return(
            <div>
                <h2>TODO LIST -- MONGODB REVIEW</h2>

            </div>
        );
    }
}

export default App;