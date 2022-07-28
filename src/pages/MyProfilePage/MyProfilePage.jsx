import React from 'react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import './MyProfilePage.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebookF, faTwitter, faInstagram);

export default function MyProfilePage() {
  
  return (
    <>
  
<section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex .justify-content-center .align-content-center h-100">
      <div className="col col-lg-9 m-0 auto">
        <div className="card mb-1" style={{ borderRadius: '.5rem'}}>
          <div className="row g-0">
            <div className="col-md-4 gradient-custom text-center text-white"
              style={{ borderTopLeftRadius: ".5rem border-bottom-left-radius: .5rem"}}>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="Avatar" className="img-fluid my-5" style={{ width: '80px' }} />
              <h5>Jessica Williams</h5>
              <p>Premium Account</p>
             
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
                <h6 className='profile-title'>My Profile</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>Email</h6>
                    <p className="text-muted">Jessica@gmail.com</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Phone</h6>
                    <p className="text-muted">123-456-789</p>
                  </div>
                </div>
               
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>Member Since</h6>
                    <p className="text-muted">2020</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Address</h6>
                    <p className="text-muted">123 Main St, CA 33543</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                <a className='icons' href='#!'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                <a className='icons' href='#!'><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                <a className='icons' href="#!"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section>
      
</>
    
  )
}

