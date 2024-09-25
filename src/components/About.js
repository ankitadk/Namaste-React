import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

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
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
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
