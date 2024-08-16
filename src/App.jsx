
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import TopCards from './Components/TopCards/TopCards';
import Overview from './Components/OverView/OverView';

function App() {
  const [followers, setFollowers] = useState([]);
  const [overview, setOverview] = useState([]);

  useEffect(() => {
    const followersData = [
      { id: 1, platform: 'facebook', username: '@LeonidasEsteban', followers: 1483, change: '12 Today', icon: 'images/icon-facebook.svg' },
      { id: 2, platform: 'twitter', username: '@LeonidasEsteban', followers: 28000, change: '12 Today', icon: 'images/icon-twitter.svg' },
      { id: 3, platform: 'instagram', username: '@LeonidasEsteban', followers: 6000, change: '12 Today', icon: 'images/icon-instagram.svg' },
      { id: 4, platform: 'youtube', username: '@LeonidasEsteban', followers: 12000, change: '12 Today', icon: 'images/icon-youtube.svg' }
    ];

    const overviewData = [
      { id: 1, title: 'Page Views', platform: 'facebook', views: 87, change: '3%', direction: 'up' },
      { id: 2, title: 'Likes', platform: 'facebook', views: 52, change: '2%', direction: 'down' },
      { id: 3, title: 'Likes', platform: 'instagram', views: 5462, change: '2257%', direction: 'up' },
      { id: 4, title: 'Profile Views', platform: 'instagram', views: 52000, change: '1375%', direction: 'up' },
      { id: 5, title: 'Retweets', platform: 'twitter', views: 117, change: '303%', direction: 'up' },
      { id: 6, title: 'Likes', platform: 'twitter', views: 507, change: '553%', direction: 'up' },
      { id: 7, title: 'Likes', platform: 'youtube', views: 107, change: '19%', direction: 'down' },
      { id: 8, title: 'Total Views', platform: 'youtube', views: 1407, change: '12%', direction: 'down' }
    ];

    setFollowers(followersData);
    setOverview(overviewData);
  }, []);

  return (
    <div className="app">
      <Header />
      <TopCards followers={followers} />
      <Overview overview={overview} />
    </div>
  );
}

export default App;
