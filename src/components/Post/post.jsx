import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { FiEdit } from 'react-icons/fi'
import './post.css'

export const Post = ({data}) => {

    return (
        <Card className="card">
            <Card.Header id="card-header">
                <div>
                <p>{data.name}</p><p style={{fontSize:"0.9rem"}}>{data.date.split("T")[0]}</p>
                </div>
                <Link to={{
                    pathname: '/create',
                    state: {
                        name: data.name,
                        caption: data.caption,
                        image: data.image,
                        id: data._id,
                        method: 'patch'
                    }
                }
                }>
                <div className="edit-icon">
                <FiEdit style={{marginBottom:"6px"}}/> Edit
                </div>
                </Link>
            </Card.Header>
            <div>
            <Card.Title>{data.caption}</Card.Title>
            <Card.Img  id="meme" variant="bottom" src={data.image}/>
            </div>
        </Card>
    )
}