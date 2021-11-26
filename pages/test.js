import api from '../components/api/contacts'
import react, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home () {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
          try{
            const response = await api.get('/products');
            setPosts(response.data);
            console.log(posts)
          }catch (err) {
    
          }
        };
    
        fetchPosts()
      }, [])
    return(
        <main>
            {posts.map((name) => (
                <div key={name.id}> {name.id} {name.name} {name.image}</div> 
            ))}
        </main>
    )
}