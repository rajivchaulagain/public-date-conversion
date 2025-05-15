import express from "express";
import {
  handleGetDaysAdMonth,
  handleGetDaysBsMonth,
  handleGetDaysBsQuarter,
  handleGetDaysBsHalfYear,
  handleGetDaysBsYear,
  handleGetBsMonthEndDate,
  handleGetBsQuarterEndDate,
  handleGetBsYearEndDate,
  handleConvertToBs,
  handleConvertToAd,
  handleAdMonthRangeFromBsMonth,
  handleGetTodaysBsDate,
  handleGetPeriodEndDatesBs,
  handleGetPeriodEndDatesAd,
} from "./controller";

const router = express.Router();

router.get("/days-ad-month", handleGetDaysAdMonth);
router.get("/days-bs-month", handleGetDaysBsMonth);
router.get("/days-bs-quarter", handleGetDaysBsQuarter);
router.get("/days-bs-half-year", handleGetDaysBsHalfYear);
router.get("/days-bs-year", handleGetDaysBsYear);
router.get("/bs-month-end", handleGetBsMonthEndDate);
router.get("/bs-quarter-end", handleGetBsQuarterEndDate);
router.get("/bs-year-end", handleGetBsYearEndDate);
router.get("/ad-month-range", handleAdMonthRangeFromBsMonth);
router.get("/today-bs-date", handleGetTodaysBsDate);

router.post("/convert-to-bs", handleConvertToBs);
router.post("/convert-to-ad", handleConvertToAd);
router.post("/period-end-bs", handleGetPeriodEndDatesBs);
router.post("/period-end-ad", handleGetPeriodEndDatesAd);

export default router;
