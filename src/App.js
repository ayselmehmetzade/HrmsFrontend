import "./App.css";
import Dashboard from "./layouts/Dashboard";
import Navi from "./layouts/Navi";
import JobPostList from "./pages/jobPosting/jobPostingList";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Container className="main">
        <Navi></Navi>
        <Dashboard></Dashboard>
        <JobPostList></JobPostList>
      </Container>
    </div>
  );
}

export default App;
