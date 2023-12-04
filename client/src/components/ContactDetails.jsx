import React from 'react'
import css from './ContactDetails.module.css'
import contactSvg from '../images/contact-svg.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useSelector } from 'react-redux';

const ContactDetails = () =>{
  const {activePage} = useSelector(state => state.user)

  return (
    <div className={css.main}>
      <div className={css.svgCtn}>
        <img src={contactSvg} alt="contact svg pic"/>
      </div>
      <div className={css.bodyCtn}>
        <div className={css.iconCtn}>
          { activePage.socialmedia.instagram && <a href={activePage.socialmedia.instagram}><InstagramIcon/></a> }
          { activePage.socialmedia.youtube && <a href={activePage.socialmedia.youtube}><YouTubeIcon/></a> }
          { activePage.socialmedia.twitter && <a href={activePage.socialmedia.twitter}><TwitterIcon/></a> }
          { activePage.socialmedia.facebook && <a href={activePage.socialmedia.facebook}><FacebookIcon/></a> }
        </div>
        <div className={css.contactCtn}>
          <a href={`https://wa.me/${activePage.communication.phoneno}`} className={css.whatsappCtn}><WhatsAppIcon className={css.whatsappIcon}/><span>Contact via whatsapp</span> </a>
          <a href={`mailto:${activePage.email}`} className={css.mailCtn}><MailOutlineIcon className={css.mailIcon}/><span>Contact via email</span> </a>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails;