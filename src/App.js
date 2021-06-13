import "./App.css";
import Navi from "./layouts/Navi";
import JobPostList from "./pages/jobPosting/jobPostingList";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import JobPositionList from "./pages/jobPosting/jobPosition/JobPositionList";
import CityList from "./pages/city/CityList";
import EmployerList from "./pages/user/employers/EmployerList";

function App() {
  return (
    <div className="App">
      <Container className="main">
        <Navi></Navi>
        <JobPostList></JobPostList>
        <JobPositionList></JobPositionList>
        <CityList></CityList>
        <EmployerList></EmployerList>
      </Container>
    </div>
  );
}

export default App;
