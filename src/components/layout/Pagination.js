import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/Colors';

const Pagination = () => {
  return (
    <React.Fragment>
      <PagesContainer>
        <PageNumbers>
          <ListItem>Prev</ListItem>
          <ListItem className="active">1</ListItem>
          <ListItem>2</ListItem>
          <ListItem>3</ListItem>
          <ListItem>4</ListItem>
          <ListItem>5</ListItem>
          <ListItem>Next</ListItem>
        </PageNumbers>
      </PagesContainer>
    </React.Fragment>
  );
};

export default Pagination;
const ListItem = styled.li``;
const PageNumbers = styled.ul`
  box-shadow: 10px 10px 10px 0px rgb(224, 224, 224);
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  
  ${ListItem} {
    /* background: ${props => (props.active ? 'pink' : 'white')}; */
    padding: 1.5rem 2.5rem;
    cursor: pointer;
    &.active, &:hover {
      background: ${Colors.golden};
    }
  }
`;

const PagesContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 3rem 0;
`;
