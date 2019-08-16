// UserDetails.jsx
import React, { Component } from 'react';

class WeekPub extends Component {

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
                <h2>Publicaciones Semanales</h2>
                <div className="ContainerFieldsInline">
                    <p>
                        <input id="pub-0" type="radio" value="0"
                                checked={values.pub === "0"}
                                onChange={this.props.handleChange( 'pub' )}
                            />
                        <label for="pub-0">0</label>
                    </p>
                    <p>
                        <input id="pub-1" type="radio" value="1"
                                checked={values.pub === "1"}
                                onChange={this.props.handleChange( 'pub' )}
                            />
                        <label for="pub-1">1</label>
                    </p>

                    <p>
                        <input id="pub-3" type="radio" value="3"
                                checked={values.pub === "3"}
                                onChange={this.props.handleChange( 'pub' )}
                            />
                        <label for="pub-3">3</label>
                    </p>

                    <p>
                        <input id="pub-5" type="radio" value="5"
                                checked={values.pub === "5"}
                                onChange={this.props.handleChange( 'pub' )}
                            />
                        <label for="pub-5">5</label>
                    </p>

                    <p>
                        <input id="pub-10" type="radio" value="10"
                                checked={values.pub === "10"}
                                onChange={this.props.handleChange( 'pub' )}
                            />
                        <label for="pub-10">10</label>
                    </p>

                    <p>
                        <input id="pub-15" type="radio" value="15"
                                checked={values.pub === "15"}
                                onChange={this.props.handleChange( 'pub' )}
                            />
                        <label for="pub-15">15</label>
                    </p>

                </div>

                <button onClick={this.back}>Back</button>
                <button onClick={this.saveAndContinue}>Siguiente </button>
            </form>
        )
    }
}

export default WeekPub;