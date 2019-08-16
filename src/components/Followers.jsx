// UserDetails.jsx
import React, { Component } from 'react';

class Followers extends Component {

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
                <h2>Seguidores Mensuales</h2>
                <div className="ContainerFieldsInline">
                    <p>    
                        <input id="follow-no" type="radio" value="NO"
                            checked={values.followers === "NO"}
                            onChange={this.props.handleChange( 'followers' )}
                        />
                        <label for="follow-no">NO</label>
                    </p>
                    <p>
                        <input id="follow-200" type="radio" value="200"
                            checked={values.followers === "200"}
                            onChange={this.props.handleChange( 'followers' )} />
                        <label for="follow-200">200</label>
                    </p>
                    <p>
                        <input id="follow-500" type="radio" value="500"
                            checked={values.followers === "500"}
                            onChange={this.props.handleChange( 'followers' )} />
                        <label for="follow-500">500</label>
                    </p>
                    <p>
                        <input id="follow-800" type="radio" value="800"
                            checked={values.followers === "800"}
                            onChange={this.props.handleChange( 'followers' )} />
                        <label for="follow-800">800</label>
                    </p>
                    <p>
                        <input id="follow-1000" type="radio" value="1000"
                            checked={values.followers === "1000"}
                            onChange={this.props.handleChange( 'followers' )} />
                        <label for="follow-1000">1000</label>
                    </p>
                </div>

                <button onClick={this.back}>Back</button>
                <button onClick={this.saveAndContinue}>Siguiente </button>
            </form>
        )
    }
}

export default Followers;