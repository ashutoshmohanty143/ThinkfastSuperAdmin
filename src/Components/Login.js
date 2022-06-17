import React, { Component } from 'react'
import axios from 'axios';
import '../Common.css';
import Dashboard from './Dashboard';


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loginParams: {
        email:"",
        password:""
      },
      formErrors:{}
    };   
  };

  handleFormFieldsChange = (event) =>{
    let loginParamsNew = { ...this.state.loginParams };
    let val = event.target.value;
    loginParamsNew[event.target.name] = val;
    this.setState({
      loginParams: loginParamsNew
    });
  }

  formValidate(){
    let email = this.state.loginParams.email;
    let password = this.state.loginParams.password;
    let formErrors = {};
    let formIsValid = true;


    if(email === ""){
      formIsValid = false;
      formErrors['emailErr'] = "Email can't be blanked";
    }
    if(password === ""){
      formIsValid = false;
      formErrors['passwordErr'] = "Password can't be blanked";
    }
    
    this.setState({ formErrors: formErrors });    
    return formIsValid;
  }


  submitLoginForm = e => {
    e.preventDefault();
    let email = this.state.loginParams.email;
    let password = this.state.loginParams.password;
      if (this.formValidate()) {
        const apiUrl = 'http://localhost:4000/users';
        const loginData = { email, password };

        axios.get(apiUrl).then(response => {
          const resusername = response.data[0].username;
          const respassword = response.data[0].password;
          if (email == resusername && password == respassword) {
            sessionStorage.setItem("userToken", response.data[0].token);
            window.location.href = "/dashboard";
          } else {
            console.log('Login Error.....!');
          }
        })
      
    } else {
      return false;
    }
  }

  handlepassword(e) {
    let pt = document.getElementById('textboxPassword');
    let picon = document.getElementById('passIcon');
    if (e.target.className == 'bi-eye-slash') {
      pt.setAttribute('type', 'text');
      picon.classList.remove('bi-eye-slash')
      picon.classList.add('bi-eye')
    } else {
      pt.setAttribute('type', 'password');
      picon.classList.remove('bi-eye');
      picon.classList.add('bi-eye-slash');
    }

  }

  render() {
    const { emailErr, passwordErr } = this.state.formErrors;
    return (
      
      <>
        
        {sessionStorage.getItem('userToken') ?
          window.location.href = "/dashboard" :

          
          <div className="d-flex align-items-center min-h-100">

            <main id="content" role="main" className="main pt-0" style={{ paddingLeft: 0 }}>

              <div className="container-fluid px-3">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center min-vh-lg-100 position-relative bg-light px-0">

                    <div className="position-absolute top-0 start-0 end-0 mt-3 mx-3">
                      <div className="d-none d-lg-flex justify-content-between">
                        <a href="#">
                          <img className="w-100" src="./assets/svg/logos/logo.svg"
                            data-hs-theme-appearance="default" style={{ minWidth: 7 + 'rem', maxWidth: 7 + 'rem' }} />
                        </a>
                      </div>
                    </div>


                    <div style={{ maxWidth: 23 + 'rem' }}>
                      <div className="text-center mb-5">
                        <img className="img-fluid" src="./assets/svg/illustrations/oc-chatting.svg" style={{ width: '12rem' }} data-hs-theme-appearance="default" />
                      </div>

                      <div className="mb-5">
                        <h2 className="display-5">Build digital products with:</h2>
                      </div>


                      <ul className="list-checked list-checked-lg list-checked-primary list-py-2">
                        <li className="list-checked-item">
                          <span className="d-block fw-semi-bold mb-1">All-in-one tool</span>
                          Build, run, and scale your apps - end to end
                        </li>

                        <li className="list-checked-item">
                          <span className="d-block fw-semi-bold mb-1">Easily add &amp; manage your services</span>
                          It brings together your tasks, projects, timelines, files and more
                        </li>
                      </ul>


                      <div className="row justify-content-between mt-5 gx-3">
                        <div className="col">
                          <img className="img-fluid" src="./assets/svg/brands/gitlab-gray.svg" />
                        </div>


                        <div className="col">
                          <img className="img-fluid" src="./assets/svg/brands/fitbit-gray.svg" />
                        </div>


                        <div className="col">
                          <img className="img-fluid" src="./assets/svg/brands/flow-xo-gray.svg" />
                        </div>


                        <div className="col">
                          <img className="img-fluid" src="./assets/svg/brands/layar-gray.svg" />
                        </div>

                      </div>

                    </div>
                  </div>


                  <div className="col-lg-6 d-flex justify-content-center align-items-center min-vh-lg-100">
                    <div className="w-100 content-space-t-4 content-space-t-lg-2 content-space-b-1" style={{ maxWidth: '25rem' }}>

                      <form method='post' onSubmit={this.submitLoginForm}>
                        <div className="text-center">
                          <div className="mb-5">
                            <h1 className="display-5">Sign in</h1>
                            <p>Don't have an account yet? <a className="link" href="#">Sign up here</a></p>
                          </div>

                          <div className="d-grid mb-4">
                            <a className="btn btn-white btn-lg" href="#">
                              <span className="d-flex justify-content-center align-items-center">
                                <img className="avatar avatar-xss me-2" src="./assets/svg/brands/google-icon.svg" />
                                Sign in with Google
                              </span>
                            </a>
                          </div>

                          <span className="divider-center text-muted mb-4">OR</span>
                        </div>


                        <div className="mb-4 text-start">
                          <label className="form-label" htmlFor="textboxEmail">Your email</label>
                          <input 
                                  type="text" 
                                  className={`form-control form-control-lg ${emailErr ? 'errorBorder' : ''}`}
                                  name="email" 
                                  id="textboxEmail" 
                                  onChange={this.handleFormFieldsChange}
                                  tabIndex="1" 
                                  placeholder="email@address.com" 
                          />
                          {/* <span id="errorEmail" className="errorMsg d-none">Please enter your email address.</span> */}
                          {emailErr && <span className='errorMsg'>{emailErr}</span>}

                        </div>


                        <div className="mb-4 text-start">
                          <label className="form-label w-100" htmlFor="textboxPassword" tabIndex="0">
                            <span className="d-flex justify-content-between align-items-center">
                              <span>Password</span>
                              <a className="form-label-link mb-0" href="#">
                                Forgot Password?</a>
                            </span>
                          </label>

                          <div className="input-group input-group-merge">
                            <input  type="password" 
                                    className={`form-control form-control-lg ${passwordErr ? 'errorBorder' : ''}`} 
                                    onChange={this.handleFormFieldsChange}
                                    name="password" 
                                    id="textboxPassword" 
                                    placeholder="8+ characters required" 
                            />
                            <a className="input-group-append input-group-text">
                              <i className="bi-eye-slash" onClick={this.handlepassword} id="passIcon"></i>
                            </a>
                          </div>
                          {/* <span id="errorPassword" className="errorMsg d-none">Please enter password.</span> */}
                          {passwordErr && <span className='errorMsg'>{passwordErr}</span>}
                        </div>



                        <div className="form-check mb-4 text-start">
                          <input className="form-check-input" type="checkbox" value="" id="termsCheckbox" />
                          <label className="form-check-label">
                            Remember me
                          </label>
                        </div>


                        <div className="d-grid">
                          <button type="submit" className="btn btn-primary btn-lg">Sign in</button>
                        </div>

                      </form>

                    </div>
                  </div>

                </div>

              </div>

            </main>
          </div>}
      </>
    )
  }
}

export default Login;
