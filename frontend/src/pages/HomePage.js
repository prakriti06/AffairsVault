import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    fetch('/api/content')
      .then((response) => response.json())
      .then((data) => setContent(data));
  }, []);

  return (
    <div>
      <h1>Welcome to AffairsVault</h1>
      <div>
        <h2>Latest UPSC Resources</h2>
        <ul>
          {content.map((item) => (
            <li key={item._id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Link to={`/content/${item._id}`}>Read More</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;

