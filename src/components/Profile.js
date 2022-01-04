import React from 'react';
import './Profile.scss';
import profilePic from '../assets/favicon-32x32.png';
import { ReactComponent as Location } from '../assets/icon-location.svg';
import { ReactComponent as Website } from '../assets/icon-website.svg';
import { ReactComponent as Twitter } from '../assets/icon-twitter.svg';
import { ReactComponent as Company } from '../assets/icon-company.svg';

const Header = () => {
  return (
    <div className="profile">
      <div className="profile__img-container">
        <img className="profile__img" src={profilePic} alt="" />
      </div>
      <div className="profile__details">
        <div className="profile__username-container">
          <div>
            <h1 className="profile__name">The Octocat</h1>
            <h3 className="profile__name-link">@octocat</h3>
          </div>
          <h4 className="profile__date">Joined 25 Jan 2011</h4>
        </div>
        <h4 className="profile__description">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </h4>
        <div className="profile__stats">
          <div className="profile__stat">
            <h4>Repos</h4>
            <h2>8</h2>
          </div>
          <div className="profile__stat">
            <h4>Followers</h4>
            <h2>3938</h2>
          </div>
          <div className="profile__stat">
            <h4>Following</h4>
            <h2>9</h2>
          </div>
        </div>
        <div className="profile__links">
          <div className="profile__link">
            <Location className="profile__link-icon" />
            <h4 className="profile__link-text">San Francisco</h4>
          </div>
          <div className="profile__link">
            <Twitter className="profile__link-icon--undefined" />
            <h4 className="profile__link-text--undefined">Not Available</h4>
          </div>
          <div className="profile__link">
            <Website className="profile__link-icon" />
            <h4 className="profile__link-text">https://github.blog</h4>
          </div>
          <div className="profile__link">
            <Company className="profile__link-icon" />
            <h4 className="profile__link-text">@github</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
