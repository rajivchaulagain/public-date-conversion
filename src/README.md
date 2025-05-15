
# Date Utility API Documentation

This API provides utilities for working with Nepali (BS) and English (AD) dates, including conversion, range calculations, and day counting.

## Base URL
`/api/v1/dates`

---

## GET /days-ad-month
Returns number of days in an AD month.

**Query Parameters:**
- `year`: number (required)
- `month`: number (required)

**Example:** `/days-ad-month?year=2025&month=5`

---

## GET /days-bs-month
Returns number of days in a BS month.

**Query Parameters:**
- `year`: number (required)
- `month`: number (required)

**Example:** `/days-bs-month?year=2081&month=1`

---

## GET /days-bs-quarter
Returns number of days in a BS quarter.

**Query Parameters:**
- `year`: number (required)
- `quarter`: number (1–4, required)

**Example:** `/days-bs-quarter?year=2081&quarter=2`

---

## GET /days-bs-half-year
Returns number of days in a BS half year.

**Query Parameters:**
- `year`: number (required)
- `half`: number (1 or 2, required)

**Example:** `/days-bs-half-year?year=2081&half=1`

---

## GET /days-bs-year
Returns number of days in a BS year.

**Query Parameters:**
- `year`: number (required)

**Example:** `/days-bs-year?year=2081`

---

## GET /bs-month-end
Returns end date of BS month.

**Query Parameters:**
- `year`: number (required)
- `month`: number (required)

**Example:** `/bs-month-end?year=2081&month=2`

---

## GET /bs-quarter-end
Returns end date of BS quarter.

**Query Parameters:**
- `year`: number (required)
- `quarter`: number (1–4, required)

**Example:** `/bs-quarter-end?year=2081&quarter=2`

---

## GET /bs-year-end
Returns end date of BS year.

**Query Parameters:**
- `year`: number (required)

**Example:** `/bs-year-end?year=2081`

---

## POST /convert-to-bs
Converts an AD date to BS.

**Body:**
```json
{
  "date": "2025-05-15"
}
```

---

## POST /convert-to-ad
Converts a BS date to AD.

**Body:**
```json
{
  "bsDate": "2081-02-02"
}
```

---

## POST /bs-date-difference
Returns number of days between two BS dates.

**Body:**
```json
{
  "startDate": "2081-01-01",
  "endDate": "2081-01-10",
  "includeStartEndDates": true
}
```

---

## GET /ad-month-range
Returns AD range that maps to a BS month.

**Query Parameters:**
- `year`: number (required)
- `month`: number (required)

**Example:** `/ad-month-range?year=2081&month=1`

---

## GET /today-bs-date
Returns today's BS date.

**Example:** `/today-bs-date`

---

## POST /period-end-bs
Returns all period end dates between start and end BS date.

**Body:**
```json
{
  "startDate": "2081-01-01",
  "endDate": "2081-06-30",
  "periodType": "monthly",
  "yearType": "fiscal" // optional
}
```

---

## POST /period-end-ad
Returns all period end dates between start and end AD date.

**Body:**
```json
{
  "startDate": "2025-01-01",
  "endDate": "2025-06-30",
  "periodType": "quarterly",
  "yearType": "calendar" // optional
}
```

---

## Response Format (All)
```json
{
  "data": ...
}
```

---

## Error Response
```json
{
  "error": "Error message here"
}
```
