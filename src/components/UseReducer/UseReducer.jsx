import { useReducer } from "react";

function UseReducer() {
  const initState = { username: "", email: "", note: "" };

  const reducer = (state ,action) => {
    switch(action.type) {
        case 'reset' : return initState;
        case 'input' : return {...state,[action.filed] : action.value}
    }
  }


  const [state, dispatch] = useReducer(reducer, initState);

  function handleChange(e) {
    dispatch({
        type: 'input', 
        filed : e.target.name, 
        value : e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    
  }

  return (
    <div>
      <form className="flex flex-col " onSubmit={handleSubmit}>
        <input
          className="self-center border border-black p-1 my-3 rounded-lg"
          name="username"
          type="text"
          value={state.username}
          onChange={handleChange}
        ></input>
        <input
          className="self-center border border-black p-1 my-3 rounded-lg"
          name="email"
          type="email"
          value={state.email}
          onChange={handleChange}
        ></input>
        <textarea
          className="self-center border border-black p-1 my-3 rounded-lg"
          name="note"
          value={state.note}
          onChange={handleChange}
        ></textarea>

        <button type="submit">submit</button>

        <button
          type="button"
          onClick={() => {
            dispatch({ type: "reset" });
          }}
        >
          reset
        </button>
      </form>
    </div>
  );
}

export default UseReducer;