import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Users(){

    const [state, setState] = useState([])

    useEffect(() =>{
        fetch('https://backendsss.herokuapp.com/users')
        .then(res => res.json())
        .then(data => setState(data))
    }, [state])

    function deleteUser(e){
        fetch(`https://backendsss.herokuapp.com/users/${e.target.dataset.id}`, {
            method: "DELETE"
        })
    }

  return(
    <>

    <h1>Users</h1>

    <ul>
        {
            state.map(u => {
                return(
                    <li key={u.id}><Link to={`/posts/${u.id}`} key={u.id}>{u.name}</Link> <button data-id={u.id} onClick={deleteUser}>&times;</button></li>
                )
            })
        }
    </ul>



     </>  
  )
}
export default Users;