import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";

import HorizontalScroll from "./horizontal-scroll";

var image_url = 'https://get.wallhere.com/photo/mountains-nature-snow-sunrise-morning-mist-horizon-ultrawide-Alps-summit-plateau-ridge-cloud-mountain-dawn-atmospheric-phenomenon-mountainous-landforms-landform-geographical-feature-mountain-range-1689.png'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
`;

const Main = styled.main``;

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 50vh;
`;

const BumperSection = styled.section`
  color: white;
  text-align: center;
  padding: 100px 16px;
  width: 100%;

  background-image:url(${image_url});
  background-position: center, left;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 0 25px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const SampleCard = styled.div`
  position: relative;
  height: 50%;
  width: 50%;
  min-height: 150px;
  min-width: 150px;
  background-color: #111f30;
  margin-right: 25px;
  flex-shrink: 0;
`;

const SampleCards = React.memo(() =>
  Array(6)
    .fill(0)
    .map((_e, i) => <SampleCard key={`sampleCard-${i}`} />)
);

const HeaderText = styled.h1`
  color: white;
  font-size: 100px;
  font-weight: 115%
  font-family: 'Montserrat';
`

const App = () => (
  <>
    <GlobalStyle />
    <Main>
      <BumperSection>
        <HeaderText>Testimonials</HeaderText>
      </BumperSection>
      <HorizontalSection>
        <HorizontalScroll>
          <CardsContainer>
              <SampleCards />
          </CardsContainer>
        </HorizontalScroll>
      </HorizontalSection>
      <BumperSection>
      </BumperSection>
    </Main>
  </>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);