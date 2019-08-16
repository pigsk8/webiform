// MainForm.jsx
import React, { Component } from 'react';
import ClientType from './ClientType';
import SocialNetwork from './SocialNetwork';
import WeekPub from './WeekPub';
import Followers from './Followers';
import PersonalAttention from './PersonalAttention';
import PersonalDesign from './PersonalDesign';
import PayAds from './PayAds';
import UserDetails from './UserDetails';
import Finish from './Finish';

class MainForm extends Component {
    state = {
        step: 1,
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
            step: step + 1
        } )
    }

    prevStep = () => {
        const { step } = this.state
        this.setState( {
            step: step - 1
        } )
    }

    submit = () => {
        const { step } = this.state
        this.setState( {
            step: step + 1
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
        // const { type, instagram, facebook, twitter, youtube, linkedin, others, pub, followers, chat, dm, whatsapp, design, ads, name, phone, company, email, comments } = this.state;
        // const values = { type, instagram, facebook, twitter, youtube, linkedin, others, pub, followers, chat, dm, whatsapp, design, ads, name, phone, company, email, comments };
        const values = this.state;
        switch ( step ) {
            case 1:
                return <ClientType
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
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
            case 9:
                return <Finish
                    prevStep={this.prevStep}
                    values={values}
                />
        }
    }
}

export default MainForm;