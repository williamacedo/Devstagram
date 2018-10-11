import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions';

export class Profile extends Component {
	static navigationOptions = ({navigation}) => {
		return {
			title:navigation.getParam('name')
		};
	}

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	id:this.props.navigation.getParam('id')
	  };
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Profile</Text>
				<Text>{this.state.id}</Text>
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