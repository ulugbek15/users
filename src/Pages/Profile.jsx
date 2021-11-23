import { useRef} from 'react';

function Profile(){
    
    const name = useRef('') 
    const surname = useRef('') 
    const email = useRef('') 
    const address = useRef('') 
    
    // const [name, setName] = useState('')
    // const [surname, setSurname] = useState('')
    // const [email, setEmail] = useState('')
    // const [address, setAddress] = useState('')
    
    function hendleSubmit(e){
        e.preventDefault()
        
        fetch('https://backendsss.herokuapp.com/users', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name.current.value ,
            surname: surname.current.value,
            email: email.current.value,
            address: address.current.value
        })
    })
}




return(
    <>
    
    <h1>Profile</h1>
    
    <form onSubmit={hendleSubmit} >
    <input ref={name}  type="text" placeholder="name"/>
    <input ref={surname}  type="text" placeholder="surname"/>
    <input ref={email}  type="text" placeholder="email"/>
    <input ref={address}  type="text" placeholder="address"/>
    <button type="submit">Submit</button>
    </form>
    </>  
    )
}
export default Profile