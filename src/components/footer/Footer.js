import React from 'react'
import {FooterWrapper, FooterLinks, FooterButton} from './Footer.style';
import logo from '../../images/logo.svg';
import iconFb from '../../images/icon-facebook.svg';
import iconTwitter from '../../images/icon-twitter.svg';
import iconYoutube from '../../images/icon-youtube.svg';
import iconPinterest from '../../images/icon-pinterest.svg';
import {Button, Container} from '../../styles/Common.style';
import {Link} from 'react-router-dom';



const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <Container>
          <div className='footer_inner'>
         <FooterLinks>
           <div className='footer-top'>
              <div className="logo"> <img src={logo} /> </div>
              <div className="social-icons">
                <img src={iconFb} />
                <img src={iconTwitter} />
                <img src={iconYoutube} />
                <img src={iconPinterest} />
              </div>
          </div>
          <div className='link'>
            <Link to='/about'>About</Link>
            <Link to='/Contact'>Contact</Link>{' '}
            <Link to='/blog'>Blog</Link>
          </div>
          <div className='link'>
            <Link to='/Support'>Support</Link>
            <Link to='/Help'>Help</Link>{' '}
            <Link to='/contact'>Contact</Link>
          </div>
         </FooterLinks>
        <FooterButton>
        <Button>Request Invite</Button>  
        </FooterButton>{' '}
        </div>
        </Container>
      </FooterWrapper>
    </div>
  )
}

export default Footer

