import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { FiEdit, FiClipboard } from 'react-icons/fi'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './post.css'

export const Post = ({data}) => {
    
    return (
        <Card className="card">
            <Card.Header id="card-header">
                <div>
                <p>{data.name}</p><p style={{fontSize:"0.9rem"}}>{data && data.date && data.date.split("T")[0]}</p>
                </div>
                <div>
                <Link to={{
                    pathname: '/create',
                    state: {
                        name: data.name,
                        caption: data.caption,
                        url: data.url,
                        id: data._id,
                        method: 'patch'
                    }
                }
                }>
                <div className="edit-icon">
                <FiEdit style={{marginBottom:"6px"}}/> Edit
                </div>
                </Link>
                <CopyToClipboard text={data._id}>
                    <span className="edit-icon copy-hover"><FiClipboard/> Copy Id</span>
                </CopyToClipboard>
                </div>
            </Card.Header>
            <div>
            <Card.Title>{data.caption}</Card.Title>
            <Card.Img  id="meme" variant="bottom" src={data.url}/>
            </div>
        </Card>
    )
}