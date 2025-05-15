import { Request, Response } from "express";
import {
  getDaysAdMonth,
  getDaysBsMonth,
  getDaysBsQuarter,
  getDaysBsHalfYear,
  getDaysBsYear,
  getBsMonthEndDate,
  getBsQuarterEndDate,
  getBsYearEndDate,
  convertToBs,
  convertToAd,
  getAdMonthRangeFromBsMonth,
  getTodaysBsDate,
  getPeriodEndDatesBs,
  getPeriodEndDatesAd,
} from "corporate-nepali-calendar";

export const handleGetDaysAdMonth = (req: Request, res: Response) => {
  const { year, month } = req.query;
  if (!year || !month) {
    return res.status(400).json({ error: "Year and month are required" });
  }
  const days = getDaysAdMonth(Number(year), Number(month));
  res.json({ days });
};

export const handleGetDaysBsMonth = (req: Request, res: Response) => {
  const { year, month } = req.query;
  if (!year || !month) {
    return res.status(400).json({ error: "Year and month are required" });
  }
  const days = getDaysBsMonth(Number(year), Number(month));
  res.json({ days });
};

export const handleGetDaysBsQuarter = (req: Request, res: Response) => {
  const { year, quarter } = req.query;
  if (!year || !quarter) {
    return res.status(400).json({ error: "Year and quarter are required" });
  }
  const days = getDaysBsQuarter(Number(year), Number(quarter));
  res.json({ days });
};

export const handleGetDaysBsHalfYear = (req: Request, res: Response) => {
  const { year, half } = req.query;
  if (!year || !half) {
    return res.status(400).json({ error: "Year and half are required" });
  }
  const days = getDaysBsHalfYear(Number(year), Number(half));
  res.json({ days });
};

export const handleGetDaysBsYear = (req: Request, res: Response) => {
  const { year } = req.query;
  if (!year) {
    return res.status(400).json({ error: "Year is required" });
  }
  const days = getDaysBsYear(Number(year));
  res.json({ days });
};

export const handleGetBsMonthEndDate = (req: Request, res: Response) => {
  const { year, month } = req.query;
  if (!year || !month) {
    return res.status(400).json({ error: "Year and month are required" });
  }
  const endDate = getBsMonthEndDate(Number(year), Number(month));
  res.json({ endDate });
};

export const handleGetBsQuarterEndDate = (req: Request, res: Response) => {
  const { year, quarter } = req.query;
  if (!year || !quarter) {
    return res.status(400).json({ error: "Year and quarter are required" });
  }
  const endDate = getBsQuarterEndDate(Number(year), Number(quarter));
  res.json({ endDate });
};

export const handleGetBsYearEndDate = (req: Request, res: Response) => {
  const { year } = req.query;
  if (!year) {
    return res.status(400).json({ error: "Year is required" });
  }
  const endDate = getBsYearEndDate(Number(year));
  res.json({ endDate });
};

export const handleConvertToBs = (req: Request, res: Response) => {
  const { date } = req.body;
  if (!date) {
    return res.status(400).json({ error: "Date is required" });
  }
  const bsDate = convertToBs(date);
  res.json({ bsDate });
};

export const handleConvertToAd = (req: Request, res: Response) => {
  const { bsDate } = req.body;
  if (!bsDate) {
    return res.status(400).json({ error: "BS date is required" });
  }
  const adDate = convertToAd(bsDate);
  res.json({ adDate });
};

export const handleAdMonthRangeFromBsMonth = (req: Request, res: Response) => {
  const { year, month } = req.query;
  if (!year || !month) {
    return res.status(400).json({ error: "Year and month are required" });
  }
  const range = getAdMonthRangeFromBsMonth(Number(year), Number(month));
  res.json(range);
};

export const handleGetTodaysBsDate = (_req: Request, res: Response) => {
  const bsDate = getTodaysBsDate();
  res.json({ bsDate });
};

export const handleGetPeriodEndDatesBs = (req: Request, res: Response) => {
  const { startDate, endDate, periodType, yearType } = req.body;
  if (!startDate || !endDate || !periodType) {
    return res.status(400).json({ error: "Start date, end date and period type are required" });
  }
  const dates = getPeriodEndDatesBs({ startDate, endDate, periodType, yearType });
  res.json({ dates });
};

export const handleGetPeriodEndDatesAd = (req: Request, res: Response) => {
  const { startDate, endDate, periodType, yearType } = req.body;
  if (!startDate || !endDate || !periodType) {
    return res.status(400).json({ error: "Start date, end date and period type are required" });
  }
  const dates = getPeriodEndDatesAd({ startDate, endDate, periodType, yearType });
  res.json({ dates });
};


// export const handleDifferenceDaysBsDates = (req: Request, res: Response) => {
//   const { startDate, endDate, includeStartEndDates = true } = req.body;
//   if (!startDate || !endDate) {
//     return res.status(400).json({ error: "Start and end date are required" });
//   }
//   const days = getDifferenceDaysBsDates(startDate, endDate, includeStartEndDates);
//   res.json({ days });
// };