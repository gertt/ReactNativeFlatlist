import React from 'react'
import SvgUri from 'react-native-svg-uri';

import {Dimensions} from 'react-native';

const AlarmIcon = ({width, height, fill, stroke, viewbox, style}) => {
  return (

    <SvgUri width={width} height={height} viewBox={viewbox} style={style}  source={require('../../res/img/homer.svg')} />
  )
}

AlarmIcon.defaultProps = {
  width: Dimensions.get('window').width/1,
  height: Dimensions.get('window').height/4,
  stroke: '#fff',
  fill: '#fff',
  viewbox:"0 0 100 100"
  
}

export default AlarmIcon