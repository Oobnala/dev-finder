import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import Header from './components/Header';
import Search from './components/Search';
import Profile from './components/Profile';
import './App.scss';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const setThemeHandler = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const searchHandler = useCallback(async (username) => {
    try {
      setError(false);
      setIsLoading(true);
      await axios
        .get(`https://api.github.com/users/${username}`)
        .then((response) => {
          setIsLoading(false);
          const { data } = response;

          let user = {
            avatar: data.avatar_url,
            name: data.name,
            date: data.created_at,
            login: data.login,
            bio: data.bio,
            repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            location: data.location,
            url: data.blog,
            twitter: data.twitter_username,
            company: data.company,
          };

          setUser(user);
        });
    } catch (err) {
      setError(true);
    }
  }, []);

  useEffect(() => {
    searchHandler('octocat').then(() => {
      setIsLoading(false);
    });
  }, [searchHandler]);

  if (isDarkTheme) {
    document.body.style.backgroundColor = '#141d2f';
  } else {
    document.body.style.backgroundColor = '#f6f8ff';
  }

  return (
    <div
      className={
        isDarkTheme ? 'theme--dark container' : 'theme--light container'
      }
    >
      <Header setTheme={setThemeHandler} isDark={isDarkTheme} />
      <Search search={searchHandler} error={error} />
      <Profile user={user} isLoading={isLoading} error={error} />
    </div>
  );
};

export default App;
