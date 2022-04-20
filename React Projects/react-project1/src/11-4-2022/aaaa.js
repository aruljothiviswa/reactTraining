// import { useState } from "react";

// export default function EventHandler() {
//     const [user, setUser] = useState('')
//     const handler = (event) => setUser(event.target.value)
//     return (
//         <>

//             UserName: <input name="user" value={user} onChange={handler} /> <br />
//             Result : {user}

//         </>
//     )
// }

import { useState } from "react"

// export default function SearchComponent() {
//     const [search, setSearch] = useState('')
//     const data = [
//         { productId: 101, productName: 'LG Monitor' },
//         { productId: 102, productName: 'Samsung Monitor' },
//     ]
//     return (
//         <>
//             Enter ProductName: <input value={search} onChange={(e) => setSearch(e.target.value)} />
//             {data.filter(item => item.productName.toLowerCase().includes(search.toLowerCase())).map(item => <li key={item.productId}>{item.productId}-{item.productName}</li>)}
//         </>
//     )
// }

import { useState } from "react";
export default function Registration(){
    const [data, setData ] = useState({userName:'', email:'', password:'', confirmPassword:''})
    const {userName, email, password, confirmPassword} = data;
    const changeHandler = (event) => {
        setData({...data, [event.target.name]: event.target.value})
    }
    const submitHandler = (event) =>{
        event.preventDefault()
        if(userName.length<5)
            alert('UserName should be atleast 5 characters')        
        else if(password !== confirmPassword)
            alert("Passwords are not matching")        
        else console.log(data)
    }
    return(
        <>
            <form onSubmit={submitHandler}>
                UserName:<input type='text' name='userName' value={userName} onChange={changeHandler} /> <br/>
                Email:<input type='email' name='email' value={email} onChange={changeHandler} /><br/>
                Password:<input type='password' name='password' value={password} onChange={changeHandler} /><br/>
                Confirm Password:<input type='password' name='confirmPassword' value={confirmPassword} onChange={changeHandler} /><br/>
                <input type='submit' name='submit'/>
            </form>
        </>
    )
}