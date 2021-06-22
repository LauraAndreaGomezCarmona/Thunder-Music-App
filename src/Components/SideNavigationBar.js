import React from 'react';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import AlbumIcon from '@material-ui/icons/Album';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import '../App.css';
import {Link} from 'react-router-dom';

export const SideBarData = [
    {
        title:'Songs',
        icon: <AlbumIcon/>,
        link:'/songs',
    },
    {
        title:'More Music',
        icon: <LibraryMusicIcon/>,
        link:'/music',
    },
    {
        title:'Songs Quiz',
        icon: <SportsEsportsIcon/>,
        link:'/songs-quiz',
    }
]

const SideNavigationBar = () => {
    return (
        <nav>
            <div className='side-nav-bar' aria-hidden='true' >
                <div className='logo flex' aria-hidden='true'>
                    <img className='headphones-icon' src='./Images/headphones.png' alt='Headphones icon'/>
                    <h1>Thunder</h1>
                    <img className='thunder-icon' src='./Images/Thunder.png' alt='Thunder icon'/>
                </div>
                <h5>Menu</h5>
                <ul className='nav-bar-list'>
                    <Link to='/' className='home'></Link>
                    {SideBarData.map((value, key) => {
                        return (
                            <li
                                className='nav-bar-items'
                                key={key} 
                                onClick={ () => window.location.pathname = value.link}>
                                <div className='nav-icon' aria-hidden='true'>{value.icon}</div>
                                <div className='nav-title' aria-hidden='true'>{value.title}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default SideNavigationBar;




