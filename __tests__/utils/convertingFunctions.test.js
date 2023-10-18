import { convertCurrency } from "@utils/convertingFunctions";

const RATES = {
  expirationDate: 1696271776724,
  data: {
    ARS: { code: "ARS", value: 350.0025115455 },
    AUD: { code: "AUD", value: 1.5541101667 },
    BTC: { code: "BTC", value: 0.0000369648 },
    CAD: { code: "CAD", value: 1.3577702057 },
    CNY: { code: "CNY", value: 7.3042209488 },
    EUR: { code: "EUR", value: 0.9456701585 },
    JPY: { code: "JPY", value: 149.4162578012 },
    LBP: { code: "LBP", value: 15016.563850118 },
    USD: { code: "USD", value: 1 },
  },
};
const DECIMAL_PLACES = 0;

describe("convertCurrency", () => {
  it("should convert currency correctly", () => {
    const amount = 100;
    const fromCurrency = "USD";
    const toCurrency = "EUR";

    const result = convertCurrency(amount, fromCurrency, toCurrency, RATES);

    expect(typeof result).toBe("number");
    expect(result).toBeCloseTo(94.56702, DECIMAL_PLACES);
  });

  it("should handle different currency conversion correctly", () => {
    const amount = 50;
    const fromCurrency = "EUR";
    const toCurrency = "ARS";

    const result = convertCurrency(amount, fromCurrency, toCurrency, RATES);

    expect(typeof result).toBe("number");
    expect(result).toBeCloseTo(18505.52798, DECIMAL_PLACES);
  });
});
