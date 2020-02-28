import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";

import HorizontalScroll from "./horizontal-scroll";

var image_url = 'https://get.wallhere.com/photo/mountains-nature-snow-sunrise-morning-mist-horizon-ultrawide-Alps-summit-plateau-ridge-cloud-mountain-dawn-atmospheric-phenomenon-mountainous-landforms-landform-geographical-feature-mountain-range-1689.png'
var data = [
  {"Name":"Ann", "Comment":"Ton is a great speaker!"},
  {"Name":"Sam", "Comment":"Ton is a great speaker!"},
  {"Name":"Paul", "Comment":"Ton is a great speaker!"},
  {"Name":"Kevin", "Comment":"Ton is a great speaker!"},
  {"Name":"Brian", "Comment":"Ton is a great speaker!"},
  {"Name":"Steven", "Comment":"Ton is a great speaker!"},
  {"Name":"Quynh", "Comment":"Ton is a great speaker!"},
  {"Name":"Alex", "Comment":"Ton is a great speaker!"},
  {"Name":"Anthony", "Comment":"Ton is a great speaker!"},
  {"Name":"Ton", "Comment":"Ton is a great speaker!"}
  ]
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    background: #eee;
  }
`;

const Main = styled.main``;

const HorizontalSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const BumperSection = styled.section`
  color: white;
  text-align: center;
  padding: 100px 16px;
  width: 100%;
  min-height: 350px;

  background-image:url(${image_url});
  background-position: center, left;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  padding: 0 0 25px 25px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const SampleCard = styled.div`
  position: relative;

  height: 50%;
  min-height: 150px;
  max-height: 1000px;

  width: 65%;
  min-width: 150px;
  max-width: 800px;

  background-color: #111f30;
  margin-right: 5%;
  flex-shrink: 0;
  
  padding: 2%;

  box-shadow: 3px 3px 3px grey;
  border-radius: 5px;
`;

const HeaderText = styled.h1`
  color: white;
  font-size: 75px;
  font-weight: 95%;
  font-family: 'Montserrat';
  padding: 2% 2% 2% 2%;
`;

const ParagraphText = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 90%;
  font-family: 'Montserrat';
  padding: 2% 2% 2% 2%;
`

const SampleCards = React.memo(() =>
    data
    .map((_e, i) =>
      <SampleCard key={`sampleCard-${i}`}>
        <HeaderText>{`${_e.Name}`}</HeaderText>
        <ParagraphText>{`${_e.Comment}`}</ParagraphText>
      </SampleCard>
    )
);



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
              <SampleCards/>
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