import React from 'react';
import { Box, Image } from 'rebass';
import './splashPage.css';
import datathonLogo from '../../static/datathon-logo.png'

import sponsorshipPacket from '../../static/SponsorshipPacket.pdf';

const screenHeight = window.outerHeight - 100

const SplashPage = () => (
    <div className='splashpage' style={{ height: screenHeight }}>
        <Box width={[0.9, 0.7, 0.7, 0.7]} ml='auto' mr='auto' className='datathon-logo'>
            <Image src={datathonLogo} width={1} />
        </Box>
        <h4 className='date'>Jan 24st - 25th 2020</h4>
        <Box width={[0.5, 0.4, 0.35, 0.2]} ml='auto' mr='auto' mt={40}>
            <div className='intro-link'>
                <h4 className='sign-up-link-text'>Sign Up</h4>
                <p className='sign-up-link-alt'>Registration will open fall 2019</p>
            </div>
        </Box>
        <Box width={[0.7, 0.27]} ml='auto' mr='auto' mt={20}>
            <a href={sponsorshipPacket} style={{textDecoration: 'none'}} target='_blank'>
                <div className='intro-link'>
                    <h4 className='sponsor-link-text'>Become a Sponsor</h4>
                </div>
            </a>
        </Box>
    </div>
)

export default SplashPage;