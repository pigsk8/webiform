// UserDetails.jsx
import React, { Component } from 'react';
import fbicon from '../images/FacebookIcon.png';
import igicon from '../images/InstagramIcon.png';
import twicon from '../images/TwitterIcon.png';
import lkicon from '../images/LinkeninIcon.png';
import yticon from '../images/YoutubeIcon.png';
import oticon from '../images/OtrosIcon.png';
import './SocialNetwork.css';

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
            <form className="FormInside FormSocialNetwork">
                {/* <h2>Redes</h2> */}
                <div className="ContainerSocial">
                    <h2>Redes Sociales</h2>
                    <section className="SocialItems">
                        <div className="GroupItems FirstGroup">
                            <div className="ItemSocial">
                                <div>
                                    <input
                                        id="facebook"
                                        type="checkbox"
                                        checked={values.facebook}
                                        onChange={this.props.handleChange( 'facebook' )} />
                                    <label htmlFor="facebook" className="label-container pointer">
                                        <img src={fbicon} alt=""/>
                                        <div>
                                            <span className="name">FACEBOOK</span>
                                            <div className="button-check"></div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="ItemSocial">
                                <div>
                                    <input
                                        id="instagram"
                                        type="checkbox"
                                        checked={values.instagram}
                                        onChange={this.props.handleChange( 'instagram' )} />
                                    <label htmlFor="instagram" className="label-container pointer">
                                        <img src={igicon} alt=""/>
                                        <div>
                                            <span className="name">INSTAGRAM</span>
                                            <div className="button-check"></div>
                                        </div>
                                    </label>
                                </div>
                            </div>              
                            <div className="ItemSocial">
                                <div>
                                    <input
                                        id="twitter"
                                        type="checkbox"
                                        checked={values.twitter}
                                        onChange={this.props.handleChange( 'twitter' )} />
                                    <label htmlFor="twitter" className="label-container pointer">
                                        <img src={twicon} alt=""/>
                                        <div>
                                            <span className="name">Twitter</span>
                                            <div className="button-check"></div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="GroupItems SecondGroup">
                            <div className="ItemSocial">
                                <div>
                                    <input
                                        id="youtube"
                                        type="checkbox"
                                        checked={values.youtube}
                                        onChange={this.props.handleChange( 'youtube' )} />
                                    <label htmlFor="youtube" className="label-container pointer">
                                        <img src={yticon} alt=""/>
                                        <div>
                                            <span className="name">Youtube</span>
                                            <div className="button-check"></div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="ItemSocial">
                                <div>
                                    <input
                                        id="linkedin"
                                        type="checkbox"
                                        checked={values.linkedin}
                                        onChange={this.props.handleChange( 'linkedin' )} />
                                    <label htmlFor="linkedin" className="label-container pointer">
                                        <img src={lkicon} alt=""/>
                                        <div>
                                            <span className="name">LinkedIn</span>
                                            <div className="button-check"></div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="ItemSocial">
                                <div>
                                    <input
                                        id="others"
                                        type="checkbox"
                                        checked={values.others}
                                        onChange={this.props.handleChange( 'others' )} />
                                    <label htmlFor="others" className="label-container pointer">
                                        <img src={oticon} alt=""/>
                                        <div>
                                            <span className="name">Otros</span>
                                            <div className="button-check"></div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <button onClick={this.back}>Back</button>
                <button onClick={this.saveAndContinue}>Siguiente </button>
            </form>
        )
    }
}

export default SocialNetwork;