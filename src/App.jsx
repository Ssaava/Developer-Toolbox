import { Header, Main, SideNav } from "./components";
function App() {
  return (
    <>
      <div className=" h-full box-border">
        <Header />
        <SideNav />
        <Main />
      </div>
    </>
  );
}

export default App;
