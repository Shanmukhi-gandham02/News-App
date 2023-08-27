'use client';
import { useEffect, useState, } from 'react';
import Link from 'next/link';
import { useNewsContext } from '@context/NewsContext';
import { userAuth } from '@context/AuthContext'


function NewsList() {
  const {user} = userAuth();
  const {setSelectedArticle, addToFavourite} = useNewsContext();
  const [news, setNews] = useState([]);
  const [isGridView, setIsGridView] = useState(false);

  useEffect(() => {
    // fetching the data from api and storing it in 'news' 
    const fetchNews = async () => {
      try {
         //const apiKey = '79006359bd1544d3899418d29f53d001';
         //const apiUrl = `https://newsapi.org/v2/everything?q=tesla&from=2023-07-19&sortBy=publishedAt&apiKey=${apiKey}`;
         //console.log(apiUrl);
         const response = await fetch('/Sample_report.json');
        //const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2023-08-26&to=2023-08-26&sortBy=popularity&apiKey=79006359bd1544d3899418d29f53d001');
         
        const data = await response.json();
        console.log(data);
    
    // Filtering out duplicate articles based on title
        const uniqueNews = data.articles.reduce((uniqueArticles, article) => {
        const isDuplicate = uniqueArticles.some(a => a.title === article.title);
        if (!isDuplicate) {
        uniqueArticles.push(article);
      }
      return uniqueArticles;
    }, []);

    setNews(uniqueNews);
      }    catch (error) {
      console.error('Error fetching news data:', error);
    }
  };

    fetchNews();
  }, []);
  

  const toggleGridView = () => {
    setIsGridView(!isGridView);
  };
//onclick set the article to viewed article
  const handleArticleClick = article => {
    setSelectedArticle(article);
    localStorage.setItem('selectedArticle', JSON.stringify(article));
  };

  return (
    <>
    
    <div className='mt-6'>
        
        {/* Added the toggle button to switch between grid and list view */}
       
        <button onClick={toggleGridView} className='black_btn mx-7'>
            {isGridView ? 'Switch to List View' : 'Switch to Grid View'}
        </button>
      
      <div className='items-center'>
         
         <div className={` ${isGridView ? 'grid-view' : 'list-view'}`}>
      
            {news.map(article => (
                
                <div key={article.title} className={` ${isGridView ? 'grid-view-item' : 'list-view-item'}`}>                     
                  
                  {/*Displaying the title and article img on each news-item */}
                        <div className='card card-title hoverarea'>
                            
                            <img src={article.urlToImage} alt='article' className='article-img' />
                            
                            <p>{article.title}</p> 
                            
                        <div className='flex flex-col items-center gap-y-2'>

                          {/* log in to read more about the article*/}
                          {user?(<Link href={`/NewsArticle/${encodeURIComponent(article.title)}`}>
                                <button className='outline_btn mb-2 mt-2'
                                 onClick={() => handleArticleClick(article)}>
                                    Read more
                                </button>
                            </Link>):(<button className='outline_btn mb-2 mt-2'
                                 onClick={() => {alert('Log In to continue!')}}>
                                    Read more
                                </button>)}
                            
                      {/* if user is logged in he can add articles to his favourites 
                      else an alert will be shown to log in */}
                            {user? (
                                <button className='red_btn' onClick={() => { 
                                  addToFavourite(article);
                                  alert('Added to favourites');
                                }}>
                                  Add to Favourites
                                </button>
                              ): (
                                <button className='red_btn' onClick={() => { 
                                  alert('Log In to continue!');
                                }}>
                                  Add to Favourites
                                </button>)}

                        </div>
                      </div>
                     
                </div>
            ))}
         </div>
        </div>
    </div>
  </>
  );
}

export default NewsList;
