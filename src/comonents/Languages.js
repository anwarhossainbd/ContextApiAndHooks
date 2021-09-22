import React, {Fragment, useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputHook from "./InputHook";

const Languages = () => {

    const [ComputerLanguages,setComputerLanguages]=useState([
        {id:1 ,name:"PHP",Email:"Php@gmail.com"},
        {id:2 ,name:"NodeJs",Email:"NodeJs@gmail.com"},
        {id:3 ,name:"Python",Email:"Python@gmail.com"},
        {id:4 ,name:"C++",Email:"C++@gmail.com"}
    ]);


    // const [name,setName]=useState("");

    const[name,setname,clearName]=InputHook("");
    const[email,setEmail,clearEmail]=InputHook("");
    const [count,setCount]=useState(0);


    // const inputHandle=(event)=>{
    //    setName(event.target.value) ;
    // }


    const addLanguage = (event) => {
        event.preventDefault() ;
        setComputerLanguages([...ComputerLanguages,  {id:uuidv4() ,name:name,Email:email}]) ;
        clearName("")
        clearEmail("")
    }

    useEffect(()=>{
        console.log("Use Effect Method Run !")
    },[count])



    return (

        <Fragment>

            <h1>{count}</h1>

            <table className="table">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                </thead>
                <tbody>

                {
                    ComputerLanguages.map(language=>(
                        <tr key={language.id}>
                            <td>{language.id}</td>
                            <td>{language.name}</td>
                            <td>{language.Email}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table> <br />


            <form onSubmit={addLanguage}>

                <div className="form-group">
                    <input type="text" className="form-control" value={name} onChange={setname} placeholder="Add Languages.."/>
                </div> <br />

                <div className="form-group">
                    <input type="email" className="form-control" value={email} onChange={setEmail} placeholder="Add Emails.."/>
                </div> <br />

                <div className="form-group">
                    <input type="submit"  className="btn btn-primary" value="Add Language" />
                </div>
            </form> <br/>

            <div className="form-group">
                <input type="submit" value="Count" className="btn btn-info" onClick={()=>setCount(count+1)}/>
            </div>



        </Fragment>

    );
};

export default Languages;