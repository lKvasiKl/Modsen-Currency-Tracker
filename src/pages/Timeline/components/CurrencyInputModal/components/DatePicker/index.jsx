import { Component } from "react";
import PropTypes from "prop-types";
import { formatDate } from "@utils/formatingFunctions";

import { Button, DateContainer, DateTitle } from "./styled";

class DatePicker extends Component {
  handleUpdateDate = (direction) => () => {
    this.props.onChange(direction);
  };

  render() {
    return (
      <DateContainer data-cy="date-picker">
        <Button data-cy="prev-date" onClick={this.handleUpdateDate("prev")}>
          {"<"}
        </Button>
        <DateTitle>{formatDate(this.props.currentDate)}</DateTitle>
        <Button data-cy="next-date" onClick={this.handleUpdateDate("next")}>
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