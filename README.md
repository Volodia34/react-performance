## 📊 Performance Profiling

## Testing algorithm
Change the sorting type from "name" to "population", will compare the optimization of the component FilterBar.tsx.



This section provides performance analysis of the app **before and after optimizations** using `React.memo`, `useMemo`, and `useCallback`.

### 🔍 Metrics Overview

| Metric               | Before Optimization          | After Optimization  |
|----------------------|------------------------------|---------------------|
| **Commit Duration**  | 2.7s                         | ~28ms               |
| **Render Duration:** | 25.5ms                       | ~15-20ms (peak)     |
| **Flame Graph**      |                            |  |
| **Ranked Chart**     |  |  |

---

### 🧪 Profiler Screenshots

#### 🕒 Before Optimization

- **Commit Duration:** 2.7s

- **Render Duration:** 25.5ms

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

