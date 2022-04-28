import React, {Component} from 'react';
import {View,Text} from "react-native";

class App extends Component {

  constructor() {
    super();
    this.state={
      name:"sajib",
          age:22,
          city:'rajshahi'
    };
  }

  // state={
  //
  //   name:"sajib",
  //   age:22,
  //   city:'rajshahi'
  // }

    render() {
        return (
            <View>
                <Text> {this.state.name}</Text>
              <Text> {this.state.age}</Text>
              <Text> {this.state.city}</Text>
            </View>
        );
    }
}

export default App;
