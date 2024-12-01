import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import './maincontent.css'

const MainContent = () => {
    return (
        <div className="middle-container">
            <ul className='names-list'>
                <li className='profile-name'>
                    <p className='name-shortcut'>SS</p>
                    <p>Sandeep Sai</p>
                </li>
                <li className='profile-name'>
                    <p className='name-shortcut'>JH</p>
                    <p>Jonathan Higgins</p>
                </li>
                <li className='profile-name'>
                    <p className='name-shortcut'>CT</p>
                    <p>Capt. Trunk</p>
                </li>
                <li className='profile-name'>
                    <p className='name-shortcut'>HS</p>
                    <p>Hannibai Smith</p>
                </li>
                <li className='profile-name'>
                    <p className='name-shortcut'>CT</p>
                    <p>Capt. Trunk</p>
                </li>
                <li className='profile-name'>
                    <p className='name-shortcut'>HS</p>
                    <p>Hannibai Smith</p>
                </li>
            </ul>
            <div className='middle-bottom-container'>
                <div className='middle-left-container'>
                    <div className='profile-container'>
                        <p className='shortcut'>SS</p>
                        <div className='name-address'>
                            <h2>Sandeep Sai</h2>
                            <p>1 Market Street, San Fransisco</p>
                        </div>
                    </div>
                    <div className='details-container'>
                        <div className='details'>
                            <p style={{color: '#808080'}}>Customer Id</p>
                            <p>12345678</p>
                        </div>
                        <div className='details'>
                            <p style={{color: '#808080'}}>Email</p>
                            <p>sandeep@gmail.com</p>
                        </div>
                        <div className='details'>
                            <p style={{color: '#808080'}}>Phone</p>
                            <p>987654321</p>
                        </div>
                        <button className='add-button'>+ Add</button>
                    </div>
                    <div className='details-container'>
                        <div className='details'>
                            <p style={{color: '#808080'}}>Loyalty Tier</p>
                            <p>Silver</p>
                        </div>
                        <div className='details'>
                            <p style={{color: '#808080'}}>Segment</p>
                            <p>Sleepy Customer</p>
                        </div>
                        <button className='add-button'>+ Add</button>
                    </div>
                    <div className='details-container'>
                        <div className='details'>
                            <p style={{color: '#808080'}}>Lifetime value</p>
                            <p>$1M</p>
                        </div>
                        <div className='details'>
                            <p style={{color: '#808080'}}>Propensity to purchase</p>
                            <p>75%</p>
                        </div>
                        <button className='add-button'>+ Add</button>
                    </div>
                    <div className='details-container'>
                        <div className='details'>
                            <p style={{color: '#808080'}}>Engagement score</p>
                            <p>80%</p>
                        </div>
                        <button className='add-button'>+ Add</button>
                    </div>
                    <button className='bottom-buttons'>Assign Other Agent</button>
                    <button className='bottom-buttons' style={{backgroundColor: "transparent", border: '2px solid', borderColor:'#1b70e8', color:"#1b70e8", borderStyle:"dashed"}}>Add new widget</button>
                </div>

                <div className='conversation-container'>
                    <div className='conversation-top'>
                        <p>Conversation</p>
                        <p>Attachement</p>
                    </div>
                    <div className='checkbox-container'>
                        <div className='input'>
                            <input type='checkbox' id='sms'/>
                            <label htmlFor="sms">SMS</label>
                        </div>
                        <div className='input'>
                            <input type='checkbox' id='sms'/>
                            <label htmlFor="sms">Whatsapp</label>
                        </div>
                        <div className='input'>
                            <input type='checkbox' id='sms'/>
                            <label htmlFor="sms">Email</label>
                        </div>
                    </div>
                    <div className='input-send-container'>
                        <input type='text' className='input-text' placeholder='Type a message...'/>
                        <button className='send-button'>Send</button>
                    </div>
                </div>
                <div className='right-container'>
                    <div className='top-container'>
                        <div className='whatapp-greetings-container'>
                            <h2>Ask Catura</h2>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <EmailOutlinedIcon />
                                <p>Whatsapp</p>
                            </div>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <EmailOutlinedIcon />
                                <p>Greetings</p>
                            </div>
                        </div>
                        <div className='input-send-container'>
                            <input type='text' className='input-text' placeholder='Type a message...'/>
                            <button className='send-button'>Send</button>
                        </div>
                    </div>

                    <div className='top-container'>
                        <div className='whatapp-greetings-container'>
                            <h2>Action Launcher</h2>
                        </div>
                        <div className='input-send-container'>
                            <input type='search' className='input-text' placeholder='Search actions...'/>
                            <button className='send-button'>+ Add Action</button>
                        </div>
                    </div>

                    <div className='top-container' style={{height: '250px'}}>
                        <div className='whatapp-greetings-container'>
                            <h2>Case Favorite</h2>
                        </div>
                        <div>
                            <div className='list-item' style={{backgroundColor:'#f2f3f4', borderColor: '#a9a9a9'}}>
                                <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt</p>
                            </div>
                            <div className='list-item' style={{backgroundColor:'#f2f3f4', borderColor: '#a9a9a9'}}>
                                <p>Photo</p>
                            </div>
                            <div className='list-item' style={{backgroundColor:'#f2f3f4', borderColor: '#a9a9a9'}}>
                                <p>Lorem ipsum dolor sit amet consectetur. Et tincidunt</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainContent