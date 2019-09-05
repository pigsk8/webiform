// UserDetails.jsx
import React, { Component } from 'react';
import './InlineDesign.css';
import imgDesign from '../images/dise_C3_B1o-de-perfil.png';
import bno from '../images/BotonN.png';
import byes from '../images/BotonY.png';

class PersonalDesign extends Component {

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
            <form className="FormInside FormInline">
                <h2>¿Quieres mejorar el aspecto de tu Perfil?</h2>
                <section className="InlineContainer">
                    <img src={imgDesign} alt="" className="imgInline"/>

                    <div className="FieldsInline">

                        <div>
                            <input id="design-si" type="radio" value="SI"
                                checked={values.design === "SI"}
                                onChange={this.props.handleChange( 'design' )}
                            />
                            <label htmlFor="design-si" className="label-container pointer">
                                    <img src={byes} alt="" />
                            </label>
                        </div>

                        <div>
                            <input id="design-no" type="radio" value="NO"
                                checked={values.design === "NO"}
                                onChange={this.props.handleChange( 'design' )} />
                            <label htmlFor="design-no" className="label-container pointer">
                                <img src={bno} alt="" />
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

export default PersonalDesign;