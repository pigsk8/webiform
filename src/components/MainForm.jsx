// MainForm.jsx
import React, { Component } from 'react';
import axios from 'axios';

import ClientType from './ClientType';
import SocialNetwork from './SocialNetwork';
import WeekPub from './WeekPub';
import Followers from './Followers';
import PersonalAttention from './PersonalAttention';
import PersonalDesign from './PersonalDesign';
import PayAds from './PayAds';
import UserDetails from './UserDetails';
class MainForm extends Component {
    state = {
        step: 1,
        btndisable: false,
        type: 'persona',
        instagram: false,
        facebook: false,
        twitter: false,
        youtube: false,
        linkedin: false,
        others: false,
        pub: '0',
        followers: 'NO',
        chat: false,
        dm: false,
        whatsapp: false,
        design: 'SI',
        ads: 'SI',
        name: '',
        phone: '',
        company: '',
        email: '',
        comments: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState( {
            step: step + 1,
            direction: 'next'
        } )
    }

    prevStep = () => {
        const { step } = this.state
        this.setState( {
            step: step - 1,
            direction: 'prev'
        } )
    }

    submit = () => {
        const warn = document.getElementById( 'warn-msg' );
        warn.innerHTML = '';

        this.setState( { btndisable: true } );

        let social_network = [];
        if ( this.state.instagram ) social_network.push( 'instagram' );
        if ( this.state.facebook ) social_network.push( 'facebook' );
        if ( this.state.twitter ) social_network.push( 'twitter' );
        if ( this.state.youtube ) social_network.push( 'youtube' );
        if ( this.state.linkedin ) social_network.push( 'linkedin' );
        if ( this.state.others ) social_network.push( 'otros' );

        const social_network_string = social_network.join(",");

        let contact_messages = [];
        if ( this.state.chat ) contact_messages.push( 'chat' );
        if ( this.state.dm ) contact_messages.push( 'dm' );
        if ( this.state.whatsapp ) contact_messages.push( 'whatsapp' );

        const contact_messages_string = contact_messages.join(",");

        const dataSend = {
            type: this.state.type,
            networks: social_network_string,
            publish: this.state.pub,
            followers: this.state.followers,
            contact: contact_messages_string,
            design: this.state.design,
            ads: this.state.ads,
            name: this.state.name,
            phone: this.state.phone,
            company: this.state.company,
            email: this.state.email,
            comments: this.state.comments
        }

        const headers = {
            'Content-Type': 'application/json',
        }
        
        axios.post( 'https://webinfinitech.com/wp-json/webinfinitech/form', dataSend, {
            headers: headers
        } )
            .then( res => {
                if ( res.status === 200 ) {
                    window.location.replace("https://webinfinitech.com/");
                } else {
                    this.setState( { btndisable: false } );
                    warn.innerHTML = '<p>Hubo un error al enviar los datos, prueba de nuevo o actualiza la pagina</p>';
                }
            } )
            .catch( error => {
                this.setState( { btndisable: false } );
                warn.innerHTML = '<p>Hubo un error al enviar los datos, prueba de nuevo o actualiza la pagina</p>';
            } )
    }

    handleChange = input => event => {

        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        this.setState( {
            [input]: value
        } );

        // this.setState( { [input]: event.target.value } )
        // console.log(this.state.step)
    }

    render() {
        const { step } = this.state;
        // const { type, instagram, facebook, twitter, youtube, linkedin, otros, pub, followers, chat, dm, whatsapp, design, ads, name, phone, company, email, comments } = this.state;
        // const values = { type, instagram, facebook, twitter, youtube, linkedin, otros, pub, followers, chat, dm, whatsapp, design, ads, name, phone, company, email, comments };
        const values = this.state;

        switch ( step ) {
            case 1:
                return <ClientType
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    hableInputs={this.handleInputs}
                />
            case 2:
                return <SocialNetwork
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 3:
                return <WeekPub
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 4:
                return <Followers
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 5:
                return <PersonalAttention
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 6:
                return <PersonalDesign
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 7:
                return <PayAds
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                />
            case 8:
                return <UserDetails
                    prevStep={this.prevStep}
                    submit={this.submit}
                    handleChange={this.handleChange}
                    values={values}
                />
            default:
                break;
        }
    }
}

export default MainForm;