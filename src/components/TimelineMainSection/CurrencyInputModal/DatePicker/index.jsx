import { Component } from "react";
import PropTypes from "prop-types";

import { formatDate } from "@utils/dateFormatting";
import { ADJACENT_DATE } from "../config";

import { Button, DateContainer, DateTitle } from "./styled";

class DatePicker extends Component {
  handleUpdateDate = (direction) => () => {
    this.props.onChange(direction);
  };

  render() {
    const { prevDate, nextDate } = ADJACENT_DATE;

    return (
      <DateContainer data-cy="date-picker">
        <Button data-cy="prev-date" onClick={this.handleUpdateDate(prevDate)}>
          {"<"}
        </Button>
        <DateTitle>{formatDate(this.props.currentDate)}</DateTitle>
        <Button data-cy="next-date" onClick={this.handleUpdateDate(nextDate)}>
          {">"}
        </Button>
      </DateContainer>
    );
  }
}

DatePicker.propTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DatePicker;
