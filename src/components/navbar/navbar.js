import React from 'react';
import * as Scroll from 'react-scroll';
import './navbar.css';

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

class Navbar extends React.Component {
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
                            <img src="https://icon.now.sh/x/748DA5/40" alt='Close'/>
                        ) : (
                                <img src="https://icon.now.sh/burger/748DA5/40" alt='Menu' />
                            )
                    }
                </div>
                <div className='navbar-dropdown' style={{ maxHeight: height }}>
                    {
                        links.map(({ name, to }) => (
                            <Scroll.Link to={to} smooth={true} duration={400} key={`${name}`}>
                                <div className='navbar-link'>
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

export default Navbar;