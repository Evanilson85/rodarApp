import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 30px auto;
  display: flex;

  .containerText {
    display: flex;
    flex-direction: column;
    padding: 20px;

    .paragraphs {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 5px;
    }

    h1 {
      color: ${(props) => props.theme.color.redText};
      font-family: ${(props) => props.theme.fonts.Hind};
      font-size: 1.8rem;
      font-style: normal;
      font-weight: 700;
      border: 0 0 20px;
    }

    p {
      color: ${(props) => props.theme.color.darkGray};
      font-family: ${(props) => props.theme.fonts.inter};
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 300;
      line-height: normal;

      @media (min-width: 768px) {
        font-size: 1.5rem;
      }
    }
  }
`;

export const ContainerFlex = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
