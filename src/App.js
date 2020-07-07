import React from 'react';
// import Box from './Components/Box';
// import Charts from './Components/Charts';
// import Selectcountry from './Components/Selectcountry';
import { Box, Charts, Countryselector } from './Components';
import styles from './App.module.css';
import { getData } from './api';
import COVIDimage from './image/image.png';
import MyAvatar from './Components/image';


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetecheddata = await getData();
    this.setState({ data: fetecheddata });

  }

  handleCountryChange = async (country) => {
    const fetechedData = await getData(country);

    this.setState({ data: fetechedData, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={COVIDimage} alt="COVID-19" />
        <Countryselector handleCountryChange={this.handleCountryChange} />
        <Box data={data} />
        <Charts data={data} country={country} />

        <div className={styles.footer}>
          <div id={styles.button}></div>
          <div id={styles.containe}>
            <div id={styles.cont}>
              <div className={styles.footer_center}>
                <h3>Created by:<i className={styles.modname}> Zunair Ahmad <MyAvatar /></i></h3>


              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
