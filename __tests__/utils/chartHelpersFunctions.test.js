import { getBarColors } from "@utils/chartHelpersFunctions";

const GREEN_COLOR = "#16C782";
const RED_COLOR = "#EA3943";

describe("getBarColors", () => {
  it("should return GREEN_COLOR when openPrice is less than closePrice", () => {
    const currencyData = [
      { openPrice: 100, closePrice: 120 },
      { openPrice: 110, closePrice: 130 },
      { openPrice: 95, closePrice: 105 },
    ];
    const result = getBarColors(currencyData);
    expect(result).toEqual([GREEN_COLOR, GREEN_COLOR, RED_COLOR]);
  });

  it("should return RED_COLOR when openPrice is greater than or equal to closePrice", () => {
    const currencyData = [
      { openPrice: 120, closePrice: 100 },
      { openPrice: 130, closePrice: 110 },
      { openPrice: 105, closePrice: 95 },
    ];
    const result = getBarColors(currencyData);
    expect(result).toEqual([GREEN_COLOR, RED_COLOR, RED_COLOR]);
  });

  it("should return GREEN_COLOR for the first element regardless of openPrice and closePrice", () => {
    const currencyData = [
      { openPrice: 120, closePrice: 100 },
      { openPrice: 130, closePrice: 110 },
    ];
    const result = getBarColors(currencyData);
    expect(result[0]).toEqual(GREEN_COLOR);
  });

  it("should return an empty array for an empty input array", () => {
    const currencyData = [];
    const result = getBarColors(currencyData);
    expect(result).toEqual([]);
  });
});
