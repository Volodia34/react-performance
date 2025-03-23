## 📊 Performance Profiling

This section provides performance analysis of the app **before and after optimizations** using `React.memo`, `useMemo`, and `useCallback`.

### 🔍 Metrics Overview

| Metric               | Before Optimization | After Optimization           |
|----------------------|------------------|------------------------------|
| **Render Duration**  | 25.5ms           | 15.2ms ✅                     |
| **Commit Duration**  | ~25ms            | ~13ms ✅                      |
| **FilterBar Render** | Not visible      | ✅ 1ms only                   |
| **CountryList**      | Full rerender    | Partially updated or skipped ✅ |
| **Update Trigger**   | CountryProvider  | createRoot() ✅               |
|   Flame Graph   |                  |                              |
|  Ranked Chart   |                  |                              |
---

### 🔁 Sorting Interaction: `"name"` → `"population"`

This test interaction simulates a user changing the sorting type, which should only update the relevant parts of the UI.

#### 🔴 Before Optimization

- `CountryList` fully re-rendered even for sort change.
- `Render Duration:` **25.5ms**
- Caused by: `CountryProvider` update
- Flame Graph: 
- Ranked Chart:

---

#### ✅ After Optimization

- Only relevant components updated (e.g., no re-render of `FilterBar`)
- `Render Duration:` **15.2ms**
- Triggered by `createRoot()` (initial render)
- Flame Graph:
- Ranked Chart: