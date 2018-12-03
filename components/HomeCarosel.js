import React,{Component} from 'react';
import {View,Text} from 'react-native';
import Carousel ,{Pagination} from 'react-native-snap-carousel';

export default class HomeCarosel extends Component{
    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }
    render(){
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
        );
    }
}