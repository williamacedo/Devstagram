import React, { Component } from 'react';
import { View, ImageBackground, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin, changeEmail, changePassword, signInUser } from '../actions/AuthActions';
import { NavigationActions, StackActions } from 'react-navigation';

export class Login extends Component {
	static navigationOptions = {
		title:'Login',
		header:null
	}

	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this.signUpAction = this.signUpAction.bind(this);
	  this.loginAction = this.loginAction.bind(this);
	  this.verifyStatus = this.verifyStatus.bind(this);
	}

	signUpAction() {
		this.props.navigation.navigate('SignUp');
	}

	loginAction() {
		this.props.signInUser(this.props.email, this.props.password);
	}

	verifyStatus() {
		if(this.props.status === 1){
		this.props.navigation.dispatch(StackActions.reset({
			index:0,
			actions:[
				NavigationActions.navigate({routeName:'Tabs'})
			]
		}));			
		}
	}

	componentDidUpdate() {
		this.verifyStatus();
	}

	render() {
		return (
			<ImageBackground source={require('../assets/bg.jpg')} style={styles.container}>
				<Text style={styles.logo}>Devstragam</Text>

				<TextInput value={this.props.email} onChangeText={this.props.changeEmail} style={styles.input} placeholder="Digite seu e-mail" placeholderTextColor="#FFFFFF" underlineColorAndroid="transparent" />
				<TextInput value={this.props.password} onChangeText={this.props.changePassword} style={styles.input} secureTextEntry={true} placeholder="Digite sua senha" placeholderTextColor="#FFFFFF" underlineColorAndroid="transparent" />
				<TouchableHighlight onPress={this.loginAction} style={styles.actionButton} underlayColor="#307EAF">
					<Text style={styles.actionButtonText}>Fazer o login</Text>
				</TouchableHighlight>

				<TouchableHighlight onPress={this.signUpAction} style={styles.signButton} underlayColor="transparent">
					<Text style={styles.signButtonText}>Ainda não tem cadastro? Clique aqui</Text>
				</TouchableHighlight>				
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		alignItems:'center',
		justifyContent:'center',
		resizeMode:'contain'
	},
	logo:{
		fontSize: 32,
		color: '#FFFFFF',
		marginBottom: 30
	},
	input:{
		width: "90%",
		height: 50,
		backgroundColor: 'rgba(255, 255, 255, 0.15)',
		borderRadius: 5,
		color:'#FFFFFF',
		fontSize: 17,
		marginBottom: 10
	},
	actionButton:{
		width: '90%',
		height: 50,
		backgroundColor: 'transparent',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#FFFFFF',
		alignItems:'center',
		justifyContent:'center'		
	},
	actionButtonText:{
		color: '#FFFFFF',
		fontSize: 15
	},
	signButton:{
		width: '90%',
		height: 50,
		backgroundColor: 'transparent',
		alignItems:'center',
		justifyContent:'center'	,
		marginTop: 40
	},
	signButtonText:{
		color: '#FFFFFF',
		fontSize: 13
	}
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status,
		email:state.auth.email,
		password:state.auth.password
	};
};

const LoginConnect = connect(mapStateToProps, { checkLogin, changeEmail, changePassword, signInUser })(Login);
export default LoginConnect;