import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ContentPage = () => {
  const [content, setContent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/content/${id}`)
      .then((response) => response.json())
      .then((data) => setContent(data));
  }, [id]);

  return content ? (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
      <a href={content.contentLink}>Download Content</a>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default ContentPage;

