import React from 'react'

import HeaderEN from '../components/index_header'
import Footer from '../components/footer'
import SEO from '../components/seo'
import ContactForm from '../components/contact_form'
import { Col, Row } from 'react-bootstrap'

import '../components/styles.css'


const ConnectPage = () => (
  <div>
    <SEO 
      title='Connect with The Circuit' 
      keywords={['Cook County', 'Circuit Court', 'Data Journalism']} 
      image='https://circuitchicago.s3.us-east-2.amazonaws.com/OG-Datacard3.jpg'
    />
    <HeaderEN />
    <main className='connect'>
        <section className='connect-header'>
            <h2 className='label'>Connect with the Circuit</h2>
            <p>For the first time ever, we have access to more than two decades of Cook County court data.</p>
            <br/>
            <p>But numbers aren't the story. People are.</p>
        </section>
        <div style={{ marginTop: '3em'}}>
            <img src={require('../images/courts-contact.png')} />
        </div>
        <section className='connect-details'>
            <p>Have you had an experience with the Cook County court system that you’d like to share? We’d like to hear from you.</p>
            <div>
                <address>
                    <ul>
                        <li><strong>Text or call:</strong> <a href='tel:+7732327188'>(773) 232-7188</a>.</li>
                        <li><strong>Email:</strong> <a href='mailto:contact@thecircuit.cc'>contact@thecircuit.cc</a></li>
                        <li><strong>Mail:</strong> Olivia Obineme <br/>223 W. Jackson Blvd., #300 <br/>Chicago, IL 60606</li>
                    </ul>
                </address>
            </div>
        </section>
        <section className='connect-form'>
            <ContactForm />
        </section>

        <section className='connect-call-to-action'>
            <div>
                <h3>Join the conversation on <a href='https://www.facebook.com/groups/thecircuit.cc'>Facebook.</a></h3>
                <p>Welcome to The Circuit’s Facebook community! This group is a space for those who are interested in the Cook County Circuit Court system and want to discuss issues related to our justice system. 
                It’s a space for people to share their experiences, ask questions, educate one another and connect about issues of justice. <a href='https://www.facebook.com/groups/thecircuit.cc'>Join the community.</a></p>
            </div>

            <div>
                <h3>Stay updated.</h3>
                <p>The Circuit engagement team works to keep the project’s data and in-depth reporting  transparent and accessible. It’s important that those most affected by the Cook County court system, especially Black and Latinx people, can have access to and participate in this work. <a href='https://forms.gle/GqV6qFqVAUvv1F3j9'>Click on this link</a> to stay updated on events and announcements for The Circuit.</p>
            </div>
            
            <div>
                <h3>Support The Circuit.</h3>
                <p>You can support the project by making a tax-deductible donation to its fiscal sponsor, Injustice Watch (EIN: 47-4537172), at <a href='http://www.injusticewatch.org/donate'>InjusticeWatch.org/donate</a>. Please indicate in the comment section that your donation is for The Circuit.</p>
            </div>
            <div>
                <h3>Support the partners.</h3>
                <p>You also can support the nonprofit, nonpartisan journalism organizations directly by subscribing to their work, following them on social media or making a tax-deductible donation.</p>
            </div>
        </section>
        <section className='connect-partners'>
            <Row>
                <Col sm={12} md={6} style={{ marginTop: '4em' }}>
                    <h4><a href='https://www.bettergov.org/'>Better Government Association</a></h4>
                    <p>The Better Government Association is a non-partisan, nonprofit news organization and civic advocate working for transparency, efficiency and accountability in government in Chicago and across Illinois.</p>
                    <Row>
                        <Col>
                            <a href='https://www.facebook.com/bettergov'>
                                <img src={require('../images/facebook-purple.png')} 
                                    alt='Better Government Association Facebook'/>
                            </a>
                            <a href='https://twitter.com/bettergov'>
                                <img src={require('../images/twitter-purple.png')}
                                    alt='Better Government Association Twitter'/>
                            </a>
                            <a href='https://www.instagram.com/bettergov_/'>
                                <img src={require('../images/instagram-purple.png')}
                                    alt='Better Government Association Instagram' />
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href='https://www.bettergov.org/sign-up-for-e-alerts/'>
                                <button>SUBSCRIBE</button>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href='https://donate.bettergov.org/'>
                                <button>DONATE</button>
                            </a>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12} md={6} style={{ marginTop: '4em' }}>
                    <h4><a href='https://www.injusticewatch.org/'>Injustice Watch</a></h4>
                    <p>Injustice Watch is a non-partisan, not-for-profit journalism organization that conducts in-depth research exposing institutional failures that obstruct justice and equality.</p>
                    <Row>
                        <Col>
                            <a href='https://www.facebook.com/injusticewatch'>
                                <img src={require('../images/facebook-purple.png')} 
                                    alt='Injustice Watch Facebook'/>
                            </a>
                            <a href='https://twitter.com/injusticewatch'>
                                <img src={require('../images/twitter-purple.png')}
                                    alt='Injustice Watch Twitter'/>
                            </a>
                            <a href='https://www.instagram.com/_injusticewatch/'>
                                <img src={require('../images/instagram-purple.png')}
                                    alt='Injustice Watch Instagram' />
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href='https://www.injusticewatch.org/subscribe/'>
                                <button>SUBSCRIBE</button>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href='https://www.injusticewatch.org/donate/'>
                                <button>DONATE</button>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </section>
    </main>
    <Footer />
  </div>
)

export default ConnectPage
