import ThemeContext from "../contexts/ThemeContext";

import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <ThemeContext.Consumer>
        {(value) => (
          <button onClick={() => value.changeTheme()}>Dark Mode</button>
        )}
      </ThemeContext.Consumer>
    </>
  );
}
