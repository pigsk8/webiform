// UserDetails.jsx
import React, { Component } from 'react';

class SocialNetwork extends Component {

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
                <h2>Redes</h2>
                <div className="ContainerFieldsInline">
                    <p>
                        <input
                            id="instagram"
                            type="checkbox"
                            checked={values.instagram}
                            onChange={this.props.handleChange( 'instagram' )} />
                        <label for="instagram">Instagram</label>
                    </p>              
                    <p>
                        <input
                            id="facebook"
                            type="checkbox"
                            checked={values.facebook}
                            onChange={this.props.handleChange( 'facebook' )} />
                        <label for="facebook">Facebook</label>
                    </p>
                    <p>
                        <input
                            id="twitter"
                            type="checkbox"
                            checked={values.twitter}
                            onChange={this.props.handleChange( 'twitter' )} />
                        <label for="twitter">Twitter</label>
                    </p>
                    <p>
                        <input
                            id="youtube"
                            type="checkbox"
                            checked={values.youtube}
                            onChange={this.props.handleChange( 'youtube' )} />
                        <label for="youtube">Youtube</label>
                    </p>
                    <p>
                        <input
                            id="linkedin"
                            type="checkbox"
                            checked={values.linkedin}
                            onChange={this.props.handleChange( 'linkedin' )} />
                        <label for="linkedin">LinkedIn</label>
                    </p>
                    <p>
                        <input
                            id="others"
                            type="checkbox"
                            checked={values.others}
                            onChange={this.props.handleChange( 'others' )} />
                        <label for="others">Otros</label>
                    </p>
                </div>

                <button onClick={this.back}>Back</button>
                <button onClick={this.saveAndContinue}>Siguiente </button>
            </form>
        )
    }
}

export default SocialNetwork;