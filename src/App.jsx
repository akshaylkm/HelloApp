import { useState } from "react";

function App() {
  const [fname,setFname]=useState("");
  const [lname,setLname]=useState("");
  const fnameChangeHandler=(event)=>{
    setFname(event.target.value);
  };
  const lnameChangeHandler=(event)=>{
      setLname(event.target.value);
  };
  const submitNameHandler=(event)=>{
    event.preventDefault();
    console.log(fname,lname);
  }
  
  return (
    <div className=" bg-amber-400 h-screen flex flex-col justify-center items-center sm:px-2 ">
      <h1 className=" font-bold text-3xl mb-3">Hello {fname} {lname} :)</h1>
      <form onSubmit={submitNameHandler}>
        <input className=" opacity-80 w-64 sm:w-80 h-12 mb-2 pl-3" type="text" value={fname} placeholder="F Name" onChange={fnameChangeHandler} />
        <br />
        <input className=" opacity-80 w-64 sm:w-80 h-12 mb-2 pl-3" type="text" value={lname} placeholder="L Name" onChange={lnameChangeHandler} />
        <br />
        <button className=" bg-orange-600 w-64 sm:w-80 h-12 text-red-50 font-medium hover:bg-red-600">SUBMIT</button>
      </form>
    </div>
  );
}

export default App;
