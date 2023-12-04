import React from 'react'
import css from './Footer.module.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

function Footer() {

  return (
    <div className={css.main}>
          <ul className={css.socialIcons}>
            <li><a href="https://www.youtube.com/channel/UCJmYjq1g5jf_JoxyDHTgW-w" rel="noreferrer" target="_blank"><YouTubeIcon fontSize='large'/></a></li>
            <li><a href="https://twitter.com/Vignesh121_" rel="noreferrer" target="_blank"><TwitterIcon fontSize='large'/></a></li>
            <li><a href="https://www.instagram.com/iam_vignesh_7/" rel="noreferrer" target="_blank"><InstagramIcon fontSize='large'/></a></li>
            <li><a href="https://github.com/vignesh457/" rel="noreferrer" target="_blank"><GitHubIcon fontSize='large'/></a></li>
            <li><a href="https://www.linkedin.com/in/vigneshwar-reddy-donapati-516a2b202/" rel="noreferrer" target="_blank"><LinkedInIcon fontSize='large'/></a></li>
          </ul>
          <p className={css.copyright}><CopyrightIcon fontSize='small'/> {new Date().getFullYear()} <a href='https://portfolio-vignesh.netlify.app/'>Vignesh</a> | All Rights Reserved</p>
    </div>
  )
}

export default Footer