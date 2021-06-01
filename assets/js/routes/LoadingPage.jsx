import React, { Component } from 'react';

class LoadingPage extends Component {

  componentDidMount() {
      setTimeout(() => {
        this.props.history.push('/home')
      }, 3000)
  }

  render() {
    return (
      <div className="loader">
        Loading Page
      </div>
    );
  }
}

export default LoadingPage;