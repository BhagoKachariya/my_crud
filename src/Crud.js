import React, { useState } from 'react'


const Crud = () => {
    const [user, setUser] = useState({
        fname: '',
        email: '',
        password: '',
        phone: ''
    });
    const [record, setRecord] = useState([]);
    const [isedit, setIsedit] = useState(false);
    const [active, setActive] = useState(" ");
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        // console.log(user);
      if(isedit){
        let tdata = record;
        Object.assign(tdata[active], user);
        setRecord([...tdata]);
        setIsedit(false);
        setUser({
            fname: '',
            email: '',
            password: '',
            phone: ''
        })
      }else{
        setRecord([...record, user]);
        setUser({
            fname: '',
            email: '',
            password: '',
            phone: ''
        })
      }
    }
    console.log(record);
    const handleDelete = (item) =>{
        const data = record.filter((i) => i !== item);
        setRecord([...data]);
    }
    const handleEdit =(index)=>{
        const tempdata = record[index];
       setUser({
        fname : tempdata.fname,
        email : tempdata.email,
        password : tempdata.password,
        phone : tempdata.phone,
    })
    setIsedit(true);
    setActive(index);
    }
    return (
        <>
            <form onSubmit={handlesubmit}>
                <input type='text' name='fname' placeholder='enter name' value={user.fname} onChange={handleChange} required/>
                <br />
                <input type='email' name='email' placeholder='enter email' value={user.email} onChange={handleChange} required/>
                <br />
                <input type='password' name='password' placeholder='enter password' value={user.password} onChange={handleChange} required/>
                <br />
                <input type='number' name='phone' placeholder='enter phone' value={user.phone} onChange={handleChange} required/>
                <br />
                <button type='submit'>{isedit ? "Update" : "ADD"}</button>
            </form>
            <table style={{  border: "1px solid black", borderCollapse: "collapse",  width: "100%"}}>
                <thead>
                    <tr>
                        <th style={{  border: "1px solid black",  height: "30px"}}>Name</th>
                        <th style={{  border: "1px solid black",  height: "30px"}}>Email</th>
                        <th style={{  border: "1px solid black",  height: "30px"}}>Password</th>
                        <th style={{  border: "1px solid black",  height: "30px"}}>Phone</th>
                        <th style={{  border: "1px solid black",  height: "30px"}}>operation</th>
                        <th style={{  border: "1px solid black",  height: "30px"}}>operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record.map((item,index) => {
                           return(
                            <tr key={index}>
                                <td style={{  border: "1px solid black"}}>{item.fname}</td>
                                <td style={{  border: "1px solid black"}}>{item.email}</td>
                                <td style={{  border: "1px solid black"}}>{item.password}</td>
                                <td style={{  border: "1px solid black"}}>{item.phone}</td>
                                <td style={{  border: "1px solid black"}}><button onClick={()=>handleEdit(index)}>Edit</button></td>
                                <td style={{  border: "1px solid black"}}><button onClick={()=>handleDelete(item)}>Delete</button></td>
                            </tr>
                           )
                        })
                    }

                </tbody>
            </table>
        </>
    )
}

export default Crud
