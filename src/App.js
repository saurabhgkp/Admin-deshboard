import Dashbord from "./component/Dashbord";
import NavBar from "./component/NavBar";
import "./App.css"
import LogInPage from "./component/dashbord/LogInPage";

function App() {
  const token = window.localStorage.getItem("token");
  return (
    <>
      {!token ? (
        <LogInPage />
      ) : (
        <div className="">
      
          <NavBar />
          <Dashbord />
        </div>
      )}
    </>
  );
}

export default App;
