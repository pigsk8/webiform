import React, { Component } from 'react';
import './UserDetail.css';
class UserDetails extends Component{

    back = ( e ) => {
        e.preventDefault();
        this.props.prevStep();
    }

    finish = (e) => {

        if (this.props.values.btndisable) {
            return;
        }

        e.preventDefault();
        const warn = document.getElementById('warn-msg');
        
        if (this.props.values.name === ''){
            warn.innerHTML = '<p>El nombre es obligatorio</p>';
            return;
        }
        if (this.props.values.email === ''){
            warn.innerHTML = '<p>El Email es obligatorio</p>';
            return;
        }
        
        this.props.submit();        
    }

    render(){
        const { values } = this.props;
        return(
            <form className="FormInside FormUser">
                <h2>Tus Datos</h2>
                <div className="UserDetail">

                    <div className="input-container">
                        <input
                        placeholder='Nombre*'
                        onChange={this.props.handleChange('name')}
                        defaultValue={values.name}
                        />

                        <input
                        placeholder='Telefono'
                        onChange={this.props.handleChange('phone')}
                        defaultValue={values.phone}
                        />
                    </div>
                    <div className="input-container">
                        <input
                        placeholder='Empresa'
                        onChange={this.props.handleChange('company')}
                        defaultValue={values.company}
                        />

                        <input
                        type='email'
                        placeholder='Email*'
                        onChange={this.props.handleChange('email')}
                        defaultValue={values.email}
                        />
                    </div>
                    <div className="input-container">
                        <textarea
                        placeholder='Comentarios'
                        onChange={this.props.handleChange('comments')}
                        defaultValue={values.comments}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="warning">
                    <div id="warn-msg">

                    </div>
                </div>
                <div className="btn-container">
                    <button onClick={this.back} className="btn-both btn-prev">Anterior</button>
                    <button onClick={this.finish} className="btn-both btn-next" disabled={values.btndisable}>{values.btndisable ? 'Enviando...' : 'Enviar'}</button>
                </div>
            </form>
        )
    }
}

export default UserDetails;