### 1)

`uuid`

고유한 아이디 라이브러리

### 2)

```jsx
// 아래와 같이 작성하면 useState가 호출될 때마다 함수를 호출해서 반환된 값을 초기값으로 전달한다.
// 이는 함수를 계속 호출하기 때문에 문제가 있다. 따라서 두 번째와 같이 작성해야 한다. (콜백함수 활용)
// useState는 내부적으로 값을 기억하고 있다. 그래서 콜백함수를 사용하면 useState가 초기값이 필요할때만 함수를 호출한다.
// const [todos, setTodos] = useState(readTodosFromLocalStorage());
const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
```

### 3)

`다크 모드 팁`

css를 계획적이고 통일성있게 작성하면 쉽게 구현할 수 있다.

```css
:root {
  --color-bg-dark: #f5f5f5;
  --color-bg: #fdfffd;
  --color-grey: #d1d1d1;
  --color-text: #22243b;
  --color-accent: #f16e03;
  --color-white: white;
  --color-scrollbar: #aaa7a7;
}

html.dark {
  --color-bg-dark: #1a1c35;
  --color-bg: #22243b;
  --color-grey: #4e4e4e;
  --color-text: #fdfffd;
}
```

```javascript
function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark"); // html
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}
```
