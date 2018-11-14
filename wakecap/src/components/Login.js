import React, { Component } from 'react';
import Form, { Field, Validator, FormFooter } from '@atlaskit/form';
import isEmail from 'validator/lib/isEmail';
import Button from '@atlaskit/button';
import FieldText from '@atlaskit/field-text';
import Logo from '../content/wakecap.png';
import FormSection from '@atlaskit/form/dist/cjs/FormSection';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.formRef = null;
    }

    onSubmitHandler = () => {
        if (!this.formRef.validate().isInvalid) {
            if( localStorage.getItem('email') === this.formRef.getFieldByName('email').value &&
            localStorage.getItem('password') === this.formRef.getFieldByName('password').value){
                localStorage.setItem('token','valid');
                this.formRef.submit();
            }
        }
      };

    render() {
        return(
            <div className="login-container">
                <div className="company-login-banner">
                    <div><img className="company-login-logo-png" alt="Wake-Cap-Logo" src={Logo} /></div>
                    <div className="login-info">Log in to your account</div>
                </div>
                <div className="login-form">
                    <Form name="user-login"
                        onSubmit={this.onSubmitHandler}
                        action="/"
                        method = 'GET'
                        ref={form =>{
                            this.formRef = form;
                        }}>
                        <FormSection>
                            <Field
                                label="Username"
                                isRequired
                                validateOnChange
                                validators={[
                                    <Validator func={isEmail}
                                    invalid="Try with a valid email"
                                    valid="Valid Email"/>
                                ]}
                            >
                                <FieldText
                                    name="email"
                                    id="email"
                                    placeholder="test@test.com"
                                    shouldFitContainer
                                />
                            </Field>

                            <Field
                                label="Password"
                                isRequired
                            >
                                <FieldText
                                    required
                                    value=""
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="********"
                                    shouldFitContainer
                                />
                            </Field>
                        </FormSection>
                        <FormFooter actions={{}}>
                            <Button type="submit" appearance="primary" className="continue" shouldFitContainer>
                                Continue
                            </Button>
                        </FormFooter>
                    </Form>
                </div>
                <div className="login-alternative">Can't Login In?</div>
            </div>
        );
    }
}