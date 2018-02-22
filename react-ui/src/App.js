import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = {
        response: ''
    };
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      fetching: true
    };
  }

  componentDidMount() {
    fetch('/api/hello')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          message: json.message,
          fetching: false
        });
      }).catch(e => {
        this.setState({
          message: `API call failed: ${e}`,
          fetching: false
        });
      })
  }
    // componentDidMount() {
    //     this.callApi()
    //         .then(res => {
    //             console.log(res)
    //             const {id, image, title, subtitle, brand, reviews, retailer, details, tags, sales} = res[0];
    //             let dataObj = {
    //                 id,
    //                 image,
    //                 subtitle,
    //                 brand,
    //                 reviews,
    //                 retailer,
    //                 details,
    //                 tags,
    //                 sales,
    //                 title
    //             }
    //             this.setState({ response: dataObj })
    //         })
    //         .catch(err => console.log(err));
    // }
    // callApi = async () => {
    //     const response = await fetch('/api/json');
    //     const body = await response.json();
    //
    //     if (response.status !== 200) throw Error(body.message);
    //
    //     return body;
    // };


    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {'This is '}
          <a href="https://github.com/Nfinley/heroku-cra-node">
            {'create-react-app with a custom Node/Express server'}
          </a><br/>
        </p>
        <p className="App-intro">
          {this.state.fetching
            ? 'Fetching message from API'
            : this.state.message}
        </p>
      </div>
    );
  }
}

export default App;
