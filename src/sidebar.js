import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import PlaylistAddCheckOutlinedIcon from '@mui/icons-material/PlaylistAddCheckOutlined';
import LinkIcon from '@mui/icons-material/Link';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';

import './sidebar.css'


const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <h1 style={{color: "white"}}>RISK HAWK</h1>
            <div className='side-icons'>
                <ManageSearchOutlinedIcon style={{color: "#d3caca"}}/>
                <h3 className='side-heading'>Internal Audit</h3>
            </div>
            <div className='side-icons'>
                <PlaylistAddCheckOutlinedIcon style={{color: "#d3caca"}}/>
                <h3 className='side-heading'>UAT Testing</h3>
            </div>
            <div className='side-icons'>
                <LinkIcon style={{color: "#d3caca"}}/>
                <h3 className='side-heading'>Intract</h3>
            </div>
            <div className='side-icons'>
                <SupervisorAccountOutlinedIcon style={{color: "#d3caca"}}/>
                <h3 className='side-heading'>Queue</h3>
            </div>
            <div className='side-icons'>
                <LanOutlinedIcon style={{color: "#d3caca"}}/>
                <h3 className='side-heading'>Workflow</h3>
            </div>
            <div className='side-icons'>
                <PersonOutlineOutlinedIcon style={{color: "#d3caca"}}/>
                <h3 className='side-heading'>Admin</h3>
            </div>
            <div className='side-icons'>
                <ViewInArOutlinedIcon style={{color: "#d3caca"}}/>
                <h3 className='side-heading'>Asset</h3>
            </div>
            <div className='side-icons'>
                <SupervisedUserCircleOutlinedIcon style={{color: "#d3caca"}}/>
                <h3 className='side-heading'>Parent</h3>
            </div>
            <div className='side-icons'>
                <PlayCircleFilledWhiteRoundedIcon style={{color: "#d3caca"}}/>
                <h3 className='side-heading'>Option One</h3>
            </div>
            <div className='side-icons'>
                <PlayCircleFilledWhiteRoundedIcon style={{color: "#d3caca"}}/>
                <h3 className='side-heading'>Option Two</h3>
            </div>
            <div className='side-icons'>
                <BuildOutlinedIcon style={{color: "#d3caca"}}/>
                <h3 className='side-heading'>All Accessories</h3>
            </div>
            <div className='side-icons'>
                <AutoAwesomeOutlinedIcon style={{color: "#d3caca"}}/>
                <h3 className='side-heading'>Decorating</h3>
            </div>
            <div className='side-icons'>
                <RedeemOutlinedIcon style={{color: "#d3caca"}}/>
                <h3 className='side-heading'>Presenting</h3>
            </div>


        </div>
    )
}

export default Sidebar