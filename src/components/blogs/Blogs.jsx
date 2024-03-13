
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";


const Blogs = ({handleAddBookMark,handleMarkAsRead }) => {
    const [blogs,setBlogs] = useState([])
    useEffect(() => {
        fetch('vlogs.json')
        .then (res => res.json())
        .then (data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-2xl font-bold">Blogs</h1>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddBookMark ={handleAddBookMark } handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        
            
        </div>
    );
};

export default Blogs;