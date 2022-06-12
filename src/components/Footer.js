import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Rejoindre Notre Aventure Newsletter pour recevoir nos meilleurs offres de voyage !
            </p>
            <p className='footer-subscription-text'>
                Vous pouvez vous désinscrire à tout moment
            </p>
            <div className="input-areas">
                <form>
                    <input 
                    type="email"
                    name="email"
                    placeholder="Votre Email" 
                    className="footer-input"
                     />
                     <Button button style='btn--outline'>S'INSCRIRE</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>A Propos</h2>
                    <Link to='/sign-up'>Commence ça fonctionne</Link>
                    <Link to='/'>Commentaires</Link>
                    <Link to='/'>Carrières</Link>
                    <Link to='/'>Investisseurs</Link>
                    <Link to='/'>Termes de Service</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Nous Contacter</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsors</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Vidéos</h2>
                    <Link to='/'>Envoyer une video</Link>
                    <Link to='/'>Ambassadeurs</Link>
                    <Link to='/'>Agence</Link>
                    <Link to='/'>Influenceurs</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Médias Sociaux</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap"> 
                <div className="footer-logo">
                    <Link to='/' className="social-logo">
                        VOYAGE <i className="fab fa-typo3"></i>
                    </Link>
                </div>
                <small className="website-rights">VOYAGE © 2022</small>
                <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
