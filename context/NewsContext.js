'use client';

import { useContext,createContext, useState, useEffect} from "react";
import { userAuth } from "./AuthContext";
import { db } from "@app/firebase";
import { addDoc,collection, getDocs } from "firebase/firestore";

export const NewsContext = createContext();
export const useNewsContext = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
    const {user} = userAuth();
    const [newsData, setNewsData] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [favouriteArticles, setFavouriteArticles] = useState([]);


    // implementing local storage for storing the selected articles
useEffect(() => {
    const savedArticle = localStorage.getItem('selectedArticle');
    if (savedArticle) {
        setSelectedArticle(JSON.parse(savedArticle));
    }
    }, []);
    
const updateSelectedArticle = article => {
      setSelectedArticle(article);
      localStorage.setItem('selectedArticle', JSON.stringify(article));
    };

    // if user is logged in, allow to add articles to favourites
const addToFavourite = async (article) => {
  
    if (user) {
      try {
        const userFavouritesRef = collection(db, 'users', user.uid, 'favourites');
        await addDoc(userFavouritesRef, article);
        setFavouriteArticles([...favouriteArticles, article]);
      } catch (error) {
        console.error('Error adding favorite article:', error);
      }
    }
};

// fetch the fovourite articles from firebase firestore 
const fetchFavouriteArticles = async () => {
    
    if (user) {
      try {
        const userFavouritesRef = collection(db, 'users', user.uid, 'favourites');
      const querySnapshot = await getDocs(userFavouritesRef);
      const favorites = querySnapshot.docs.map(doc => doc.data());
      setFavouriteArticles(favorites);

      } catch (error) {
        console.error('Error fetching favorite articles:', error);
      }
    }
};

// Fetch favorite articles when the component renders
useEffect(() => {
  fetchFavouriteArticles(); 
}, [user]);
  
    return (
      <NewsContext.Provider value={{ newsData, setNewsData, selectedArticle, setSelectedArticle, favouriteArticles, addToFavourite, fetchFavouriteArticles }}>
        {children}
      </NewsContext.Provider>
    );
  };