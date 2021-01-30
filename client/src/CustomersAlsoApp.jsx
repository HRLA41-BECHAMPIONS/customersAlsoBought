import React from 'react';
import axios from 'axios';
import Slidee2 from './components/carousel2.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const imageArr = [];
    return axios.get('/api/bechampions/suggestions')
      .then((response) => {
        response.data.forEach((item) => {
          imageArr.push(item[0]);
        });
        // console.log(imageArr);#
        this.setState({ images: imageArr });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
        <div style={{ textAlign: "center" }}>
        <Slidee2 images2={this.state.images} />
      </div>
    );
  }
}

export default App;
