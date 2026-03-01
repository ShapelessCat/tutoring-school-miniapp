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

## UI preview and testing (WeChat Mini Program)

The UI already exists in this repository (`pages/signin`, `pages/dashboard`, `pages/attendance`, and `pages/finance`).

### 1) Open the project in WeChat DevTools

1. Install **WeChat DevTools** (official tool from Tencent).
2. Open DevTools and choose **Mini Program**.
3. Click **Import Project**.
4. Select this folder as the project root:
   - `/workspace/tutoring-school-miniapp`
5. Fill in an AppID:
   - If you have a real one, use it.
   - If not, choose test mode/no-AppID mode in DevTools.
6. Confirm import and wait for compile.

### 2) What you should see

- Bottom tab bar with:
  - Home (`pages/dashboard/index`)
  - Attendance (`pages/attendance/index`)
  - Finance (`pages/finance/index`)
- Sign-in page available at `pages/signin/index` (also listed in `app.json`).

### 3) Manual UI test checklist

Use the simulator (and ideally a real phone preview) to verify:

- **Sign-in page**
  - Input employee name and submit.
  - Validate empty-value warnings and success state.
- **Dashboard page**
  - Cards/buttons navigate to attendance and finance pages.
  - Layout remains readable on narrow-width devices.
- **Attendance page**
  - Add/edit attendance entries.
  - Confirm data persistence after reload (local storage).
- **Finance page**
  - Tuition and salary calculations update correctly when inputs change.
  - Edge case: discount larger than gross tuition should result in `0` net tuition.

### 4) Debugging tips in DevTools

- Use **Console** for JS logs and runtime errors.
- Use **WXML/WXSS inspector** for layout/styling checks.
- Use **Storage panel** to inspect local cached records.
- Use **Preview** QR code to test on a real WeChat client.

### 5) Quick smoke test flow

1. Sign in with a test employee.
2. Open Attendance and create one record.
3. Open Finance and run one tuition and one salary calculation.
4. Close/reopen simulator, confirm stored values remain.
