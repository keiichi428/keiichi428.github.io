import React from 'react';
import './Header.css';
// import ReactDOM from 'react-dom';
class Header extends React.Component{
    render(){
        return (
            <header>
                <span>KEIICHI SHIBUYA</span>
                <ul className="nav">
                    <li>Header</li>
                </ul>
            </header>
        )
    }
}
export default Header