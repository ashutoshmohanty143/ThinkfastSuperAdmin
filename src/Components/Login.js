import React, { Component } from 'react'
import axios from 'axios';
import { WithRouter } from './Common/WithRouter';
import '../Common.css';
import swal from 'sweetalert';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      passShown:false ,
      fields:{},
      formErrors:{},
    };   
  };

  handleFormFieldsChange = (event) =>{
    let fields = this.state.fields;
    fields[event.target.name] = event.target.value;
    this.setState({ fields });
  }

  formValidate(){
    let fields = this.state.fields;
    let formErrors = {};
    let formIsValid = true;

    if(!fields['email']){
      formIsValid = false;
      formErrors['emailErr'] = "Email can't be blanked";
    }

    if(!fields['password']){
      formIsValid = false;
      formErrors['passwordErr'] = "Password can't be blanked";
    }
    
    this.setState({ formErrors: formErrors });    
    return formIsValid;
  }


  submitLoginForm = e => {
    e.preventDefault();
    
    if (this.formValidate()) {
      let fields = this.state.fields;
      //const apiUrl = 'http://localhost:5000/api/auth/super-admin-login';
      const apiUrl = 'https://thinkfast.in:5000/api/auth/super-admin-login';
      const formData = {
        username: fields["email"],
        password: fields["password"]
      };
      axios.post(apiUrl, formData).then(response => {
        console.log(response);
        
        // sessionStorage.setItem("userData", JSON.stringify(response.data.data));
        // if (sessionStorage.getItem('userToken')) {
        //     this.props.navigate('/dashboard');
        // } else {
        //   console.log('error');
        // }

        
        console.log(response.status);
        console.log(response.data.status);
        if(response.status === 200 && response.data.status === "fail") {
          console.log(111111)
          swal("Opppsss!", "Invalid username or password !!!", "error").then(
            (value) => {
              if (value) {
                this.props.navigate("/login");
              }
            }
          );
        } else if (response.status === 200 && response.data.status === "fail" && response.data.message === "Invalid Password"
        ) {
          swal("Opppsss!", "Wrong password !!!", "error").then((value) => {
            if (value) {
              this.props.navigate("/login");
            }
          });
        } else if (response.status === 200 && response.data.status === "success" && response.data.message === ""
        ) {
          sessionStorage.setItem("userToken", response.data.data.accessToken);
          sessionStorage.setItem("userName", response.data.data.username);
          
          this.props.navigate("/dashboard");
        }



      }).catch(error => {
        if(error.code === 'ERR_NETWORK' && error.name === 'AxiosError') {
          swal("Something went wrong. Please try again later.", {
            icon: "error",
          }).then((value) => {
            if (value) {
              console.log('Network Error', error);
            }
          });
        }
      })          
    } else {
      return false;
    }
  }

  handlepassword = e => {
    e.preventDefault();   
    this.setState({ passShown : !this.state.passShown });
  }

  render() {
    const { emailErr, passwordErr } = this.state.formErrors;
    return (
      <>
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
                                  onChange={this.handleFormFieldsChange}
                                  tabIndex="1" 
                                  placeholder="email@address.com" 
                          />
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
                            <input  type={ this.state.passShown ? "text" : "password" } 
                                    className={`form-control form-control-lg ${passwordErr ? 'errorBorder' : ''}`} 
                                    onChange={this.handleFormFieldsChange}
                                    name="password" 
                                    placeholder="8+ characters required" 
                            />
                            <a className="input-group-append input-group-text">
                              <i className={ this.state.passShown ? "bi-eye" : "bi-eye-slash" } 
                                    onClick={this.handlepassword}></i>
                            </a>
                          </div>
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
          </div>
      </>
    )
  }
}

export default WithRouter(Login);
