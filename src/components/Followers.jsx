// UserDetails.jsx
import React, { Component } from 'react';
import './WeekPub.css';
import imgWeek from '../images/SeguidoresMensuales.png';
import fno from '../images/BotonN.png';
import f200 from '../images/Boton200.png';
import f500 from '../images/Boton500.png';
import f800 from '../images/Boton800.png';
import f1000 from '../images/Boton1000.png';

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
            <form className="FormInside FormWeekPub">

                <section className="WeekPub">
                    <div>
                        <h2>Seguidores <br/> Mensuales</h2>

                        <img src={imgWeek} alt="" className="imgPub"/>

                    </div>

                <div className="items-pub">
                    <div className="first-group-pub">
                        <div>    
                            <input id="follow-no" type="radio" value="NO"
                                checked={values.followers === "NO"}
                                onChange={this.props.handleChange( 'followers' )}
                            />
                            <label htmlFor="follow-no" className="label-container pointer">
                                <img src={fno} alt="" />
                            </label>
                        </div>
                        <div>
                            <input id="follow-200" type="radio" value="200"
                                checked={values.followers === "200"}
                                onChange={this.props.handleChange( 'followers' )} />
                            <label htmlFor="follow-200" className="label-container pointer">
                                <img src={f200} alt="" />
                            </label>
                        </div>
                        <div>
                            <input id="follow-500" type="radio" value="500"
                                checked={values.followers === "500"}
                                onChange={this.props.handleChange( 'followers' )} />
                            <label htmlFor="follow-500" className="label-container pointer">
                                <img src={f500} alt="" />
                            </label>
                        </div>

                    </div>

                    <div className="second-group-pub">
                        <div>
                            <input id="follow-800" type="radio" value="800"
                                checked={values.followers === "800"}
                                onChange={this.props.handleChange( 'followers' )} />
                            <label htmlFor="follow-800" className="label-container pointer">
                                <img src={f800} alt="" />
                            </label>
                        </div>
                        <div>
                            <input id="follow-1000" type="radio" value="1000"
                                checked={values.followers === "1000"}
                                onChange={this.props.handleChange( 'followers' )} />
                            <label htmlFor="follow-1000" className="label-container pointer">
                                <img src={f1000} alt="" />
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

export default Followers;