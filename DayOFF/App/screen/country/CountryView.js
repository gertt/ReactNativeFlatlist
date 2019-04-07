

import React, { Component } from "react";
import { Text,TouchableWithoutFeedback, Alert,View, FlatList} from 'react-native';

import styles from './style';

class CountryView extends Component {

  constructor(props) {
      super(props);
      console.log(props)
      console.log(props)
  
  }

   renderFooter = () => {
    if (!this.props.loading) return null;
    return (
      <Spinner size="large" />
    );
  };
  
  selectedItem = (item) =>{

    Alert.alert(item.toString())
    console.log('my item' + item )

  }
  
  renderSeparator = () => {
    return (
      <View style={styles.styleSeparator}/>
    );
  };

  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />; 
    }
    return (
      <TouchableWithoutFeedback onPress={(event)=>this.selectedItem(item.id)}>
      <View
        style={styles.item}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
      </TouchableWithoutFeedback>
    );
  };

  renderData() {
   
    return (            
      <FlatList
        data={this.props.data.data}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={this.renderSeparator}
        ListFooterComponent={this.renderFooter.bind(this)}
        onEndReachedThreshold={0.5}/>
        
       );
  }

  render() {
     return (
   <View style={styles.styleData}>
      {this.renderData()}
        </View>
    );
  }
}

export default CountryView;