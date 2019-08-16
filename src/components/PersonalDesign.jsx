// UserDetails.jsx
import React, { Component } from 'react';

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
            <form >
                <h2>Diseño Perfil</h2>
                <div className="ContainerFieldsInline">

                    <p>         
                        <input id="design-si" type="radio" value="SI"
                            checked={values.design === "SI"}
                            onChange={this.props.handleChange( 'design' )}
                        />
                        <label for="design-si">SI</label>
                    </p>
                    <p>
                        <input id="design-no" type="radio" value="NO"
                            checked={values.design === "NO"}
                            onChange={this.props.handleChange( 'design' )} />
                        <label for="design-no">NO</label>
                    </p>

                </div>

                <button onClick={this.back}>Back</button>
                <button onClick={this.saveAndContinue}>Siguiente </button>
            </form>
        )
    }
}

export default PersonalDesign;