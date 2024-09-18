import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React 🚀"
);
console.log(heading);

//We can write a functional component using a normal function
// const Title = function () {
//   return (
//     <h1 className="head" tabIndex="1">
//       Namaste React using JSX 🚀
//     </h1>
//   );
// };

// const elem = <span>React Element: </span>;

const title = (
  <h1 className="head" tabIndex="1">
    {/* {elem} */}
    Namaste React using JSX1 🚀
  </h1>
);

const Title2 = () => (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX2 🚀
  </h1>
);
// console.log(jsxHeading);

const number = 10000;

//React Functional Component
const HeadingComponent = () => (
  <div id="container">
    {title}
    <h2>{number}</h2>
    <h2>{100 + 200}</h2>
    <h2>{console.log("something...")}</h2>
    <Title2 />
    <Title2></Title2>
    {Title2()}
    <h1>Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeadingComponent />);
