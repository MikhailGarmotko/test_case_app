import React from 'react';
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { postFeedBack, selectFeedBack } from "./redux/feedback/reducers";
import { useState } from "react";

const App:React.FC = () => {
  const dispatch = useAppDispatch();
  
  const { data, pending, error } = useAppSelector(selectFeedBack);
   
  const [responseBody, setResponseBody] = useState({});
;
      const inputChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        const { name, value } = event.target;
        setResponseBody({ ...responseBody, [name]: value });
      };
  const onSubmitForm = (e: React.BaseSyntheticEvent<any>) => { e.preventDefault(); dispatch(postFeedBack(responseBody))};
  return (
    <form onSubmit={onSubmitForm}>
      <input
        placeholder="Your name"
        name="name"
        onChange={(e) => inputChangeHandler(e)}
      ></input>
      <input
        placeholder="Your email"
        name="email"
        onChange={(e) => inputChangeHandler(e)}
      ></input>
      <input
        placeholder="Your message"
        name="message"
        onChange={(e) => inputChangeHandler(e)}
      ></input>
      <button>Submit</button>
    </form>
  );
}

export default App;
