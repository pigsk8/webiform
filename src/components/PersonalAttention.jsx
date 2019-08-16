
// UserDetails.jsx
import React, { Component } from 'react';

class PersonalAttention extends Component {

    saveAndContinue = ( e ) => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = ( e ) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props;
        return (
            <form >
                <h2>Atención a Personas</h2>
                <div className="ContainerFieldsInline">
                    <p>
                        <input
                            id="chat"
                            type="checkbox"
                            checked={values.chat}
                            onChange={this.props.handleChange( 'chat' )} />
                        <label for="chat">CHAT</label>
                    </p>              
                    <p>
                        <input
                            id="dm"
                            type="checkbox"
                            checked={values.dm}
                            onChange={this.props.handleChange( 'dm' )} />
                        <label for="dm">DM</label>
                    </p>   
                    <p>
                        <input
                            id="whatsapp"
                            type="checkbox"
                            checked={values.whatsapp}
                            onChange={this.props.handleChange( 'whatsapp' )} />
                        <label for="whatsapp">WHATSAPP</label>
                    </p>  

                </div>
                <button onClick={this.back}>Back</button>
                <button onClick={this.saveAndContinue}>Siguiente </button>
            </form>
        )
    }
}

export default PersonalAttention;