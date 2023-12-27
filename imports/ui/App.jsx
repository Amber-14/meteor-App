import React, { useState } from 'react';
import UserList from './UserList.jsx';

export const App = () => {
  
  const [responseData, setResponseData] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showUserList, setShowUserList] = useState(false);

  const handleAPICall = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/hello');
      const data = await response.text();
      setTimeout(() => {
        setResponseData(data);
        setIsLoading(false);
      }, 2000); // Delay of 2 seconds
    } catch (error) {
      setError('Failed to fetch data');
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  const handleShowUserList = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowUserList(true);
      setIsLoading(false);
    }, 2000); // Delay of 2 seconds
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}>Welcome to My Meteor App</h1>
      {!responseData && (
        <button onClick={handleAPICall} disabled={isLoading}>
          Click to Call API
        </button>
      )}
      {error && <div>Error: {error}</div>}
      <div style={{textAlign:'center', color:'grey'}}>{<h3>{responseData}</h3>}</div>
      {responseData && !showUserList && (
        <button onClick={handleShowUserList} disabled={isLoading}>
          Show Blood Bank List
        </button>
      )}
      {showUserList && <UserList />}
      {isLoading && <Loading />}
    </div>
  );
}

const Loading = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontSize: '2em',
  }}>
    Loading...
  </div>
);


