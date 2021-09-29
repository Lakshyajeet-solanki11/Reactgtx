import React from 'react';
import styled from 'styled-components';

const Prices = ({ minProp, maxProp, inputProp }) => {
  return (
    <React.Fragment>
      <PriceContainer>
        <h3>Prices</h3>
        <PriceLabel htmlFor="Price">
          <input
            type="text"
            name="minPrice"
            onChange={inputProp}
            value={minProp}
          />
          <input
            type="text"
            name="maxPrice"
            onChange={inputProp}
            value={maxProp}
          />
        </PriceLabel>
      </PriceContainer>
    </React.Fragment>
  );
};

export default Prices;

const PriceContainer = styled.div`
  width: 20rem;
  margin: 0 auto;
`;

const PriceLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  input {
    width: 35%;
    padding: 0.7rem;
    font-size: 1.6rem;
  }
`;
