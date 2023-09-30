import React, { Component } from "react";
import PropTypes from "prop-types";
import { getCache } from "@utils/cachingFunctions";
import { getBarColors } from "@utils/chartHelpersFunctions";
import { Chart } from "chart.js/auto";

import { chartOptions } from "./config";
import { candlestickPlugin } from "./candlestickPlugin";
import { ChartCanvas, ChartWrapper } from "./styled";

class CurrencyChart extends Component {
  chartRef = React.createRef();
  chart = null;

  createChart(data, colors) {
    const ctx = this.chartRef.current.getContext("2d");
    const chartData = {
      labels: Object.keys(data),
      datasets: [
        {
          backgroundColor: colors,
          borderColor: colors,
          data: Object.keys(data).map((date) => {
            const currencyData = data[date];
            return {
              x: date,
              o: currencyData.openPrice,
              h: currencyData.highPrice,
              l: currencyData.lowPrice,
              c: currencyData.closePrice,
              s: [currencyData.openPrice, currencyData.closePrice],
            };
          }),
        },
      ],
    };

    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart(ctx, {
      type: "bar",
      data: chartData,
      options: chartOptions,
      plugins: [candlestickPlugin],
    });
  }

  componentDidMount() {
    const { id } = this.props;
    const currencyData = getCache(id);
    const colors = getBarColors(Object.values(currencyData));
    this.createChart(currencyData, colors);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      const currencyData = getCache(this.props.id);
      const colors = getBarColors(Object.values(currencyData));
      this.createChart(currencyData, colors);
    }
  }

  render() {
    return (
      <ChartWrapper>
        <ChartCanvas ref={this.chartRef} />
      </ChartWrapper>
    );
  }
}

CurrencyChart.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CurrencyChart;
