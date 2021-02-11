import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Post } from '../../components/Post/post'
import { Navbar } from '../../components/Navbar/Navbar'
import './HomePage.css'

export const HomePage = () => {

    const [memes, setmemes] = useState([]);

    useEffect(() => {
        fetch('https://pareekshit-xmeme.herokuapp.com/memes')
            .then(res => res.json()
                .then(res => res.length ? setmemes(res.reverse()) : {}));
    }, [])


    return (
        <div className="bodydiv">
            {
                memes.map( meme => <Post key={meme._id} data={meme}/>)
            }
            <Navbar/>
            <Link to={{
                pathname: '/create',
                state: {
                    name: '',
                    caption: '',
                    image: '',
                    id: '',
                    method: 'post'
                }
            }}>
            <button className="create-button">Create Meme</button>
            </Link>
         </div>
    )
}