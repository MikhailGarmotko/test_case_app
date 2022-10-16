import React from "react";
import { useAppDispatch, useAppSelector } from "./redux/hook";
import { postFeedBack, selectFeedBack } from "./redux/feedback/reducers";
import { useState } from "react";
import img from "./styles/img/Vector2.png"
import smile from "./styles/img/smile_footer.png";
import smile2 from "./styles/img/smile_footer2.png";
import {
  FeedBackFormPicture,
  Container,
  FeedBackPicture,
  Button,
  Title,
  Form,
  Footer,
  FeedbackContainer,
  GlobalStyle,
  Input,
  TextInput,
  FeedBackForm,Img,
  Smile,Smile2,Smile3
} from "./styles/style";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  const { data, pending, error } = useAppSelector(selectFeedBack);

  const [responseBody, setResponseBody] = useState({});
  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setResponseBody({ ...responseBody, [name]: value });
  };
  const inputChangeTextHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setResponseBody({ ...responseBody, [name]: value });
  };
  const onSubmitForm = (e: React.BaseSyntheticEvent<any>) => {
    e.preventDefault();
    dispatch(postFeedBack(responseBody));
  };
  return (
    <>
      {" "}
      <GlobalStyle />
      <Container>
        <FeedbackContainer>
          <FeedBackForm>
            <FeedBackFormPicture>
              <Img>
                {/* <img src={img}></img> */}
              </Img>
            </FeedBackFormPicture>
            <Form onSubmit={onSubmitForm}>
              <Title>Reach out to us!</Title>
              <Input
                placeholder="Your name*"
                name="name"
                onChange={(e) => inputChangeHandler(e)}
              ></Input>
              <Input
                placeholder="Your email*"
                name="email"
                onChange={(e) => inputChangeHandler(e)}
              ></Input>
              <TextInput
                placeholder="Your message*"
                name="message"
                onChange={(e) => inputChangeTextHandler(e)}
              ></TextInput>
              <Button>Send message</Button>
            </Form>
          </FeedBackForm>
          <FeedBackPicture></FeedBackPicture>
        </FeedbackContainer>
        <Footer>
          <Smile></Smile>
          <Smile2>
            <svg
              fill="grey"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16px"
              height="16px"
            >
              <path d="M 15 3.296875 C 14.476563 3.523438 13.949219 3.691406 13.367188 3.746094 C 13.949219 3.410156 14.417969 2.84375 14.648438 2.226563 C 14.066406 2.5625 13.484375 2.789063 12.84375 2.902344 C 12.257813 2.339844 11.5 2 10.683594 2 C 9.109375 2 7.824219 3.242188 7.824219 4.765625 C 7.824219 4.988281 7.824219 5.214844 7.882813 5.386719 C 4.875 5.386719 2.8125 3.691406 1.414063 2 C 1.121094 2.394531 1.003906 2.902344 1.003906 3.410156 C 1.003906 4.367188 1.53125 5.214844 2.289063 5.722656 C 1.820313 5.667969 1.355469 5.554688 1.003906 5.386719 C 1.003906 5.386719 1.003906 5.386719 1.003906 5.441406 C 1.003906 6.796875 1.996094 7.921875 3.28125 8.148438 C 3.046875 8.203125 2.8125 8.261719 2.519531 8.261719 C 2.347656 8.261719 2.171875 8.261719 1.996094 8.207031 C 2.347656 9.335938 3.976563 10.632813 5.257813 10.632813 C 4.265625 11.363281 3.34375 12 1.5 12 C 1.265625 12 1.453125 12 1 12 C 2.28125 12.789063 3.800781 13 5.375 13 C 10.683594 13 13.542969 8.769531 13.542969 5.101563 C 13.542969 4.988281 13.542969 4.878906 13.542969 4.765625 C 14.125 4.367188 14.59375 3.863281 15 3.296875" />
            </svg>
            <svg
              fill="grey"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16px"
              height="16px"
            >
              <path d="M 3.5 1 C 2.1250151 1 1 2.1250151 1 3.5 L 1 11.5 C 1 12.874985 2.1250151 14 3.5 14 L 11.5 14 C 12.874985 14 14 12.874985 14 11.5 L 14 3.5 C 14 2.1250151 12.874985 1 11.5 1 L 3.5 1 z M 3.5 2 L 11.5 2 C 12.335015 2 13 2.6649849 13 3.5 L 13 11.5 C 13 12.335015 12.335015 13 11.5 13 L 9.9042969 13 L 9.9042969 8.9667969 L 11.300781 8.9667969 L 11.509766 7.3574219 L 9.9042969 7.3574219 L 9.9042969 6.3320312 C 9.9042969 5.8660312 10.034031 5.5488281 10.707031 5.5488281 L 11.566406 5.5488281 L 11.566406 4.109375 C 11.417406 4.089375 10.907453 4.046875 10.314453 4.046875 C 9.0764531 4.046875 8.2304688 4.795875 8.2304688 6.171875 L 8.2304688 7.3574219 L 7 7.3535156 L 7 8.9628906 L 8.2304688 8.9667969 L 8.2304688 13 L 3.5 13 C 2.6649849 13 2 12.335015 2 11.5 L 2 3.5 C 2 2.6649849 2.6649849 2 3.5 2 z" />
            </svg>
            <svg
              fill="grey"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16px"
              height="16px"
            >
              <path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z" />
            </svg>
            <svg
              fill="grey"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16px"
              height="16px"
            >
              <path d="M 3.5 2 C 2.6774686 2 2 2.6774686 2 3.5 L 2 12.5 C 2 13.322531 2.6774686 14 3.5 14 L 12.5 14 C 13.322531 14 14 13.322531 14 12.5 L 14 3.5 C 14 2.6774686 13.322531 2 12.5 2 L 3.5 2 z M 3.5 3 L 12.5 3 C 12.781469 3 13 3.2185314 13 3.5 L 13 12.5 C 13 12.781469 12.781469 13 12.5 13 L 3.5 13 C 3.2185314 13 3 12.781469 3 12.5 L 3 3.5 C 3 3.2185314 3.2185314 3 3.5 3 z M 8 4 L 8 9.5 C 8 10.33 7.33 11 6.5 11 C 5.67 11 5 10.33 5 9.5 C 5 8.67 5.67 8 6.5 8 C 6.68 8 6.84 8.0298438 7 8.0898438 L 7 7.0507812 C 6.84 7.0207812 6.67 7 6.5 7 C 5.12 7 4 8.12 4 9.5 C 4 10.88 5.12 12 6.5 12 C 7.88 12 9 10.88 9 9.5 L 9 6.2109375 C 9.165316 6.3496799 9.2903403 6.5561561 9.4804688 6.6425781 C 10.313461 7.021211 11.25 7 12 7 L 12 6 C 11.25 6 10.436539 5.978789 9.8945312 5.7324219 C 9.3525237 5.4860548 9 5.1166667 9 4 L 8 4 z" />
            </svg>
          </Smile2>
          <Smile3>
            <img src={smile2}></img>
          </Smile3>
        </Footer>
      </Container>
    </>
  );
};



export default App;
