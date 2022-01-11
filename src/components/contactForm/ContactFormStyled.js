import styled from 'styled-components';
export const ContactFormContainer = styled.form`
  width: 50vw;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: rgb(232, 240, 254);
`;

export const InputContainer = styled.input`
  display: block;
  min-width: 300px;
  padding: 5px 10px;
  margin-bottom: 15px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  :focus {
    outline: none;
    border: 2px solid #3f51b5;
  }
`;

export const LabelContainer = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 18px;
`;

export const ButtonContainer = styled.button`
  display: inline-block;
  text-align: center;
  padding: 5px 20px;
  min-width: 150px;
  background-color: #3f51b5;
  color: #ffffff;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  text-decoration: none;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  cursor: pointer;
  border: none;

  :hover {
    background-image: linear-gradient(to bottom, #3f51b5, #070c73);
    text-decoration: none;
  }
`;
