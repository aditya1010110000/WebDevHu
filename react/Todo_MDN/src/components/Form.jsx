import { useState } from "react";

function Form(props) {

  function handleSubmit(event) {
    event.preventDefault();
    if(name === ""){
      alert("Kindly write the correct task!!");
      console.log("Kindly write the correct task!!");
    }
    else{
    props.onSubmit(name);
    setName("");
    }
  }

  function handleChange(event) {
    setName(event.target.value);
    // console.log(event.target.value);
  }
  

  const [name, setName] = useState("");

  return (
    
    <form onSubmit={handleSubmit}>

        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Add
        </button>
      </form>
  )
}

export default Form;