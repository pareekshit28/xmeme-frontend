import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { FiEdit2, FiUser, FiLink2 } from 'react-icons/fi'
import './SubmitForm.css'


export const SubmitForm = () => {

    const history = useHistory()

    const { name, caption, url, id, method } = history.location.state
    const [meme,setmeme] = useState({name: name, caption: caption, url: url})

    const onSubmit = e => {
        e.preventDefault()

        if(method === 'post'){
            fetch('https://pareekshit-xmeme.herokuapp.com/memes',{
            method:"Post",
            body: JSON.stringify(meme),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => console.log(res.json())).catch(err => console.log(err))
        }else{
            fetch(`https://pareekshit-xmeme.herokuapp.com/memes/${id}`,{
            method: "PATCH",
            body: JSON.stringify(meme),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => console.log(res.json())).catch(err => console.log(err))
        }
        history.push('/temp')
        history.goBack()
        history.goBack()
    }

    return (
        <div className='form'>
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Label><FiUser/> Meme Owner</Form.Label>
                <Form.Control className="input" type='name' name="meme[name]" disabled={ (method === 'patch') ? "disabled" : ""}
                value={meme.name}
                onChange={e => setmeme({ ...meme, name: e.target.value })} placeholder='Enter your Name'/>
            </Form.Group>
            <Form.Group>
                <Form.Label><FiEdit2/> Caption</Form.Label>
                <Form.Control className="input" type='text' name="meme[caption]"
                value={meme.caption}
                onChange={e => setmeme({ ...meme, caption: e.target.value })} placeholder='Write a cool caption here'/>
            </Form.Group>
            <Form.Group>
                <Form.Label><FiLink2/> Meme URL</Form.Label>
                <Form.Control className="input" type='url' name="meme[url]"
                value={meme.url}
                onChange={e => setmeme({ ...meme, url: e.target.value })} placeholder='Enter url of your meme here'/>
            </Form.Group>
            <Form.Group>
                <Form.Control className="submit-button" type='submit' name="Submit" value={(method === 'post') ? 'Submit' : 'Update'}/>
            </Form.Group>
        </Form>
        </div>
    );
} 