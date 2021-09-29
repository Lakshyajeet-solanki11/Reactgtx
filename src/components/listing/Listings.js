import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import Sorting from "./Sorting";
import ListingItem from "./ListingItem";

class Listings extends React.Component {
  onTextChange = event => {
    this.setState(
      {
        text: event.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  onFormSubmit = text => {
    console.log(text);
  };

  render() {
    const { filteredData } = this.props;
    const listingsItem = filteredData.map((item, id) => {
      return (
        <ListingItem
          key={id}
          address={item.address}
          image={item.image}
          city={item.city}
          state={item.state}
          rooms={item.rooms}
          price={item.price}
          floorspace={item.floorspace}
          extras={["elevator", "gym"]}
          hometype={item.home}
        />
      );
    });

    return (
      <React.Fragment>
        <ListingsWrapper>
          <SearchBar onFormSubmit={this.onFormSubmit} />
          <Sorting onTextChange={this.onTextChange} />
          <ItemsContainer>{listingsItem}</ItemsContainer>
        </ListingsWrapper>
      </React.Fragment>
    );
  }
}

export default Listings;

const ListingsWrapper = styled.section`
  padding: 4.5rem 13rem;
`;
const ItemsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`;
