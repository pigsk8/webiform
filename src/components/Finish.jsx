// UserDetails.jsx
import React, { Component } from 'react';

class Finish extends Component {


    back = ( e ) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;
        console.log(values);
        return (
            <div>
                <p>Valores guardados consola</p>
                <button onClick={this.back}>Back</button>
            </div>
        )
    }
}

export default Finish;