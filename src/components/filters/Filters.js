import React from "react";
import Location from "./Location";
import Prices from "./Prices";
import FloorSpace from "./FloorSpace";
import Extras from "./Extras";
import styled from "styled-components";

const Filter = ({ inputChange, stateProp }) => {
  return (
    <StyledSection>
      <Location
        inputProp={inputChange}
        city={stateProp.city}
        hometype={stateProp.hometype}
        bedroom={stateProp.bedroom}
      />
      <Prices
        minProp={stateProp.minPrice}
        maxProp={stateProp.maxPrice}
        inputProp={inputChange}
      />
      <FloorSpace
        minFloor={stateProp.minFloorSpace}
        maxFloor={stateProp.maxFloorSpace}
        inputProp={inputChange}
      />
      <Extras
        inputChange={inputChange}
        // elevator={stateProp.elevator}
        // swimmingPool={stateProp.swimmingPool}
        // finishedBasement={stateProp.finishedBasement}
        // gym={stateProp.gym}
      />
    </StyledSection>
  );
};

export default Filter;

const StyledSection = styled.section`
  background: #f8f8f8;
`;
