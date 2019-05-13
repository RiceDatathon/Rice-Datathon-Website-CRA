import React from 'react';
import * as Scroll from 'react-scroll';
import './navbar.css';
import riceLogo from '../../static/ricelogo.png';
import { Box, Image } from 'rebass';

const links = [
    {
        name: 'Home',
        to: 'home'
    },
    {
        name: 'About',
        to: 'about'
    },
    {
        name: 'Schedule',
        to: 'schedule'
    },
    {
        name: 'FAQs',
        to: 'faqs'
    }
]

class NavbarNarrow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({ open: !this.state.open })
    }
    render() {
        let height = this.state.open ? (400) : (0);
        return (
            <div className='navbar-container'>
                <div className='navbar-toggle' onClick={this.onClick}>
                    {
                        this.state.open ? (
                            <img src="https://icon.now.sh/x/748DA5/40" alt='Close' />
                        ) : (
                                <img src="https://icon.now.sh/burger/748DA5/40" alt='Menu' />
                            )
                    }
                </div>
                <div className='navbar-dropdown' style={{ maxHeight: height }}>
                    {
                        links.map(({ name, to }) => (
                            <Scroll.Link to={to} smooth={true} duration={400} key={`${name}`}>
                                <div className='navbar-link-narrow'>
                                    {name}
                                </div>
                            </Scroll.Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}

const NavbarWide = () => (
    <div className='navbar-bar'>
    {/* <Box className='rice'>
        <Image src={riceLogo} alt=''/>
    </Box> */}
        <div className='navbar-bar-container'>
            {
                links.map(({ name, to }) => (
                    <Scroll.Link to={to} smooth={true} duration={400} key={`${name}`}>
                        <div className='navbar-link-wide'>
                            {name}
                        </div>
                    </Scroll.Link>
                ))
            }
        </div>
    </div>
)

const Navbar = () => (
    <div>
        <div className='navbar-wide'>
            <NavbarWide />
        </div>
        <div className='navbar-narrow'>
            <NavbarNarrow />
        </div>
    </div>
)



export default Navbar;