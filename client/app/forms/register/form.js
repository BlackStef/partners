import React from 'react';
import ReactNative from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Kohana } from 'react-native-textinput-effects';

import styles from './styles';

const {
  View,
  Text,
  TouchableOpacity
} = ReactNative;

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  render() {
    const {onSubmit, errors} = this.props;

    return (

      <View >
        <View style={styles.container}>

          <Kohana
            style={styles.input1}
            label={'username'}
            iconClass={FontAwesome}
            iconName={'user-circle'}
            iconColor={'#3c918c'}
            labelStyle={{ color: '#3c918c' }}
            inputStyle={{ color: '#3c918c' }}
            onChangeText={email => this.setState({email})}

          />
        </View>
        <View >


          {errors.email &&
          <Text
            style={styles.error}>
            {errors.email}
          </Text>
          }
          <Text style={styles.text}>

          </Text>
        </View>
        <View style={styles.container}>

          <Kohana
            style={styles.input1}
            label={'e-mail'}
            iconClass={FontAwesome}
            iconName={'user-circle'}
            iconColor={'#3c918c'}
            labelStyle={{ color: '#3c918c' }}
            inputStyle={{ color: '#3c918c' }}
            onChangeText={email => this.setState({email})}

          />
        </View>
        <View >


          {errors.email &&
          <Text
            style={styles.error}>
            {errors.email}
          </Text>
          }
          <Text style={styles.text}>

          </Text>
        </View>
        <View style ={styles.container}>

          <Kohana
            style={styles.input2}
            label={'password'}
            iconClass={MaterialsIcon}
            iconName={'https'}
            iconColor={'#3c918c'}
            labelStyle={{ color: '#3c918c' }}
            inputStyle={{ color: '#3c918c' }}
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}

          />
        </View>
        <View >

          {errors.password &&
          <Text
            style={styles.error}>
            {errors.password}
          </Text>
          }
        </View>
        <View style ={styles.container}>

          <Kohana
            style={styles.input1}
            label={'confirm password'}
            iconClass={MaterialsIcon}
            iconName={'https'}
            iconColor={'#3c918c'}
            labelStyle={{ color: '#3c918c' }}
            inputStyle={{ color: '#3c918c' }}
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}

          />
        </View>
        <View >

          {errors.password &&
          <Text
            style={styles.error}>
            {errors.password}
          </Text>
          }
        </View>


        <Text>
          {'\n'}
        </Text>
        <View >

          <TouchableOpacity
            onPress={() => onSubmit(this.state)}
            style = {styles.button}>
            <Text style={styles.text}>
              Register
            </Text>
          </TouchableOpacity>
          {errors.submit &&
          <Text
            style={styles.error}>
            {errors.submit}
          </Text>
          }
        </View>
      </View>

    );
  }
}

export default Form;
