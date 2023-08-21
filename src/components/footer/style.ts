import styled from "styled-components";

export const Container = styled.footer`
  background-color: ${(props) => props.theme.color.darkGray};
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text = styled.h1`
  color: #eee;
  font-family: ${(props) => props.theme.fonts.Hind};
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 20px 0 10px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const SubText = styled.p`
  color: #eee;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.inter};
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  font-size: 1rem;
  margin: 7px;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Button = styled.button`
  border-radius: 5px;
  width: 290px;
  height: 48px;
  background-color: ${(props) => props.theme.color.red};
  margin: 50px 0px 0px;

  a {
    color: ${(props) => props.theme.color.white};
  }
`;

export const FooterContainer = styled.div`
  background-color: #111111;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  @media (min-width: 768px) {
    max-height: 133px;
    gap: 0px;
  }

  div {
    max-width: 1200px;
    width: 100%;
    margin: 0px auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    p {
      color: ${(props) => props.theme.color.white};
      font-family: ${(props) => props.theme.fonts.inter};
      font-size: 0.9rem;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      margin: 2px 0;

      strong {
        a {
          color: #2c752b;
        }
      }

      @media (min-width: 768px) {
        margin: 10px 0;
        font-size: 1rem;
      }
    }

    @media (min-width: 768px) {
      gap: 10px;
      flex-direction: row;
    }
  }
`;
