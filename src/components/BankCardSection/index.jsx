import { PureComponent } from "react";

import { QUOTES_CARD_DATA } from "@constants/currency";
import BanksSearch from "./BanksSearch";
import MapboxMap from "./Map";
import { BANKS_LIST } from "./constants/map";
import { CARD_SECTION_TITLE } from "./config";

import { Main, Title } from "./styled";

class BankCardSection extends PureComponent {
  state = {
    currencies: [],
    searchCurrencies: [],
    banksCoords: [],
  };

  componentDidMount() {
    const currencies = QUOTES_CARD_DATA.map((data) => ({
      id: data.id,
      title: data.title,
    }));
    this.setState({ currencies: currencies });
  }

  setSearchCurrencies = (currencies) => {
    this.setState({ searchCurrencies: currencies });
  };

  handleCurrencySelection = (id) => {
    const banksCoords = BANKS_LIST.filter((bank) =>
      bank.currencies.includes(id),
    );

    this.setState({ banksCoords: banksCoords });
  };

  render() {
    const { currencies, searchCurrencies, banksCoords } = this.state;

    return (
      <Main>
        <Title>{CARD_SECTION_TITLE}</Title>
        <BanksSearch
          currencies={currencies}
          searchCurrencies={searchCurrencies}
          setSearchCurrencies={this.setSearchCurrencies}
          onCurrencySelection={this.handleCurrencySelection}
        />
        <MapboxMap banksCoords={banksCoords} />
      </Main>
    );
  }
}

export default BankCardSection;
