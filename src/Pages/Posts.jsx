import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'

function Posts(){

    const [state, setState] = useState([])

    useEffect(() =>{
        fetch('https://backendsss.herokuapp.com/posts')
        .then(res => res.json())
        .then(data => setState(data))
    }, [])

    const [comments, setComments] = useState([])

    useEffect(() =>{
        fetch('https://backendsss.herokuapp.com/comments')
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])

  return(
    <>

    <h1>Posts <Link to="/">Home</Link></h1>

    <ul>
        {
            state.map(u => {
                return(
                    <details key={u.id}>
                        <summary>{u.body}</summary>
                        {
                            comments.filter(c => u.id === c.PostId).map(com => {
                                return(
                                    <li key={com.id}>
                                        {com.body}
                                    </li>
                                )

                            })
                        }
                    </details>
                )
            })
        }
    </ul>

     </>  
  )
}
export default Posts;