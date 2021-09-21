import React, {Fragment, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import InputHook from "./InputHook";

const Languages = () => {

    const [ComputerLanguages,setComputerLanguages]=useState([
        {id:1 ,name:"PHP"},
        {id:2 ,name:"NodeJs"},
        {id:3 ,name:"Python"},
        {id:4 ,name:"C++"}
    ]);


    // const [name,setName]=useState("");

     const[name,setName,clear]=InputHook("");

    // const inputHandle=(event)=>{
    //    setName(event.target.value) ;
    // }


    const addLanguage = (event) => {
        event.preventDefault() ;
        setComputerLanguages([...ComputerLanguages,  {id:uuidv4() ,name:name}]) ;
        clear("")
    }



    return (

        <Fragment>

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
                        </tr>
                    ))
                }
                </tbody>
            </table> <br />


            <form onSubmit={addLanguage}>

                <div className="form-group">
                    <input type="text" className="form-control" value={name} onChange={setName} placeholder="Add Languages.."/>
                </div> <br />

                <div className="form-group">
                    <input type="submit"  className="btn btn-primary" value="Add Language" />
                </div>
            </form>



        </Fragment>

    );
};

export default Languages;