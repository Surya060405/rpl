

# Update General Rules Section

## Overview
Replace the current 4 general rules with the 6 new rules provided. Each rule will get an appropriate icon and be displayed in the existing animated card grid, adjusted to a 3-column layout (2 rows of 3) to accommodate 6 rules cleanly.

## Changes

### File: `src/pages/Home.tsx`

**1. Update the `rules` array (lines 8-29)** with the 6 new rules and appropriate icons:

| # | Title | Description | Icon |
|---|-------|-------------|------|
| 1 | College ID Mandatory | College ID card is mandatory for each participant in the tournament. | `IdCard` |
| 2 | Cricket - Department Wise | Cricket will be played Department Wise. All the departments must register their teams before the Tournament. | `Trophy` (new import) |
| 3 | Other Sports - Hall/Hostel Wise | All the other sports will be played Hall/Hostel wise. One person can play from any single Hall/Hostel only. | `Building2` (new import) |
| 4 | Day Scholars | Day Scholars can register in tournament by contacting with respective JMCR/Sports Secretary of any Hall/Hostel. | `Users` (new import) |
| 5 | Alumni Participation | Alumni from respective Departments and Halls/Hostels can participate in the tournament. | `GraduationCap` (keep) |
| 6 | Rule Violations | Violation of General Rules will lead to direct disqualification from the tournament. | `Scale` (keep) |

**2. Update imports** -- Replace `Clock` with `Trophy`, `Building2`, and `Users` from `lucide-react`.

**3. Update grid layout** -- Change from `lg:grid-cols-4` to `lg:grid-cols-3` so the 6 cards display as a clean 2x3 grid on large screens (and 2-column on medium screens as before).

## Summary
- Only `src/pages/Home.tsx` is modified
- The animation variants and section structure remain unchanged
- Icons are all from the already-installed `lucide-react` package

