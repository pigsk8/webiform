import React, { Component } from 'react';

class UserDetails extends Component{

    back = ( e ) => {
        e.preventDefault();
        this.props.prevStep();
    }

    finish = (e) => {
        e.preventDefault();
        this.props.submit();        
    }

    render(){
        const { values } = this.props;
        return(
            <form >
                <h2>Tus Datos</h2>
                <div className="UserDetail">


                    <div>
                        <input
                        placeholder='Nombre'
                        onChange={this.props.handleChange('name')}
                        defaultValue={values.name}
                        />

                        <input
                        placeholder='Telefono'
                        onChange={this.props.handleChange('phone')}
                        defaultValue={values.phone}
                        />
                    </div>
                    <div>
                        <input
                        placeholder='Empresa'
                        onChange={this.props.handleChange('company')}
                        defaultValue={values.company}
                        />

                        <input
                        type='email'
                        placeholder='Email'
                        onChange={this.props.handleChange('email')}
                        defaultValue={values.email}
                        />
                    </div>
                    <div>
                        <textarea
                        placeholder='Comentarios'
                        onChange={this.props.handleChange('comments')}
                        defaultValue={values.comments}
                        >
                        </textarea>
                    </div>
                </div>
                <div className="btn-container">
                    <button onClick={this.back} className="btn-both btn-prev">Anterior</button>
                    <button onClick={this.finish} className="btn-both btn-next">Enviar</button>
                </div>
            </form>
        )
    }
}

export default UserDetails;