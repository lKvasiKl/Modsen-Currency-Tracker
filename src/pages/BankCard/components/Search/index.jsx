import { Component } from "react";
import PropTypes from "prop-types";
import search from "@assets/icons/search.svg";

import {
  SearchWrapper,
  SearchContainer,
  Input,
  Image,
  SearchList,
  SearchListItem,
} from "./styled";

class Search extends Component {
  state = {
    searchInputValue: "",
  };

  handleInputCurrenciesSearch = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const { currencies, setSearchCurrencies } = this.props;

    let searchResults = [];
    if (inputValue.trim() !== "") {
      searchResults = currencies.filter((currency) => {
        return (
          currency.id.toLowerCase().includes(inputValue) ||
          currency.title.toLowerCase().includes(inputValue)
        );
      });
    }

    setSearchCurrencies(searchResults);

    this.setState({ searchInputValue: e.target.value });
  };

  handleSearchCurrencyClick = (id) => () => {
    this.props.onCurrencySelection(id);
    this.setState({ searchInputValue: "" });
  };

  render() {
    const { placeholder, searchCurrencies } = this.props;
    const { searchInputValue } = this.state;

    return (
      <SearchWrapper>
        <SearchContainer>
          <Input
            placeholder={placeholder}
            value={searchInputValue}
            onChange={this.handleInputCurrenciesSearch}
          />
          <Image alt="Search icon" height="24px" src={search} width="24px" />
        </SearchContainer>
        {searchInputValue.length > 0 && (
          <SearchList>
            {searchCurrencies.length !== 0 ? (
              searchCurrencies.map(({ id, title }) => (
                <SearchListItem
                  key={id}
                  onClick={this.handleSearchCurrencyClick(id)}
                >
                  {title} ({id})
                </SearchListItem>
              ))
            ) : (
              <SearchListItem>Not found</SearchListItem>
            )}
          </SearchList>
        )}
      </SearchWrapper>
    );
  }
}

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  currencies: PropTypes.array.isRequired,
  setSearchCurrencies: PropTypes.func.isRequired,
  searchCurrencies: PropTypes.array.isRequired,
  onCurrencySelection: PropTypes.func.isRequired,
};

export default Search;
