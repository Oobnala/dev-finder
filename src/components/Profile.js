import React from 'react';
import './Profile.scss';
import { ReactComponent as Location } from '../assets/icon-location.svg';
import { ReactComponent as Website } from '../assets/icon-website.svg';
import { ReactComponent as Twitter } from '../assets/icon-twitter.svg';
import { ReactComponent as Company } from '../assets/icon-company.svg';

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const Header = (props) => {
  const { user, isLoading, error } = props;

  const convertDate = (joinDate) => {
    let date = new Date(joinDate);
    let month = date.getUTCMonth();
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();

    return (
      <h4 className="profile__date">{`Joined ${day} ${MONTHS[month]} ${year}`}</h4>
    );
  };

  if (error) {
    return (
      <div className="profile__status">
        <h2 className="profile__status-text">No user found...</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="profile__status">
        <h2 className="profile__status-text">Loading user...</h2>
      </div>
    );
  }

  return (
    <div className="profile">
      <div className="profile__img-container">
        <img className="profile__img" src={user.avatar} alt="" />
      </div>
      <div className="profile__username-container">
        <div>
          <h1 className="profile__name">
            {user.name ? user.name : user.login}
          </h1>
          <h3 className="profile__name-link">@{user.login}</h3>
        </div>
        {convertDate(user.date)}
      </div>
      <h4 className="profile__description">
        {user.bio ? user.bio : 'This profile has no bio'}
      </h4>
      <div className="profile__stats">
        <div className="profile__stat">
          <h4>Repos</h4>
          <h2>{user.repos}</h2>
        </div>
        <div className="profile__stat">
          <h4>Followers</h4>
          <h2>{user.followers}</h2>
        </div>
        <div className="profile__stat">
          <h4>Following</h4>
          <h2>{user.following}</h2>
        </div>
      </div>
      <div className="profile__links">
        <div className="profile__link">
          <Location
            className={
              user.location
                ? 'profile__link-icon'
                : 'profile__link-icon--undefined'
            }
          />
          {user.location ? (
            <h4 className="profile__link-text">{user.location}</h4>
          ) : (
            <h4 className="profile__link-text--undefined">Not Available</h4>
          )}
        </div>
        <div className="profile__link">
          <Twitter
            className={
              user.twitter
                ? 'profile__link-icon'
                : 'profile__link-icon--undefined'
            }
          />
          {user.twitter ? (
            <a
              href={`https://twitter.com/${user.twitter.replace('@', '')}`}
              className="profile__link-text"
            >
              {user.twitter}
            </a>
          ) : (
            <h4 className="profile__link-text--undefined">Not Available</h4>
          )}
        </div>
        <div className="profile__link">
          <Website
            className={
              user.url ? 'profile__link-icon' : 'profile__link-icon--undefined'
            }
          />
          {user.url ? (
            <a href={`${user.url}`} className="profile__link-text">
              {user.url}
            </a>
          ) : (
            <h4 className="profile__link-text--undefined">Not Available</h4>
          )}
        </div>
        <div className="profile__link">
          <Company
            className={
              user.company
                ? 'profile__link-icon'
                : 'profile__link-icon--undefined'
            }
          />
          {user.company ? (
            <a
              href={`https://github.com/${user.company.replace('@', '')}`}
              className="profile__link-text"
            >
              {user.company}
            </a>
          ) : (
            <h4 className="profile__link-text--undefined">Not Available</h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
