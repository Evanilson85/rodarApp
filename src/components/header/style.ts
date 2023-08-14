import styled from "styled-components";

export const header = styled.header`
  height: 640px;

  .desktop {
    background: rgb(191, 20, 29);
    background: linear-gradient(
      90deg,
      rgba(191, 20, 29, 1) 0%,
      rgba(191, 20, 29, 1) 49%,
      rgba(238, 239, 241, 1) 50%,
      rgba(238, 239, 241, 1) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    /* max-height: 640px; */
    img {
      /* width: 100%; */

      object-fit: cover;
      width: 60%;
      @media (min-width: 1200px) {
        width: 63%;
      }
    }
  }

  .container {
    width: 80%;
    background-color: red;
    height: 100%;

    border: 320px solid;
    border-color: #bf141d #eeeff1 #bf141d #bf141d;
    /* height: 640px; */
  }
`;
