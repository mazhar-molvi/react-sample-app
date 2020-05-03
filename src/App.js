import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { fetchServices, fetchProviders } from './actions/services';
import Services from './components/Services';
import Providers from './components/Providers';
import Provider from './components/Provider';

export class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentProvider: undefined,
      view: 'Home'
    }
  }
  async componentDidMount() {
    const { fetchServices, fetchProviders } = this.props;
    await fetchServices();
    await fetchProviders();
  }

  handleControlClick = (e, currentProvider) => {
    this.setState({ currentProvider, view: 'Provider' });
  }

  handleBack = () => {
    this.setState({ currentProvider: undefined, view: 'Home' });
  }

  render() {
    const { services, providres } = this.props;
    const { currentProvider, view } = this.state;
    return (
      <div className="App">
        {view === 'Home' && (
          <div>
            <h2> Control </h2>
            <Services rows={services} />
            <h2> Result </h2>
            <Providers rows={providres} handleControlClick={this.handleControlClick} />
          </div>
        )}
        {view === 'Provider' && (
        <Provider row={currentProvider} handleBack={this.handleBack}/>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    services: state.servicessReducer.services,
    providres: state.servicessReducer.providres,
  };
};

const mapDispatchToProps = {
  fetchServices,
  fetchProviders
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
