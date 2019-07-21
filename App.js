/*
/!**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 *!/

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Button} from './src/Product/style'
const App = () => {

  send=()=>
  {
    let form = {
      "user":1,
      "products":[
        {
          "id":1,
          "quantity":8
        },
        {
          "id":2,
          "quantity":3
        }
      ]
    }
    fetch('http://10.0.2.2:8000/api/finish_cart',{
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(form)
    }).then(res => res.json()).then(res => {console.log(res);}).catch(console.error)
  }
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <View>
              <Button onPress={this.send}>
                <Text>Teste</Text>
              </Button>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
*/
import React, {Component, Fragment} from 'react'

import Loading from './src/components/Loading'
import Departments from './src/components/Departments'
import Users from './src/components/Users'
import Counter from './src/components/Counter'

const LoadingContext = React.createContext({
    loading: false,
    message: null,
    counter: 0,
    showLoading: message => {
    },
    hideLoading: () => {
    }
})

class App extends Component {
    state = {
        loading: false,
        message: null,
        counter: 0
    }

    showLoading = message => this.setState({
        loading: true,
        message
    })

    increment = () => this.setState({counter: this.state.counter + 1})
    decrement = () => this.setState({counter: this.state.counter - 1})

    hideLoading = () => this.setState({loading: false})

    render() {

        const {showLoading, hideLoading, increment, decrement} = this

        const value = {
            ...this.state,
            showLoading,
            hideLoading,
            increment,
            decrement
        }
        console.log(value)

        return (
            <LoadingContext.Provider value={value}>
                <LoadingContext.Consumer>
                    {
                        ({showLoading, hideLoading, loading, message, increment, decrement, counter}) => (
                            <Fragment>
                                <Users  {...{showLoading, hideLoading}}/>
                                <Departments {...{showLoading, hideLoading}}/>
                                <Loading {...{loading, message}} />
                                <Counter {...{increment, decrement, counter}}/>
                            </Fragment>
                        )
                    }
                </LoadingContext.Consumer>
            </LoadingContext.Provider>
        )
    }
}

export default App
