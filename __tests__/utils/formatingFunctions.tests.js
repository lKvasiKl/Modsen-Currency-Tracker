import { formatTime, formatRateValue, formatDate } from "@utils/dateFormatting";

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

const WITHOUT_RATES_DATA = {};

describe("formatTime", () => {
  it("should format time correctly for AM", () => {
    const firstTest = new Date(2023, 0, 1, 10, 30).getTime();
    const secondTest = new Date(2023, 0, 1, 0, 0).getTime();

    const firstResult = formatTime(firstTest);
    const secondResult = formatTime(secondTest);

    expect(firstResult).toBe("10:30 AM");
    expect(secondResult).toBe("12:00 AM");
  });

  it("should format time correctly for PM", () => {
    const firstTest = new Date(2023, 0, 1, 15, 45).getTime();
    const secondTest = new Date(2023, 0, 1, 12, 0).getTime();

    const firstResult = formatTime(firstTest);
    const secondResult = formatTime(secondTest);

    expect(firstResult).toBe("03:45 PM");
    expect(secondResult).toBe("12:00 PM");
  });
});

describe("formatRateValue", () => {
  it("should format rate value when rates and id are provided", () => {
    const id = "EUR";
    const result = formatRateValue(RATES, id);

    expect(typeof result).toBe("string");
    expect(result).toMatch(/^\$ [0-9]+(\.[0-9]{5})?$/);
  });

  it("should return 'Loading...' when rateValue is null", () => {
    const id = "JPY";
    const result = formatRateValue(WITHOUT_RATES_DATA, id);

    expect(result).toBe("Loading...");
  });
});

describe("formatDate", () => {
  it("should format a date in the 'dd.mm.yyyy' format", () => {
    expect(formatDate(new Date("2023-01-01"))).toBe("01.01.2023");
    expect(formatDate(new Date("2022-03-15"))).toBe("15.03.2022");
    expect(formatDate(new Date("2024-09-07"))).toBe("07.09.2024");
  });
});
