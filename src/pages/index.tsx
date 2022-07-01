import ThemeContext from "../contexts/ThemeContext";

export default function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <ThemeContext.Consumer>
        {(value) => (
          <button onClick={() => value.changeTheme()}>Dark Mode</button>
        )}
      </ThemeContext.Consumer>
    </div>
  );
}
