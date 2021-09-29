import React from "react";
import styled from "styled-components";

const Location = ({ city, inputProp, bedroom, hometype }) => {
  return (
    <React.Fragment>
      <FilterContainer>
        <h3>Location</h3>
        <label>City</label>
        <Select name="city" onChange={inputProp} value={city}>
          <option value="All">All</option>
          <option value="Miami">Miami</option>
          <option value="Philadelphia">Philadelphia</option>
          <option value="New York">New York</option>
        </Select>
        <label>Hometype</label>
        <Select name="hometype" onChange={inputProp} value={hometype}>
          <option value="All">All</option>
          <option value="Apartment">Apartment</option>
          <option value="Studio">Studio</option>
          <option value="House">House</option>
          <option value="Ranch">Ranch</option>
        </Select>
        <label>Bedroom</label>
        <Select name="bedroom" onChange={inputProp}>
          <option value="All">All</option>
          <option value="1">1+ Bedroom</option>
          <option value="2">2+ Bedrooms</option>
          <option value="3">3+ Bedrooms</option>
          <option value="4">4+ Bedrooms</option>
          <option value="5">5+ Bedrooms</option>
        </Select>
      </FilterContainer>
    </React.Fragment>
  );
};

export default Location;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 0 auto;
  font-size: 1.6rem;
`;

const Select = styled.select`
  border: 1px solid lightgrey;
  padding: 0.7rem;
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 2rem;
  appearance: none;
  cursor: pointer;
`;
