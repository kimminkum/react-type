import React from "react";
import styled from "styled-components";

const RouletteContainer = styled.div<{ fullwidth: boolean }>`
  width: 100%;
  height: auto;
  padding: ${(props) => (props.fullwidth ? "40px 24px" : "80px 0")};
  background-color: rgba(0, 0, 0, 0.222);
`;

const PcInnerBox = styled.div<{ fullwidth: boolean }>`
  width: ${(props) => (props.fullwidth ? "100%" : "1200px")};
  margin: 0 auto;
  position: relative;
  text-align: center;
`;

const TxtBox = styled.div`
  padding: 30px 20px;
  margin: 20px 0;
`;

const RouletteOuter = styled.div<{ mbwidth: boolean }>`
  position: relative;
  overflow: hidden;
  width: ${(props) => (props.mbwidth ? "360px" : "550px")};
  height: ${(props) => (props.mbwidth ? "360px" : "550px")};
  padding: 20px;
  margin: 0 auto;
  border: 1px solid red;
`;

const RouletteBase = styled.div`
  position: absolute;
  top: 5%;
  left: 5%;
  right: 5%;
  bottom: 5%;
  border-radius: 50%;
  border: 2px solid black;
  background-color: #f5f5dc;
`;

const RouletteFin = styled.div`
  width: 0;
  height: 0;
  top: 3%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  border-style: solid;
  border-width: 25px 7.5px 0 7.5px;
  border-color: #ff4400 transparent transparent transparent;
`;

const RouletteItemWrapper = styled.div``;

const RouletteItem = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 1.3rem;
  padding-top: 7%;
  text-align: center;
  display: flex;
  justify-content: center;
`;

interface RouletteProps {
  mobileWidth: boolean;
  tablitWidth: boolean;
}

const Roulette: React.FC<RouletteProps> = ({ mobileWidth, tablitWidth }) => {
  return (
    <RouletteContainer fullwidth={tablitWidth}>
      <PcInnerBox fullwidth={tablitWidth}>
        <TxtBox>
          <h1>폐기</h1>
        </TxtBox>

        <RouletteOuter mbwidth={mobileWidth}>
          <RouletteBase>
            <RouletteItemWrapper>
              <RouletteItem>100점</RouletteItem>
              <RouletteItem>300점</RouletteItem>
              <RouletteItem>500점</RouletteItem>
              <RouletteItem>800점</RouletteItem>
            </RouletteItemWrapper>
          </RouletteBase>
          <RouletteFin></RouletteFin>
        </RouletteOuter>
      </PcInnerBox>
    </RouletteContainer>
  );
};

export default Roulette;
