'use client';
import { userAuth } from "@context/AuthContext";
import { useNewsContext } from "@context/NewsContext";
import Link from "next/link";


const favourites = () => {
    const { setSelectedArticle, favouriteArticles } = useNewsContext();
    const {user} = userAuth();
    console.log(favouriteArticles);
    
    const handleArticleClick = article => {
        setSelectedArticle(article);
      };

    if (!user) {
        return <p>Please log in to view your favourite articles.</p>;
      }

  return (
    <>
        <h3 className="head_text text-center orange_gradient">
            Your Favourite Articles
        </h3>
    <div className="list-view">
      
      {favouriteArticles.map(article => (
        <div key={article.title} className="list-view-item">
          <div className='card card-title hoverarea'>               
            <img src={article.urlToImage} alt='article' className='article-img my-5' />
            <p>{article.title}</p> 
            <Link href={`/NewsArticle/${encodeURIComponent(article.title)}`}>
                <button className='outline_btn mb-2 mt-2'
                    onClick={() => handleArticleClick(article)}>
                    Read more
                </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default favourites