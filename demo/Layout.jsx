import styled from 'styled-components';

export const Main = styled.main`
  box-sizing: border-box;
  display: grid;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

export const Header = styled.header``;

export const Title = styled.h1`
  text-align: center;
  font-size: 3.3em;
  font-weight: 500;
`;

export const SubTitle = styled.h1`
  font-size: 1.5em;
  font-weight: 500;
`;

export const Article = styled.article`
  padding: 1em;
  font-size: 1.25em;
  line-height: 1.5;

  width: 750px;
  margin: auto;

  @media (max-width: 900px) {
    width: 100%;
    margin: 0;
  }

  @media (max-width: 520px) {
    font-size: 1em;
  }
`;

export const Interactive = styled.div`
  margin: 3em 0;
  font-size: 0.8em;
`;

export const Caption = styled.div`
  margin: 2em 0;
  text-align: center;
  color: #aaa;
`;

export const Container = styled.div`
  width: 475px;
  margin: 1em auto;
  padding: 1em;
  background-color: #fff;
  color: #333;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 4px #00000018;

  @media (max-width: 520px) {
    width: 100%;
  }
`;
