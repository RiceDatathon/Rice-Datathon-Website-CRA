import React from 'react';
import { Box, Image } from 'rebass';
import './splashPage.css';
import logo from '../../static/datathon-logo.png';
import sponsorshipPacket from '../../static/SponsorshipPacket.pdf';

const screenHeight = window.outerHeight - 150

const SplashPage = () => (
    <div className='splashpage'>
        <Box width={[0.8, 0.25]} className='datathon-logo'>
            <Image src={logo} alt='Rice Datathon' />
        </Box>
        <Box width={[0.8, 0.5]} ml='auto' mr='auto' className='intro-logo'>
            <Image src={logo} />
        </Box>
        <h2 className='date'>Jan 24st - 25th 2020</h2>

        <Box width={[0.5, 0.4, 0.35, 0.2]} ml='auto' mr='auto' mt={40}>
            <div className='intro-link'>
                <h4 className='sign-up-link-text'>Sign Up</h4>
                <p className='sign-up-link-alt'>Registration will open fall 2019</p>
            </div>
        </Box>
        <Box width={[0.7, 0.27]} ml='auto' mr='auto' mt={20} className='sponsor-button'>
            <a href={sponsorshipPacket} style={{ textDecoration: 'none' }} target='_blank' rel="noopener noreferrer">
                <div className='intro-link'>
                    <h4 className='sponsor-link-text'>Become a Sponsor</h4>
                </div>
            </a>
        </Box>
        <div style={{ height: '100px' }} />
    </div>
)

export default SplashPage;