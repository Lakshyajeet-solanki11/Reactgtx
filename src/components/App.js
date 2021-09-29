import React, { Component } from "react";
import { GlobalStyle } from "../utils/GlobalStyle";
import Navbar from "./nav/Navbar";
import Listings from "./listing/Listings";
import ContentSection from "./layout/ContentSection";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBed,
  faThList,
  faTh,
  faSquare,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import ListingData from "../data/ListingData";
import Pagination from "./layout/Pagination";
import Filters from "./filters/Filters";

export default class App extends Component {
  state = {
    ListingData,
    city: "",
    hometype: "",
    bedroom: "",
    minPrice: 0,
    maxPrice: 9999999,
    minFloorSpace: 0,
    maxFloorSpace: 999999,
    elevator: false,
    swimmingPool: false,
    finishedBasement: false,
    gym: false
  };

  inputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    let filteredData = this.state.ListingData.filter(listingItem => {
      // SORT BY CITY
      if (this.state.city !== "") {
        return listingItem.city === this.state.city;
      }
      // SORT BY HOMETYPE
      if (this.state.hometype !== "") {
        return listingItem.hometype === this.state.hometype;
      }
      // SORT BY BEDROOMS
      if (this.state.bedroom !== "") {
        return listingItem.rooms >= this.state.bedroom;
      }

      return (
        listingItem.price >= this.state.minPrice &&
        listingItem.price <= this.state.maxPrice &&
        listingItem.floorspace >= this.state.minFloorSpace &&
        listingItem.floorspace <= this.state.maxFloorSpace
      );
    });
    return (
      <React.Fragment>
        <GlobalStyle />
        <Navbar />
        <ContentSection>
          <Filters inputChange={this.inputChange} stateProp={this.state} />
          <Listings
            inputChange={this.inputChange}
            filteredData={filteredData}
            onTextSubmit={this.onTextSubmit}
          />
        </ContentSection>
        <Pagination />
      </React.Fragment>
    );
  }
}
library.add(faBed, faThList, faTh, faSquare, faMapMarkerAlt);
