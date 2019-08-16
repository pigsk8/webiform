// UserDetails.jsx
import React, { Component } from 'react';

class ClientType extends Component {

    saveAndContinue = ( e ) => {
        e.preventDefault()
        if (this.props.values.type !== '')
            this.props.nextStep()
        else
            console.log('debe llenar');
    }

    render() {
        const { values } = this.props;
        return (
            <form >
                <h2 >¿Tipo de cliente?</h2>
                <div className="ContainerFieldsInline">
                    <p>
                        <input id="label-persona" type="radio" value="persona"
                            checked={values.type === "persona"}
                            onChange={this.props.handleChange( 'type' )}
                        />
                        <label for="label-persona">Persona</label>
                    </p>
                    <p>
                        <input id="label-empresa" type="radio" value="empresa"
                            checked={values.type === "empresa"}
                            onChange={this.props.handleChange( 'type' )} />
                        <label for="label-empresa">Empresa</label>
                    </p>
                </div>
                <button onClick={this.saveAndContinue}>Siguiente </button>
            </form>
        )
    }
}

export default ClientType;