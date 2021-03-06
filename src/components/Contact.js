import React from 'react'
import { Link } from 'react-router-dom'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPaperPlane, faSignature } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import me from '../styles/Baltasar.png'


const Contact = () => {



  return (
    <section className='hero is-fullheight-with-navbar is-link'>
      <div className='hero-body'>
        <div className='container is-fullhd'>
          <div className='section title has-text-primary is-family-code'>
            Let's work together!
          </div>
          <div className='columns'>
            <div className='column is-5 is-mobile'>
              <figure className='image is-4by4  is-centered'>
                <img src={me} className='is-rounded' />
              </figure>
            </div>
            <div className='column'>
              <div className='columns is-mobile '>
                <div className='column has-text-centered '>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='http://www.linkedin.com/in/baltasar-romero'
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      color='#f05454'
                      size='4x'
                    />
                  </a>
                </div>
                <div className='column has-text-centered'>
                  <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://github.com/Baromeg/'
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      color='#f05454'
                      size='4x'
                    />
                  </a>
                </div>
              </div>
              <form action='https://formspree.io/f/mvovdgkl' method='POST'>
                <div className='field'>
                  <label className='label has-text-primary	'>Your Name</label>
                  <div className='control has-icons-left'>
                    <input
                      className='input'
                      type='text'
                      placeholder='Your Name'
                      name='name'
                    />
                    <span className='icon is-small is-left'>
                      <FontAwesomeIcon
                        icon={faSignature}
                        color='#f05454'
                        size='1x'
                      />
                    </span>
                  </div>
                </div>

                <div className='field'>
                  <label className='label has-text-primary'>Your Email</label>
                  <div className='control has-icons-left'>
                    <input
                      className='input '
                      type='email'
                      placeholder='Your email'
                      name='_replyto'
                    />
                    <span className='icon is-small is-left'>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        color='#f05454'
                        size='1x'
                      />
                    </span>
                  </div>
                </div>

                <div className='field'>
                  <label className='label has-text-primary'>Message</label>
                  <div className='control has-icons-left'>
                    <textarea
                      className='textarea'
                      placeholder='Write your message'
                      name='text'
                    ></textarea>
                    {/* <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faComments} color='#f05454' size='1x' />
                    </span> */}
                  </div>
                </div>

                <div className='field is-grouped'>
                  <div className='control'>
                    <button
                      className='button is-large is-info has-text-weight-semibold has-text-link	'
                      value='Send'
                    >
                      <span className='icon'>
                        <FontAwesomeIcon
                          icon={faPaperPlane}
                          color='#30475e'
                          size='1x'
                        />
                      </span>
                      <span>Send</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default Contact
