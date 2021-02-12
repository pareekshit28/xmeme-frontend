import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Post } from '../../components/Post/post'
import { Navbar } from '../../components/Navbar/Navbar'
import './HomePage.css'

export const HomePage = ({match}) => {

    const [memes, setmemes] = useState([]);

    const fetchMemes = () => {
        if(match.params.postId === undefined){
            fetch('https://pareekshit-xmeme.herokuapp.com/memes')
            .then(res => res.json()
                .then(res => res.length ? setmemes(res.reverse()) : {})); //All Posts
    
        }else{
            fetch(`https://pareekshit-xmeme.herokuapp.com/memes/${match.params.postId}`)
            .then(res => res.json()
                .then(res =>  setmemes(res))); //Specific Post
    
        }}
    
    // eslint-disable-next-line
    useEffect(fetchMemes,[memes])


    return (
        <div className="bodydiv">
            {
                (memes.length > 0) ? memes.map( meme => <Post key={meme._id} data={meme}/>) : <Post key={memes._id} data={memes}/> //Returns an array of all the memes 
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