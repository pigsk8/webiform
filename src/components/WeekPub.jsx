// UserDetails.jsx
import React, { Component } from 'react';
import './WeekPub.css';
import imgWeek from '../images/Publicaciones.png';
import b1 from '../images/Boton1.png';
import b3 from '../images/Boton3.png';
import b5 from '../images/Boton5.png';
import b10 from '../images/Boton10.png';
import b15 from '../images/Boton15.png';
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
            <form className="FormInside FormWeekPub">

                <section className="WeekPub">
                    <div>
                        <h2>Publicaciones <br/> Semanales</h2>

                        <img src={imgWeek} alt="" className="imgPub"/>

                    </div>

                    <div className="items-pub">
                        {/* <div>
                            <input id="pub-0" type="radio" value="0"
                                    checked={values.pub === "0"}
                                    onChange={this.props.handleChange( 'pub' )}
                                />
                            <label htmlFor="pub-0" className="label-container pointer">
                                <span className="underline">0</span>
                                <img src={b0} alt="" />
                            </label>
                        </div> */}
                        <div className="first-group-pub">
                            <div>
                                <input id="pub-1" type="radio" value="1"
                                        checked={values.pub === "1"}
                                        onChange={this.props.handleChange( 'pub' )}
                                    />
                                <label htmlFor="pub-1" className="label-container pointer">
                                    <img src={b1} alt="" />
                                </label>
                            </div>

                            <div>
                                <input id="pub-3" type="radio" value="3"
                                        checked={values.pub === "3"}
                                        onChange={this.props.handleChange( 'pub' )}
                                    />
                                <label htmlFor="pub-3" className="label-container pointer">
                                    <img src={b3} alt="" />
                                </label>
                            </div>

                            <div>
                                <input id="pub-5" type="radio" value="5"
                                        checked={values.pub === "5"}
                                        onChange={this.props.handleChange( 'pub' )}
                                    />
                                <label htmlFor="pub-5" className="label-container pointer">
                                    <img src={b5} alt="" />
                                </label>
                            </div>
                        </div>

                        <div className="second-group-pub">
                            <div>
                                <input id="pub-10" type="radio" value="10"
                                        checked={values.pub === "10"}
                                        onChange={this.props.handleChange( 'pub' )}
                                    />                        
                                <label htmlFor="pub-10" className="label-container pointer">
                                    <img src={b10} alt="" />
                                </label>
                            </div>

                            <div>
                                <input id="pub-15" type="radio" value="15"
                                        checked={values.pub === "15"}
                                        onChange={this.props.handleChange( 'pub' )}
                                    />
                                <label htmlFor="pub-15" className="label-container pointer">
                                    <img src={b15} alt="" />
                                </label>
                            </div>
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

export default WeekPub;