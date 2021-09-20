import React, {Fragment, useState} from 'react';

const Languages = () => {

    const [ComputerLanguages,setComputerLanguages]=useState([
        {id:1 ,name:"PHP"},
        {id:2 ,name:"NodeJs"},
        {id:3 ,name:"Python"},
        {id:4 ,name:"C++"}
    ]);

    return (

        <Fragment>

            <table className="table">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                </thead>
            </table>

        </Fragment>

    );
};

export default Languages;