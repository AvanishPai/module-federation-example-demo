import * as React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const LoginPageRoot = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: #fbfef9;

  & * {
    font-family: "Roboto", sans-serif;
    color: #000004;
  }
`;

const Form = styled.form`
  width: 400px;
  margin: auto;
  margin-top: 20vh;
  display: flex;
  flex-direction: column;
  border: 1px solid #dedede;
  padding: 30px;
  background-color: #fff;
  border-radius: 4px;
`;

const Control = styled.div`
  & + & {
    margin-top: 24px;
  }
  width: 100%;
`;

const Input = styled.input`
  border: 1px solid #dedede;
  height: 36px;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 4px;
  padding-left: 16px;

  &:active,
  &:focus {
    border-color: #0c6291;
    outline: #0c6291;
  }
`;

const Button = styled.button`
  all: unset;
  border: 1px solid #0c6291;
  background: #0c6291;
  color: white;
  border-radius: 4px;
  margin-top: 24px;
  padding: 4px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:disabled,
  &[disabled] {
    opacity: 0.5;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 12px;
`;

export default function LoginPage(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setTimeout(() => {
      props.onLoginSuccess && props.onLoginSuccess();
    }, 500);
  };

  return (
    <LoginPageRoot>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3>Log in</h3>
        {/* register your input into the hook by invoking the "register" function */}
        <Control>
          <Input
            {...register("username", { required: true })}
            placeholder="Username"
            autoComplete="off"
          />
          {errors.username && <Error>User name is required</Error>}
        </Control>

        <Control>
          <Input
            {...register("password", { required: true })}
            type="password"
            placeholder="Password"
          />
          {errors.password && <Error>Password is required</Error>}
        </Control>

        <Button>Log In</Button>
      </Form>
    </LoginPageRoot>
  );
}
