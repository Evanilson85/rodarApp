import styled from "styled-components";

export const Container = styled.div`
  height: 300px;
  background-color: ${(props) => props.theme.color.red};
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const Text = styled.h1`
  color: #eee;
  font-family: ${(props) => props.theme.fonts.Hind};
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const TextInfo = styled.p`
  color: #eee;
  text-align: center;
  font-family: ${(props) => props.theme.fonts.inter};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
