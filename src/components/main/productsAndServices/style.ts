import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 30px;
  /* display: flex; */

  section {
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: 0 auto 50px;

      h1 {
        color: ${(props) => props.theme.color.redText};
        font-family: ${(props) => props.theme.fonts.Hind};
        font-size: 1.8rem;
        font-style: normal;
        font-weight: 700;
        text-align: center;
      }
    }

    .containerCards {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: space-around;

      .card {
        width: 334px;
        height: 366px;
        overflow: auto;
        /* border: 1px solid #000; */
        /* filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)); */
        border-radius: 20px;
        background: #fafafa;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 20px;

        .text {
          padding: 15px 20px 10px;
          h3 {
            color: #000;
            font-family: ${(props) => props.theme.fonts.inter};
            font-size: 21px;
            font-style: normal;
            font-weight: 700;
            margin: 0 0 10px;
            line-height: normal;
          }

          p {
            color: #000;
            font-family: ${(props) => props.theme.fonts.inter};
            font-size: 17px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
          }
        }
        img {
          object-fit: cover;
          height: 237px;
          width: 100%;
        }
      }
    }
  }
`;
