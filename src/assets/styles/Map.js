import { Platform } from 'react-native'
import styled from 'styled-components/native'

export const LocationBox = styled.View`
  background: #FFF;
  shadow-color: #000;
  shadow-offset: 0;
  shadow-opacity: 0.1;
  margin-top: 10px;
  margin-left: 0;
  elevation: 1;
  border: 1px solid #DDD;
  border-radius: 3px;
  flex-direction: row;
`;

export const LocationBoxDestiny = styled.View`
  background: #FFF;
  shadow-color: #000;
  shadow-offset: 0;
  shadow-opacity: 0.1;
  margin-top: 20px;
  margin-left: 20px;
  elevation: 1;
  border: 1px solid #DDD;
  border-radius: 3px;
  flex-direction: row;
`;

export const LocationText = styled.Text`
  margin: 8px 10px;
  font-size: 14px;
  color: #333;
`;

export const LocationTimeBox = styled.View`
  background: #222;
  padding: 3px 8px;
`;

export const LocationTimeText = styled.Text`
  color: #fff;
  font-size: 12px;
  text-align: center;
`;

export const LocationTimeTextSmall = styled.Text`
  color: #fff;
  font-size: 10px;
  text-align: center;
`;

export const Back = styled.TouchableOpacity`
  position: absolute;
  top: ${ Platform.select({ios: 60, android: 40}) };
  left: 20px;
`;

export const Menu = styled.TouchableOpacity`
  position: absolute;
  top: ${ Platform.select({ios: 40, android: 20}) };
  left: 10px;
`;