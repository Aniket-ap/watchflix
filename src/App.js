import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;

/**
 *
 * Head
 * Body
 *    Sidebar
 *          MenuItems
 *    MainContainer
 *          ButtonList
 *          VideoContainer
 *                VideoCard
 * Footer
 *
 */
