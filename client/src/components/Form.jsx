import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name : '',
            priority: 0
        }
    }
    render() {
        return(
            <div>
                <form >
                    <label>
                        <input type="text" name="name" placeholder="Todo" />
                    </label>
                    <label>
                        <input type="number" name="priority" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;