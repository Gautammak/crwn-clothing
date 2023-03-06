import "./App.css";
import { Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/homepage/HomePage.component";

const HatsPage = () => (
  <div>
    <h1> HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />

      <switch></switch>
    </div>
  );
}

// const HomePage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <button onclick={() => props.history.push("/topics")}> Topics</button>
//       <h1>HOME PAGE</h1>
//     </div>
//   );
// };

// const TopicsList = (props) => {
//   return (
//     <div>
//       <h1>TOPIC LIST PAGE</h1>
//       <Link to={`{props.match.url}/13`}> TO TOPIC 13</Link>
//       <Link to={`{props.match.url}/17`}> TO TOPIC 17</Link>
//       <Link to={`{props.match.url}/21`}> TO TOPIC 21</Link>
//     </div>
//   );
// };
// const TopicDetails = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>TOPIC DETAIL PAGE:{props.match.params.topicId}</h1>
//     </div>
//   );
// };

// function App() {
//   return (
//     <div>
//       <Route exact path="/" component={HomePage} />
//       <Route exact path="/BLOG/ASDQW/topics" component={TopicsList} />
//       <Route
//         exact
//         path="/BLOG/ASDQW/topics/:topicId"
//         component={TopicDetails}
//       />
//       <Route exact path="/BLOG/topics" component={TopicsList} />
//       <Route exact path="/BLOG/topics/:topicId" component={TopicDetails} />
//     </div>
//   );
// }

export default App;
