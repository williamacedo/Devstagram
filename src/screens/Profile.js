import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions';

export class Profile extends Component {
	static navigationOptions = {
		title:'Perfil'
	}

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Profile</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1
	}
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status
	};
};

const ProfileConnect = connect(mapStateToProps, { checkLogin })(Profile);
export default ProfileConnect;