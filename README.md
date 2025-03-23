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
|   Flame Graph   |<img width="621" alt="Screenshot 2025-03-23 at 12 50 40" src="https://github.com/user-attachments/assets/19be7388-841d-455d-9a7e-5eaaeaa0a72f" /> |<img width="614" alt="Screenshot 2025-03-23 at 12 43 27" src="https://github.com/user-attachments/assets/aa640e87-07db-498e-8855-2797640fc46f" />|
|  Ranked Chart   |<img width="616" alt="Screenshot 2025-03-23 at 12 50 53" src="https://github.com/user-attachments/assets/83dc6963-af13-4c1a-9e63-49d6b3612a59" /> |<img width="622" alt="Screenshot 2025-03-23 at 12 44 39" src="https://github.com/user-attachments/assets/44ba886f-cf10-47d7-b390-3af126e3bbcb" />|
---

### 🔁 Sorting Interaction: `"name"` → `"population"`

This test interaction simulates a user changing the sorting type, which should only update the relevant parts of the UI.

#### 🔴 Before Optimization

- `CountryList` fully re-rendered even for sort change.
- `Render Duration:` **25.5ms**
- Caused by: `CountryProvider` update
- Flame Graph: <img width="621" alt="Screenshot 2025-03-23 at 12 50 40" src="https://github.com/user-attachments/assets/19be7388-841d-455d-9a7e-5eaaeaa0a72f" />
- Ranked Chart: <img width="616" alt="Screenshot 2025-03-23 at 12 50 53" src="https://github.com/user-attachments/assets/83dc6963-af13-4c1a-9e63-49d6b3612a59" />

---

#### ✅ After Optimization

- Only relevant components updated (e.g., no re-render of `FilterBar`)
- `Render Duration:` **15.2ms**
- Triggered by `createRoot()` (initial render)
- Flame Graph: <img width="614" alt="Screenshot 2025-03-23 at 12 43 27" src="https://github.com/user-attachments/assets/aa640e87-07db-498e-8855-2797640fc46f" />
- Ranked Chart: <img width="622" alt="Screenshot 2025-03-23 at 12 44 39" src="https://github.com/user-attachments/assets/44ba886f-cf10-47d7-b390-3af126e3bbcb" />
