import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sorting = ({ itemProp }) => {
  return (
    <React.Fragment>
      <SortContainer>
        <Found>
          <p>11 Results Found</p>
        </Found>
        <SortOptions>
          <SelectSort>
            <option value="price-asc">Highest Price</option>
            <option value="price-dsc">Lowest Price</option>
          </SelectSort>
          <View>
            <FontAwesomeIcon
              icon="th-list"
              color="lightGrey"
              size="lg"
              className="th-list"
            />
            <FontAwesomeIcon icon="th" color="black" size="lg" />
          </View>
        </SortOptions>
      </SortContainer>
    </React.Fragment>
  );
};

export default Sorting;

const Found = styled.div``;

const SortContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;
const View = styled.div`
  .th-list {
    margin: 0 1rem;
  }
`;
const SortOptions = styled.div`
  display: flex;
  align-items: center;
`;
const SelectSort = styled.select``;
