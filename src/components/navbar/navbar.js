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
        super(props);
        this.state = {
            open: false
        }
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    toggleNavbar() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div className={this.state.open ? ('navbar-visible') : ('navbar-hidden')}>
                <h1 className={this.state.open ? ('navbar-toggle-open') : ('navbar-toggle-closed')} onClick={this.toggleNavbar}>+</h1>
                {
                    links.map(({ name, to }) => (
                        <div className='navbar-item' key={name} onClick={this.toggleNavbar}>
                            <Scroll.Link to={to} smooth={true} duration={400}>
                                <p>{name}</p>
                            </Scroll.Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}


export default Navbar;