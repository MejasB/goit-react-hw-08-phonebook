import styled from "styled-components";
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  padding: 20px 50px;
  max-width: 100%;
  min-height: 120px;
  align-items: center;
  color: #fff;
  background-color: rgb(232, 240, 254);
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.23);

  /* box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000; */

  .navLink {
    display: inline-block;
    text-align: center;
    padding: 5px 20px;
    min-width: 150px;
    background-color: darkkhaki;
    color: #ffffff;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    text-decoration: none;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    letter-spacing: 0.02857em;
    text-transform: uppercase;
    cursor: pointer;
    border: none;
  }
  .navLink:hover {
    background-image: linear-gradient(to bottom, darkkhaki, #070c73);
    text-decoration: none;
  }
  .navLinkActive {
    display: inline-block;
    text-align: center;
    padding: 5px 20px;
    min-width: 150px;
    background-image: linear-gradient(to bottom, darkkhaki, #070c73);
    text-decoration: none;
    border-radius: 4px;
    color: #ffffff;
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
      0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  .navLinks {
    display: flex;
    gap: 20px;
  }
`;
