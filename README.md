## 📊 Performance Profiling

This section provides performance analysis of the app **before and after optimizations** using `React.memo`, `useMemo`, and `useCallback`.

### 🔍 Metrics Overview

| Metric               | Before Optimization | After Optimization  |
|----------------------|---------------------|---------------------|
| **Commit Duration**  | ~85ms               | ~28ms               |
| **Render Duration**  | ~76ms (peak)        | ~15-20ms (peak)     |
| **User Interactions**| 4 per sort/filter   | 2-3 per operation   |
| **Flame Graph**      | Deep, heavy tree    | Flatter, smaller tree |
| **Ranked Chart**     | Many `CountryCard` re-renders | Minimal updates (only changed elements) |

---

### 🧪 Profiler Screenshots

#### 🕒 Before Optimization

- **Commit Duration:**  
  ![Commit Duration - Before](./screenshots/commit-before.png)

- **Render Duration:**  
  ![Render Duration - Before](./screenshots/render-before.png)

- **Flame Graph:**  
  ![Flame Graph - Before](./screenshots/flame-before.png)

- **Ranked Chart:**  
  ![Ranked Chart - Before](./screenshots/ranked-before.png)

- **Interactions:**  
  ![Interactions - Before](./screenshots/interactions-before.png)

---

#### ⚡ After Optimization

- **Commit Duration:**  
  ![Commit Duration - After](./screenshots/commit-after.png)

- **Render Duration:**  
  ![Render Duration - After](./screenshots/render-after.png)

- **Flame Graph:**  
  ![Flame Graph - After](./screenshots/flame-after.png)

- **Ranked Chart:**  
  ![Ranked Chart - After](./screenshots/ranked-after.png)

- **Interactions:**  
  ![Interactions - After](./screenshots/interactions-after.png)

---

### 🧠 Summary

By introducing performance optimizations:
- **Commit durations** dropped by ~60%.
- **Render durations** of reusable components like `CountryCard` significantly reduced.
- **Redundant re-renders** were eliminated due to memoization.
- The **Flame Graph** now shows a shallower component tree.
- **Ranked Chart** highlights only the updated parts of the UI instead of the whole list.
- **Fewer interactions** trigger re-renders, improving perceived responsiveness.

These optimizations make the app more scalable and maintainable, especially when working with large datasets.
