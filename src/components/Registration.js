import React from 'react'
import '../styles/login.css';

export default class Registration extends React.Component {
    inputElem;
    inputElem1;
    inputElem2;
    selectElement;

    register = () => {
        this.props.registerUser(
            this.inputElem.value,
            this.inputElem1.value,
            this.inputElem2.value,
            this.selectElement.value);
        this.props.history.push('/login')
    };

    render() {
        return (
            <div className="container">
                <div className="cardRegistration card-container">
                    <form className="form-signin form-inline row m-2">
                        <label htmlFor="username form-label" className="col-3 ">Enter Username:</label>
                        <input className="col-8"
                               id="username"
                               onChange={() => this.props.textChanged('username', this.inputElem.value)}
                               ref={node => this.inputElem = node}/>
                    </form>
                    <form className="form-signin form-inline m-2">
                        <label htmlFor="password" className="col-3 ">Enter Password:</label>

                        <input className="col-8"
                               id="password"
                               type="password"
                               onChange={() => this.props.textChanged('password', this.inputElem1.value)}
                               ref={node => this.inputElem1 = node}/>
                    </form>
                    <form className="form-signin form-inline m-2">
                        <label htmlFor="verifyPassword" className="col-3 ">Verify Password:</label>

                        <input className="col-8"
                               id="verifyPassword"
                               type="password"
                               onChange={() => this.props.textChanged('verifyPassword', this.inputElem2.value)}
                               ref={node => this.inputElem2 = node}/>
                    </form>
                    <form className="form-signin form-inline m-2">
                        <label className="col-3 ">Enter User Type:</label>

                        <select
                            onChange={() => this.props.selectUserType(this.selectElement.value)}
                            ref={node => this.selectElement = node}>
                            <option>Fan</option>
                            <option>Actor</option>
                            <option>Critic</option>
                        </select>
                    </form>

                    <form className="form-signin form-inline m-2">
                        <button type='btn' onClick={() => {
                            this.register()
                        }}
                                className='btn btn-primary'>Register
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
