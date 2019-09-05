// UserDetails.jsx
import React, { Component } from 'react';
import './InlineDesign.css';
import imgAds from '../images/ADS.png';
import bno from '../images/BotonN.png';
import byes from '../images/BotonY.png';

class PayAds extends Component {

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
            <h2>Diseño Perfil</h2>
            <section className="InlineContainer">
                <img src={imgAds} alt="" className="imgInline"/>

                <div className="FieldsInline">

                    <div>
                        <input id="ads-si" type="radio" value="SI"
                            checked={values.ads === "SI"}
                            onChange={this.props.handleChange( 'ads' )}
                            />
                        <label htmlFor="ads-si" className="label-container pointer">
                                <img src={byes} alt="" />
                        </label>
                    </div>

                    <div>
                        <input id="ads-no" type="radio" value="NO"
                            checked={values.ads === "NO"}
                            onChange={this.props.handleChange( 'ads' )} />
                        <label htmlFor="ads-no" className="label-container pointer">
                            <img src={bno} alt="" />
                        </label>
                    </div>

                </div>

            </section>
            <div>
                <button onClick={this.back}>Back</button>
                <button onClick={this.saveAndContinue}>Siguiente </button>
            </div>
        </form>

        )
    }
}

export default PayAds;