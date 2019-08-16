// UserDetails.jsx
import React, { Component } from 'react';

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
            <form >
                <h2>¿Quiere pagar anuncios?</h2>
                <div className="ContainerFieldsInline">
                    <p>
                        <input id="ads-si" type="radio" value="SI"
                            checked={values.ads === "SI"}
                            onChange={this.props.handleChange( 'ads' )}
                            />
                        <label for="ads-si">SI</label>
                    </p>
                    <p>
                        <input id="ads-no" type="radio" value="NO"
                                checked={values.ads === "NO"}
                                onChange={this.props.handleChange( 'ads' )} />
                        <label for="ads-no">NO</label>
                    </p>
                </div>

                <button onClick={this.back}>Back</button>
                <button onClick={this.saveAndContinue}>Siguiente </button>
            </form>
        )
    }
}

export default PayAds;