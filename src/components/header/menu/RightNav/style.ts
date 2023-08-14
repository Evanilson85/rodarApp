import styled from "styled-components";

export const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  flex: 1;
  margin: 0 0 0 50px;

  li {
    padding: 18px 10px;
    font-size: 18px;
    font-family: ${(props) => props.theme.fonts.inter};
    font-weight: 400;
    text-transform: uppercase;
    color: #000000;
    cursor: pointer;
    &:hover {
      color: red;
      font-weight: 700;
    }

    &:focus {
      font-weight: 700;
    }
  }

  button {
    background-color: #212121;
    padding: 0px 10px;
    margin: 10px;
    font-family: ${(props) => props.theme.fonts.inter};
    font-weight: 700;
    text-transform: uppercase;
    height: 48px;
    border-radius: 5px;
    color: #fff;
    width: 186px;
    cursor: pointer;
  }

  .buttonApp {
    flex: 1;
    display: flex;
    justify-content: end;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;
