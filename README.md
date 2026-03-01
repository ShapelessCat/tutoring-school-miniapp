# Tutoring School Miniapp

A starter WeChat Mini Program for internal tutoring school operations.

## Features

- Employee sign in
- Teacher attendance logging
- Student tuition calculation (placeholder formulas)
- Teacher salary calculation (placeholder formulas)

## Placeholder calculations

- Tuition: `gross = totalHours * ratePerHour`, `net = max(gross - discount, 0)`
- Salary: `base = taughtHours * baseRate`, `total = base + attendanceBonus`

> These are temporary and can be replaced by your future Excel-based business rules.

## Structure

- `pages/signin`: Employee sign-in
- `pages/dashboard`: Home and navigation
- `pages/attendance`: Attendance records
- `pages/finance`: Tuition and salary tools
- `utils/calculations.js`: Formula helpers
- `utils/store.js`: Local storage helpers
