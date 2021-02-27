import { useState,useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        console.log('UseEffect ran!');
        
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(data => {
                    
                    setBlogs(data);
                    console.log(data);
                }
            );
    },[]);

    return (
        <div className="home">
            { blogs && <BlogList blogs={blogs} title="all blogs" /> }
        </div>
    );
}

export default Home;