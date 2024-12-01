import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <h3 style={{color: '#757575'}}>Chat/Feed chat</h3>
            <div className='navbar-buttons-container'>
                <HomeOutlinedIcon />
                <button className='owner-button'>Process Owner HOD</button>
                <button className='admin-button'>Admin</button>
                <div className='profile-name'>
                    <h3>Sandeep</h3>
                    <AccountCircleOutlinedIcon />
                </div>
                <SettingsOutlinedIcon />
                <button className='logout-button'>
                    <LogoutOutlinedIcon />
                    <h3>Logout</h3>
                </button>
            </div>
        </div>
    )
}

export default Navbar