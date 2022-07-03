import ThemeContext from "../contexts/ThemeContext";

import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Container from "../components/Container";

export default function Home() {
  return (
    <Container>
      <Header />
      <ThemeContext.Consumer>
        {(value) => <SideBar onChange={value.changeTheme} />}
      </ThemeContext.Consumer>
    </Container>
  );
}
