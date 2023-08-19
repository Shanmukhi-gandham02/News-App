'use client';

import Link from 'next/link'
import Image from 'next/image';

import { userAuth } from '@context/AuthContext'


const Nav = () => {
    
    const {user, googleSignIn, logOut} = userAuth();

    //signup, login would be same since it is google authentication
    const handleLogIn = async () => {
        try {
          await googleSignIn();
        } catch (error) {
          console.error(error);
        }
      };
   
      
    const handleLogOut = async () => {
        try {
            await logOut(); 
            } catch (error) {
            console.error(error);
            }
    };

  return (

    <div className='w-full h-20  flex items-center justify-between p-2 '>

      {/* Displays the the Logo and name of the app  and are linked to the home page when clicked*/}
        
        <Link href="/" className='flex gap-2 flex-center'>
            <Image src="/logo.png"
              alt='logo'
              width={50}
              height={50}
              className='object-contain'
            />
            <p className="logo_text ">News App</p>
        </Link>
    
    {/*if user is logged in display user's photo and signout button */}

    {!user ? (
        <ul className='flex'>
          <li onClick= {handleLogIn} className="p-4 mr-4 cursor-pointer outline_btn">Log In</li>
          <li onClick= {handleLogIn}  className="p-4 cursor-pointer black_btn">Sign Up</li>
      </ul>
    ) : (
        <ul className='flex'>
          <Link href='/favourites' className='outlineRed_btn mr-6'>Favourites</Link>
          <Link href="/">
            <li onClick= {handleLogOut} className="p-4 mr-4 cursor-pointer outline_btn">
                Sign Out
            </li>
          </Link>
          <Image  src={user.photoURL}
                    width={37}
                    height={37}
                    className='rounded-full cursor-pointer' alt='profile' />
            </ul>
    )}
        
    </div>
  
  )
}

export default Nav