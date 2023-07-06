import Editor from "./Editor";
import Header from "./Header";
import Code from "./Code";
import Result from "./Result";
import DataProvider from "../Context/DataProvider";
function App() {
  return (
    <DataProvider>
      <Header />
      <Code />
      <Result />
    </DataProvider>
  );
}

export default App;
