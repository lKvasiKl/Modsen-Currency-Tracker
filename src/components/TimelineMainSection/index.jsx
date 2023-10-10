import { Component } from "react";
import ReactDOM from "react-dom";

import { CURRENCY_DEFAULT } from "@constants/currency";
import { formatDate } from "@utils/formatingFunctions";
import { getCache, saveCache, removeCache } from "@utils/cachingFunctions";
import { OverflowHidden } from "@styled";
import { NOTIFICATION_TYPES } from "@constants/timeline";
import CurrencySelect from "./CurrencySelect";
import CurrencyInfo from "./CurrencyInfo";
import observer from "../Observer";
import CurrencyInputModal from "./CurrencyInputModal";
import CurrencyChart from "./CurrencyChart";
import Notification from "./Notification";
import {
  MAX_CHART_ITEMS,
  DISPLAY_TIME,
  SUCCSESS_MESSAGE,
  ERROR_MESSAGE,
} from "./config";

import { Main, ChartSection, Button, ButtonContainer } from "./styled";

class TimelineMainSection extends Component {
  state = {
    selectedCurrency: CURRENCY_DEFAULT,
    isModalOpen: false,
    isChartCanBuild: false,
    showNotification: false,
    notification: {
      message: "",
      backgroundColor: "",
    },
    showChart: false,
  };

  update() {
    this.setState({ showNotification: true });
    setTimeout(() => {
      this.setState({ showNotification: false });
    }, DISPLAY_TIME);
  }

  componentDidMount() {
    observer.subscribe(this);
    this.checkChartBuildStatus();
  }

  componentWillUnmount() {
    observer.unsubscribe(this);
  }

  handleCurrencyChange = (newCurrency) => {
    this.setState(
      {
        showChart: false,
        selectedCurrency: newCurrency,
      },
      () => {
        this.checkChartBuildStatus();
      },
    );
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  handleAddPrice = (currentDate, inputValue) => {
    const formattedDate = formatDate(currentDate);
    const selectedCurrencyId = this.state.selectedCurrency.id;

    const currencyData = getCache(selectedCurrencyId);

    if (
      inputValue.highPriceInput < inputValue.lowPriceInput ||
      inputValue.highPriceInput < inputValue.openPriceInput ||
      inputValue.highPriceInput < inputValue.closePriceInput ||
      inputValue.lowPriceInput > inputValue.openPriceInput ||
      inputValue.lowPriceInput > inputValue.closePriceInput
    ) {
      this.setState({
        notification: {
          message: ERROR_MESSAGE,
          backgroundColor: NOTIFICATION_TYPES.error,
        },
      });
      observer.notifySubscribers();
      return;
    }

    currencyData[formattedDate] = {
      openPrice: inputValue.openPriceInput,
      highPrice: inputValue.highPriceInput,
      lowPrice: inputValue.lowPriceInput,
      closePrice: inputValue.closePriceInput,
    };

    saveCache(selectedCurrencyId, currencyData);

    this.checkChartBuildStatus();
  };

  handleBuildChartButtonClick = () => {
    this.setState({ showChart: true });
  };

  handleClearChartDataButtonClick = () => {
    this.setState({ showChart: false });
    removeCache(this.state.selectedCurrency.id);
    this.checkChartBuildStatus();
  };

  checkChartBuildStatus() {
    const selectedCurrencyId = this.state.selectedCurrency.id;
    const currencyData = getCache(selectedCurrencyId);
    const numberOfEntries = Object.keys(currencyData).length;

    if (numberOfEntries >= MAX_CHART_ITEMS) {
      this.handleCloseModal();
      this.setState(
        {
          notification: {
            message: SUCCSESS_MESSAGE,
            backgroundColor: NOTIFICATION_TYPES.success,
          },
          isChartCanBuild: true,
        },
        () => {
          observer.notifySubscribers();
        },
      );
    } else {
      this.setState({ isChartCanBuild: false });
    }
  }

  render() {
    const {
      selectedCurrency,
      isChartCanBuild,
      isModalOpen,
      showNotification,
      notification,
      showChart,
    } = this.state;

    return (
      <Main>
        <ChartSection>
          <CurrencySelect
            selectedCurrency={selectedCurrency}
            onCurrencyChange={this.handleCurrencyChange}
          />
          <CurrencyInfo
            isChartCanBuild={isChartCanBuild}
            selectedCurrency={selectedCurrency}
            onClick={this.handleOpenModal}
          />
          {isChartCanBuild && (
            <ButtonContainer>
              <Button
                data-cy="build-chart-button"
                onClick={this.handleBuildChartButtonClick}
              >
                Build chart
              </Button>
              <Button
                data-cy="clear-chart-data-button"
                onClick={this.handleClearChartDataButtonClick}
              >
                Clear chart data
              </Button>
            </ButtonContainer>
          )}
        </ChartSection>
        {showChart && (
          <ChartSection>
            <CurrencyChart id={selectedCurrency.id} />
          </ChartSection>
        )}
        {isModalOpen &&
          ReactDOM.createPortal(
            <CurrencyInputModal
              id={selectedCurrency.id}
              onAddPrice={this.handleAddPrice}
              onClose={this.handleCloseModal}
            />,
            document.getElementById("root"),
          )}
        {isModalOpen && <OverflowHidden />}
        {showNotification &&
          ReactDOM.createPortal(
            <Notification
              color={notification.backgroundColor}
              message={notification.message}
            />,
            document.getElementById("root"),
          )}
      </Main>
    );
  }
}

export default TimelineMainSection;