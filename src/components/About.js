import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Component Did Mount");
    //API Call
  }

  render() {
    // console.log("Parent Render");

    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React web series.</h2>
        {/* <User name={"Ankita K (function)"} /> */}
        <UserClass name={"First (Class)"} location={"Goa (class)"} />
        {/* <UserClass name={"Second (Class)"} location={"US (class)"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React web series.</h2>
//       {/* <User name={"Ankita K (function)"} /> */}
//       <UserClass name={"Ankita K (Class)"} location={"Goa (class)"} />
//     </div>
//   );
// };

export default About;
