import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 6px 0px #0000007a;
  .logo {
    padding: 5px 0;
    object-fit: cover;
    width: 110px;
    height: 60px;
  }

  @media (min-width: 768px) {
    height: 100px;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;
