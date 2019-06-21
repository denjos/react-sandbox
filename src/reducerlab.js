import React, { useReducer, useRef } from "react";

function Count() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "+":
        return state + 1;
      case "-":
        return state - 1;
      default:
        return state;
    }
  }, 0);

  return (
    <div>
      {count}
      <button
        onClick={() => {
          dispatch("+");
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch("-");
        }}
      >
        decrement
      </button>
    </div>
  );
}

function ShoppingList() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ];
      case "remove":
        return state.filter((_, index) => index !== action.index);
      case "clear":
        return [];
      default:
        return state;
    }
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    inputRef.current.value = "";
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <button
        onClick={() => {
          dispatch({ type: "clear" });
        }}
      >
        clear
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() => {
                dispatch({ type: "remove", index });
              }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export { Count, ShoppingList };
