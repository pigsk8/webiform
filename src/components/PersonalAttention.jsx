
// UserDetails.jsx
import React, { Component } from 'react';
import './InlineDesign.css';
import imgClient from '../images/atencion-al-cliente.png';
import bchat from '../images/BotonChat.png';
import bdm from '../images/BotonDM.png';
import bwhatsapp from '../images/BotonWhatsapp.png';
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
            <form className="FormInside FormInline" >
                <h2>Atencion a Personas</h2>
                <section className="InlineContainer">
                    <img src={imgClient} alt="" className="imgInline"/>
                    <div className="FieldsInline">

                        <div>
                            <input
                                id="chat"
                                type="checkbox"
                                checked={values.chat}
                                onChange={this.props.handleChange( 'chat' )} />
                            <label htmlFor="chat" className="label-container pointer">
                                <img src={bchat} alt="" />
                            </label>
                        </div>

                        <div>
                            <input
                                id="dm"
                                type="checkbox"
                                checked={values.dm}
                                onChange={this.props.handleChange( 'dm' )} />
                            <label htmlFor="dm" className="label-container pointer">
                                <img src={bdm} alt="" />
                            </label>
                        </div>

                        <div>
                            <input
                                id="whatsapp"
                                type="checkbox"
                                checked={values.whatsapp}
                                onChange={this.props.handleChange( 'whatsapp' )} />
                            <label htmlFor="whatsapp" className="label-container pointer">
                                <img src={bwhatsapp} alt="" />
                            </label>
                        </div>

                    </div>

                </section>

                <div className="btn-container">
                    <button onClick={this.back} className="btn-both btn-prev">Anterior</button>
                    <button onClick={this.saveAndContinue} className="btn-both btn-next">Siguiente</button>
                </div>

            </form>
        )
    }
}

export default PersonalAttention;