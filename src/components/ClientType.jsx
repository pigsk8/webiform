// UserDetails.jsx
import React, { Component } from 'react';
import imagePersona from '../images/Persona.png';
import imageEmpresa from '../images/Empresa.png';
import './ClientType.css';

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
            <form className="FormInside FormClientType">
                <h2 >¿Que tipo de cliente eres?</h2>
                <section className="ClientType">
                    <div>
                        <input id="label-persona" type="radio" value="persona"
                            checked={values.type === "persona"}
                            onChange={this.props.handleChange( 'type' )}
                        />
                        <label htmlFor="label-persona" className="label-container pointer">
                            <span className="underline">Persona</span>
                            <div className="button-check"></div>
                        <img src={imagePersona} alt="" />
                        </label>
                    </div>
                    <hr className="divider-type"/>
                    <div>
                        <input id="label-empresa" type="radio" value="empresa"
                            checked={values.type === "empresa"}
                            onChange={this.props.handleChange( 'type' )} />
                        <label htmlFor="label-empresa" className="label-container pointer">
                            <span className="underline">Empresa</span>
                            <div className="button-check"></div>
                            <img src={imageEmpresa} alt=""/>
                        </label>
                    </div>
                </section>
                <button onClick={this.saveAndContinue}>Siguiente </button>
            </form>
        )
    }
}

export default ClientType;