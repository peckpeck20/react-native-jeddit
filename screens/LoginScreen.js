import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const SIGNIN_USER = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      password
      posts {
        title
      }
    }
  }
`;

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'xxxxxx@com',
      password: '12312412',
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const { email, password } = this.state;
    return (
      <Mutation
        mutation={SIGNIN_USER}
        variables={{ email, password }}
        onCompleted={() => this.props.navigation.navigate('Home')}
        // onError={error => {
        //   return <ErrorToast error={error} />;
        // }}
        //refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { loading, error, data }) => {
          /* if (error) return <p>{error.toString()}</p>;
          if (loading) return <h1>Submitting... one sec :D</h1>; */
          /* if (data) return <Text>yup</Text>; */

          return (
            <View style={styles.container}>
              <StatusBar hidden={true} />
              {/* {error && <ErrorToast error={error} />} */}
              <View style={styles.formContainer}>
                <Text>email</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                  autoFocus={true}
                />
                <Text>password</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                  secureTextEntry={true}
                />
              </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => signin()}
                >
                  <Text style={styles.whiteText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate('Home')}
                >
                  <Text style={styles.whiteText}>Home</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </Mutation>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 10,
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
    padding: 12,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  whiteText: {
    color: 'white',
  },
  buttonContainer: {
    flex: 2,
    padding: 20,
    alignItems: 'center',
  },
  button: {
    padding: 15,
    backgroundColor: '#841584',
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default LoginScreen;
