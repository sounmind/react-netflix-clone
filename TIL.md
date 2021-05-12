# TIL

## unknown

- 컨테이너, 프레젠터 패턴
  - 컨테이너는 data, state, logic을 가진다.
  - 프레젠터는 값을 보여주기만 한다. 그저 함수형 컴포넌트.

## 2021-05-13

- Switch from "react-router-dom" -> 한 번에 오직 하나의 Route만 Render하게 한다.

```javascript
<Route path="/" exact component={Home} />
<Route path="/tv" exact component={TV} />
```

- exact -> 정확히 path가 일치할 때 Render하게 한다.

