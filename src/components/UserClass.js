import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    // this.state = {
    //   count: 0,
    //   count2: 1,
    // };

    this.state = {
      useInfo: {
        name: "Dummy",
        location: "Default",
      },
    };

    // console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child Component Did Mount");

    const data = await fetch("https://api.github.com/users/ankitadk");
    const json = await data.json();
    // console.log(json);

    this.setState({
      useInfo: json,
    });
  }

  componentDidUpdate() {
    // console.log("Component Did Update");
  }

  componentWillUnmount() {
    // console.log("Component Will Unmount");
  }

  render() {
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;
    const { name, location, avatar_url } = this.state.useInfo;

    // console.log(this.props.name + " Child Render");

    return (
      <div className="user-card">
        {/* <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        {/* <h2>Count2: {count2}</h2> */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: ankitak17</h4>
      </div>
    );
  }
}

export default UserClass;
