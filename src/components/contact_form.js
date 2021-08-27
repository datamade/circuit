import React from 'react'
import axios from 'axios'
import * as qs from 'query-string'
import { Col, Row } from 'react-bootstrap'

import './bootstrap-form-styles.css'

// async form submission based on approach at https://cobwwweb.com/how-to-use-netlify-forms-with-gatsby
class ContactForm extends React.Component {
  constructor (props) {
    super(props)
    this.domRef = React.createRef()
    this.state = {
      'feedbackMsg': null,
      'form-name': 'Contact Form',
      'open_input': '',
      'name': '',
      'email': '',
      'phone_number': '',
      'zip_code': '',
      'followup': true
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    event.preventDefault()

    const axiosOptions = {
      url: typeof window !== 'undefined' ? window.location.pathname : '',
      method: 'post',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: qs.stringify(this.state)
    }

    axios(axiosOptions)
      .then(response => {
        this.setState({
          feedbackMsg: 'Successfully submitted! Thank you for your feedback.',
        })
        this.domRef.current.reset()
      })
      .catch(err =>
        this.setState({
          feedbackMsg: 'Form could not be submitted. If this problem persists, please contact info@datamade.us',
        })
      )
  }

  render () {
    return (
      <Row>
          <Col>
            <div className='card'>
                <div className='card-body'>
                    <h2 style={{paddingTop: 0}}>
                        Help inform our reporting
                    </h2>

                    {this.state.feedbackMsg &&
                        <p style={{color: 'var(--primary-color)', fontWeight: 900}}>
                        {this.state.feedbackMsg}
                        </p>
                    }

                    <form ref={this.domRef} name='Contact Form' method='POST' data-netlify='true' onSubmit={event => this.handleSubmit(event)}>
                        <input type='hidden' name='contact-form' value='Contact Form' />

                        <Row>
                        <Col xs={12} md={6}>
                            <div className='form-group'>
                            <label for='open_input'>
                                Have you ever had an interaction with the Cook County court system you want us to investigate? We want to hear from you.
                            </label>
                            <textarea
                                rows='13'
                                name='open_input'
                                className='form-control'
                                required
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            <small style={{color: 'red', float: 'right'}}>
                                Required field
                            </small>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className='form-group'>
                            <label for='name'>
                                What is your name?
                            </label>
                            <input
                                type='text'
                                name='name'
                                className='form-control'
                                placeholder='Enter name'
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            </div>

                            <div className='form-group'>
                            <label for='email'>
                                What is your email?
                            </label>
                            <input
                                type='email'
                                name='email'
                                className='form-control'
                                placeholder='Enter email'
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            </div>

                            <div className='form-group'>
                            <label for='phone_number'>
                                What is your phone number?
                            </label>
                            <input
                                type='tel'
                                name='phone_number'
                                className='form-control'
                                placeholder='Enter phone number'
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            </div>

                            <div className='form-group'>
                            <label for='zip_code'>
                                What is your zip code?
                            </label>
                            <input
                                type='text'
                                name='zip_code'
                                className='form-control'
                                placeholder='Enter zip code'
                                value={this.state.value}
                                onChange={this.handleChange}
                            />
                            </div>

                            <div className='form-check'>
                            <label for='followup'>
                                Can one of our reporters contact you to follow up? If so, be sure to include your name and contact information above. We promise to keep your information confidential.
                            </label>
                            <br />
                            <label className='form-check-label' for='followup'>
                                <div>
                                  <input
                                  name='followup'
                                  type='checkbox'
                                  className='form-check-input'
                                  checked={this.state.followup}
                                  onChange={this.handleChange}
                                  />
                                  Yes
                                </div>
                            </label>
                            </div>

                            <button type='submit' style={{float: 'right', marginTop: '1rem'}}>
                                Submit
                            </button>
                        </Col>
                        </Row>
                    </form>
                </div>
            </div>
          </Col>
      </Row>
    )
  }
}

export default ContactForm
