import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import { IMAGE_CONFIG, INPUT_PLACEHOLDER, NOT_FOUND_TEXT } from "./config";

import {
  SearchWrapper,
  SearchContainer,
  Input,
  Image,
  SearchList,
  SearchListItem,
} from "./styled";

class BanksSearch extends PureComponent {
  state = {
    searchInputValue: "",
  };

  handleInputCurrenciesSearch = (event) => {
    const inputValue = event.target.value.toLowerCase();
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

    this.setState({ searchInputValue: event.target.value });
  };

  handleSearchCurrencyClick = (id) => () => {
    this.props.onCurrencySelection(id);
    this.setState({ searchInputValue: "" });
  };

  render() {
    const { searchCurrencies } = this.props;
    const { searchInputValue } = this.state;

    return (
      <SearchWrapper>
        <SearchContainer>
          <Input
            placeholder={INPUT_PLACEHOLDER}
            value={searchInputValue}
            onChange={this.handleInputCurrenciesSearch}
          />
          <Image {...IMAGE_CONFIG} />
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
              <SearchListItem>{NOT_FOUND_TEXT}</SearchListItem>
            )}
          </SearchList>
        )}
      </SearchWrapper>
    );
  }
}

BanksSearch.propTypes = {
  currencies: PropTypes.array.isRequired,
  setSearchCurrencies: PropTypes.func.isRequired,
  searchCurrencies: PropTypes.array.isRequired,
  onCurrencySelection: PropTypes.func.isRequired,
};

export default React.memo(BanksSearch);
