
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import BookMarks from './components/bookmarks/BookMarks'
import Header from './components/header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])

  const [readingTime,setReadingTime] = useState(0)

  const handleAddBookMark = blog =>{
    // console.log(blog)
    const setNewBookMars = [...bookmarks,blog];
    setBookmarks(setNewBookMars);
  }

  const handleMarkAsRead = (time,id)=> {
    // console.log('add',time)
    const updateTime = readingTime + time;
    setReadingTime(updateTime);

    // remove blog from bookmarks  when i click mark as read
    // console.log('remove',id)
    const remainingBookMark = bookmarks.filter(bookmark =>bookmark.id !== id)
    setBookmarks(remainingBookMark)
  }
 

  return (
    <>
    
  <Header></Header>
 
  <div className='md:flex md:gap-x-4 p-4'>
  <Blogs handleAddBookMark ={handleAddBookMark } handleMarkAsRead={handleMarkAsRead}></Blogs>
  <BookMarks bookmarks={bookmarks} readingTime={readingTime}></BookMarks>
  </div>
     
    
    </>
  )
}

export default App
