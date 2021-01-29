import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    streak: null,
  };

  async componentDidMount() {
    const url = "/api/customers";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ streak: data, loading: false });
  }

  render() {
    return (
      <div>
        {this.state.loading || !this.state.streak ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>{this.state.streak[0].yoga}</div>
          </div>
        )}
      </div>
    );
  }
}
