import React from "react";
import styled from "styled-components";
import { Colors } from "../../utils/Colors";

export default class SearchBar extends React.Component {
  state = {
    text: ""
  };

  onTextChange = event => {
    this.setState({ text: event.target.value }, () => {
      // console.log(this.state);
    });
  };

  formSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.text);
    // pass in callback from main app component
  };

  render() {
    return (
      <React.Fragment>
        <SearchContainer>
          <form onSubmit={this.formSubmit} action="">
            <Search>
              <input
                type="text"
                value={this.state.text}
                onChange={this.onTextChange}
                name="search"
                placeholder="Search Listings"
              />
            </Search>
          </form>
        </SearchContainer>
      </React.Fragment>
    );
  }
}

const SearchContainer = styled.section``;

const Search = styled.section`
  input {
    width: 70%;
    background: transparent;
    font-size: 2rem;
    border: none;
    border-bottom: 1px solid ${Colors.darkGrey};
    margin: 2rem 0;
  }
`;
