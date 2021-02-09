import React from 'react'
import { useState,useEffect } from 'react'
import BlogList from './BlogList';

function Home() {
    //The useState hook causes the component to render everytime its state changes
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    //The useEffect hook fires everytime when the component renders
    //The useEffect hook fires the below function on:
    //1. Initial load of the component
    //2. Everytime the component renders
    useEffect(()=>{

    })
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
        </div>
    )
}

export default Home
