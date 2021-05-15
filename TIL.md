# TIL

<details>
  <summary>unknown</summary>
  <div markdown="1">

  </div>
</details>

<details>
  <summary>2021-05-13</summary>
  <div markdown="1">

  - Switch from "react-router-dom" -> 한 번에 오직 하나의 Route만 Render하게 한다.

  ```javascript
  <Route path="/" exact component={Home} />
  <Route path="/tv" exact component={TV} />
  ```

  - exact -> 정확히 path가 일치할 때 Render하게 한다.

  </div>
</details>

<details>
  <summary>2021-05-15</summary>
  <div markdown="1">

  - [axios](https://www.npmjs.com/package/axios)
    - 해당 프로젝트에서는 API 작업을 하기 위해 install 했다.
    - > Promise based HTTP client for the browser and node.js
    - **기능**
      - 브라우저로부터 XHR을 만든다
      - node.js로부터 HTTP 요청을 만든다.
      - Promise API를 지원한다.
      - 요청과 응답을 가로챈다.
      - 요청과 응답 데이터를 변환한다.
      - 요청을 취소한다.
      - JSON 데이터 자동 변환
      - XSRF(Cross-site request forgery) 방어를 위한 클라이언트 사이드 지원

  - **컨테이너, 프레젠터 패턴**
    - 컨테이너는 data, state, logic을 가진다.
    - 프레젠터는 값을 보여주기만 한다. 그저 함수형 컴포넌트.


  - Detail Container를 구현할 때 알아야 할 것들
    - Detail을 위한 URL 정보를 받아들이도록 구현할 때, Components/Header.js에 Link를 추가할 필요는 없다. 왜? default로 react-router-dom의 withRouter가 모든 정보를 Route들에게 prop의 형태로 줄 것이다.

  </div>
</details>