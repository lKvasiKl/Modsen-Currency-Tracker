import { Component } from "react";
import ReactDOM from "react-dom";
import { CURRENCY_DEFAULT } from "@constants/currency";
import { formatDate } from "@utils/formatingFunctions";
import { getCache, saveCache, removeCache } from "@utils/cachingFunctions";

import CurrencySelect from "../CurrencySelect";
import CurrencyInfo from "../CurrencyInfo";
import CurrencyInputModal from "../CurrencyInputModal";
import CurrencyChart from "../CurrencyChart";
import chartObserver from "../ChartObserver";
import Notification from "../Notification";
import { NOTIFICATION_TYPES } from "../../constants/notification";

import { Main, ChartSection, Button, ButtonContainer } from "./styled";

const DAYS_IN_MONTH = 30;
const DISPLAY_TIME = 3000;
const SUCCSESS_MESSAGE = "The chart can be successfully built!";
const ERROR_MESSAGE = "The high price value cannot be less than the low.";

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
    chartObserver.subscribe(this);
    this.checkChartBuildStatus();
  }

  componentWillUnmount() {
    chartObserver.unsubscribe(this);
  }

  handleCurrencyChange = (newCurrency) => {
    this.setState({ selectedCurrency: newCurrency }, () => {
      this.checkChartBuildStatus();
    });
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
      chartObserver.notifySubscribers();
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

    if (numberOfEntries >= DAYS_IN_MONTH) {
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
          chartObserver.notifySubscribers();
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
              <Button onClick={this.handleBuildChartButtonClick}>
                Build chart
              </Button>
              <Button onClick={this.handleClearChartDataButtonClick}>
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
