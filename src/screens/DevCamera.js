import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions';

export class DevCamera extends Component {
	static navigationOptions = {
		title:'Camera'
	}

	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>DevCamera</Text>
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

const DevCameraConnect = connect(mapStateToProps, { checkLogin })(DevCamera);
export default DevCameraConnect;