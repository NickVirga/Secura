import './Dashboard.scss';
import avatar from '../../assets/images/avatar.jfif';
import graph from '../../assets/images/graph.svg';
import facebookIcon from '../../assets/Icons/facebook.svg';
import instagramIcon from '../../assets/Icons/instagram.svg';
import tiktokIcon from '../../assets/Icons/tiktok.svg';
import pinterestIcon from '../../assets/Icons/pinterest.svg';
import twitterIcon from '../../assets/Icons/twitter.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
    const [activeTab, setActiveTab] = useState('activity');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };


    return (
      <div className='dashboard'>
        <header className='dashboard__header'>
            <div className='dashboard__header-user-container'>
                <img className='dashboard__header-user-avatar'src={avatar} alt='user profile'/>
            </div>
            <div className='dashboard__header-profile'>
                <h2 className='dashboard__header-profile-name'>Hey Margaret</h2>
                <span className='dashboard__header-profile-edit'>Edit Info</span>
            </div>
        </header>
        <section className='dashboard__info'>
            <p className='dashboard__info-content'>
                Learn more about our data protection, advanced encryption methods, security measures, and comprehensive data privacy features that help you take control of your personal information and safeguard your digital life!
            </p>
        </section>
        <section className='dashboard__tabs'>
            <span
            className={`dashboard__tabs-tab dashboard__tabs-tab--activity ${
            activeTab === 'activity' ? 'active' : ''
            }`}
            onClick={() => handleTabClick('activity')}
            >
            Activity
            </span>
            <span
                className={`dashboard__tabs-tab dashboard__tabs-tab--overview ${
                activeTab === 'overview' ? 'active' : ''
                }`}
                onClick={() => handleTabClick('overview')}
            >
                Overview
            </span>
            <span
                className={`dashboard__tabs-tab dashboard__tabs-tab--social ${
                activeTab === 'social' ? 'active' : ''
                }`}
                onClick={() => handleTabClick('social')}
            >
                Social
            </span>
        </section>
        <section className='dashboard__activity'>
            <div className='dashboard__activity-visual'>
                <img className='dashboard__activity-visual' src={graph} alt='bar graph showing activity by percentage'/>
            </div>
            <div className='dashboard__activity-stats'>
                <div className='dashboard__activity-stats-titles'>
                    <span className='dashboard__activity-stats-titles--apps'>Apps</span>
                    <span className='dashboard__activity-stats-titles--activity'>Activity</span>
                </div>
                <div className='dashboard__activity-stats-card-section'>
                    <Link 
                    className='dashboard__activity-stats-card dashboard__activity-stats-card--facebook'
                    to='/socials'>
                        <div className='dashboard__activity-stats-card-social dashboard__activity-stats-card-social dashboard__activity-stats-card-social dashboard__activity-stats-card-social--facebook'>
                            <img src={facebookIcon} alt='facebook icon'/>
                            <span>Facebook</span>
                        </div>
                        <span className='dashboard__activity-stats-card-activity'>
                            47%
                        </span>
                    </Link>
                    <div className='dashboard__activity-stats-card'>
                        <div className='dashboard__activity-stats-card-social dashboard__activity-stats-card-social dashboard__activity-stats-card-social dashboard__activity-stats-card-social--instagram'>
                            <img src={instagramIcon} alt='facebook icon'/>
                            <span>Instagram</span>
                        </div>
                        <span className='dashboard__activity-stats-card-activity'>
                            17%
                        </span>
                    </div>
                    <div className='dashboard__activity-stats-card'>
                        <div className='dashboard__activity-stats-card-social dashboard__activity-stats-card-social dashboard__activity-stats-card-social dashboard__activity-stats-card-social--tiktok'>
                            <img src={tiktokIcon} alt='facebook icon'/>
                            <span>TikTok</span>
                        </div>
                        <span className='dashboard__activity-stats-card-activity'>
                            9%
                        </span>
                    </div>
                    <div className='dashboard__activity-stats-card'>
                        <div className='dashboard__activity-stats-card-social dashboard__activity-stats-card-social dashboard__activity-stats-card-social dashboard__activity-stats-card-social--pinterest'>
                            <img src={pinterestIcon} alt='facebook icon'/>
                            <span>Pinterest</span>
                        </div>
                        <span className='dashboard__activity-stats-card-activity'>
                            15%
                        </span>
                    </div>
                    <div className='dashboard__activity-stats-card'>
                        <div className='dashboard__activity-stats-card-social dashboard__activity-stats-card-social dashboard__activity-stats-card-social dashboard__activity-stats-card-social--twitter'>
                            <img src={twitterIcon} alt='facebook icon'/>
                            <span>Twitter</span>
                        </div>
                        <span className='dashboard__activity-stats-card-activity'>
                            12%
                        </span>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
  
  export default Dashboard;