import styled from "styled-components";

export const header = styled.header`
  margin: 60px 0 20px;

  @media (min-width: 768px) {
    margin: 100px 0 20px;
  }

  .containerMobile {
    position: relative;
  }

  .mobile {
    min-height: 100vh;
    background: rgb(191, 20, 29);
    background: linear-gradient(
      180deg,
      rgba(191, 20, 29, 1) 0%,
      rgba(191, 20, 29, 1) 57%,
      rgba(238, 239, 241, 1) 50%,
      rgba(238, 239, 241, 1) 100%
    );

    @media (min-width: 768px) {
      display: none;
    }
    img {
      width: 80%;
    }

    img:nth-child(2) {
      width: 100%;
    }

    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;

      .numberInfo {
        width: 20px;
        height: 20px;
        background: #bc0512;
        border-radius: 50%;
        align-items: center;
        display: flex;
        justify-content: center;
        color: #fff;
        margin: 10px;
      }

      .text {
        font-family: ${(props) => props.theme.fonts.inter};
        color: #bc0512;
        flex: 1;
      }
    }
  }

  .desktop {
    background: rgb(191, 20, 29);
    background: linear-gradient(
      90deg,
      rgba(191, 20, 29, 1) 0%,
      rgba(191, 20, 29, 1) 49%,
      rgba(238, 239, 241, 1) 50%,
      rgba(238, 239, 241, 1) 100%
    );

    align-items: center;
    justify-content: center;
    height: auto;
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }

    img {
      object-fit: cover;
      width: 60%;

      @media (min-width: 1200px) {
        width: 63%;
      }
    }
  }
`;
