import React from 'react';
import MovieApp from "./components/MovieApp.js"
import WithLoading from './components/WithLoading';
import './App.css';
const AppWithLoading = WithLoading(MovieApp);
class App extends React.Component {
  state = {
    loading: true,
  }
  componentDidMount(){
    setTimeout(() => { 
      this.setState({loading: false})
    },2000)
}
render() {
    return (
      <AppWithLoading isLoading={this.state.loading}  />
    )
  }
}

export default App;