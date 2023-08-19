'use client';

import React, { useEffect } from 'react';
import { useNewsContext } from '@context/NewsContext';
import { useRouter } from 'next/navigation';



const NewsArticle = () => {
    
  const router = useRouter();
  const title = router.query;
  const { newsData, updateSelectedArticle } = useNewsContext();

  useEffect(() => {
    const selectedArticle = newsData.find(article => article.title === decodeURIComponent(title));
    if (selectedArticle) {
      updateSelectedArticle(selectedArticle);
    }
  }, [newsData, title, updateSelectedArticle]);

  const { selectedArticle } = useNewsContext();

  
  if (!selectedArticle) {
    return <p className='head_text'>No article selected.</p>;
  }

    return (
    
    <div className="template">

      {/* Displaying the details of the article when clicked */}
       
        <h1 className="orange_gradient">{selectedArticle.title}</h1>
        
        <img src={selectedArticle.urlToImage} alt='article'className="card-title " />
        
        <p>{selectedArticle.description}</p>
        
        <a href={selectedArticle.url} target="_blank">
            <button className="black_btn">
                View Full Article
            </button>
        </a>
       
    </div>
  )
}

export default NewsArticle
