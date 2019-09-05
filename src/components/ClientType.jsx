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

    optionChecked = () => {

        // console.log(option.checked);
    }

    componentDidMount = () => {
        const option = document.getElementById('label-persona');
        const divPa = option.parentNode;
        if (option.checked) 
            divPa.classList.add('option-checked');
        else
            divPa.classList.remove('option-checked');

        const option2 = document.getElementById('label-empresa');
        const divPa2 = option2.parentNode;
        if (option2.checked) 
            divPa2.classList.add('option-checked');
        else
            divPa2.classList.remove('option-checked');
    }

    componentDidUpdate = () => {
        const option = document.getElementById('label-persona');
        const divPa = option.parentNode;
        if (option.checked) 
            divPa.classList.add('option-checked');
        else
            divPa.classList.remove('option-checked');

        const option2 = document.getElementById('label-empresa');
        const divPa2 = option2.parentNode;
        if (option2.checked) 
            divPa2.classList.add('option-checked');
        else
            divPa2.classList.remove('option-checked');
    }

    render() {

        const { values } = this.props;
        return (
            <form className="FormInside FormClientType">
                <h2 >¿Que tipo de cliente eres?</h2>
                <section className="ClientType">
                    <div className="option-check">
                        <input id="label-persona" type="radio" value="persona"
                            checked={values.type === "persona"}
                            onChange={this.props.handleChange( 'type' )}
                        />
                        <label htmlFor="label-persona" className="label-container pointer">
                            <span className="underline">Persona</span>
                            {/* <div className="button-check"></div> */}
                            <div className="img-container">
                                <img src={imagePersona} alt="" />
                            </div>
                        </label>
                    </div>
                    <hr className="divider-type"/>
                    <div className="option-check">
                        <input id="label-empresa" type="radio" value="empresa"
                            checked={values.type === "empresa"}
                            onChange={this.props.handleChange( 'type' )} />
                        <label htmlFor="label-empresa" className="label-container pointer">
                            <span className="underline">Empresa</span>
                            {/* <div className="button-check"></div> */}
                            <div className="img-container">
                                <img src={imageEmpresa} alt=""/>
                            </div>
                        </label>
                    </div>
                </section>

                <div className="btn-container btn-only">
                    <button onClick={this.saveAndContinue} className="btn-both btn-next">Siguiente</button>
                </div>
            </form>
        )
    }
}

export default ClientType;