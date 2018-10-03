import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class FeedItemFake extends Component {

	render() {

		return (
			<View style={styles.feedContainer}>
				<View style={styles.feedHeader}>
					<View style={styles.avatar}></View>
					<View style={styles.username}></View>
					<View style={styles.dateArea}>
						<View style={styles.postDate}></View>
					</View>
					
				</View>
				<View style={styles.feedBody}>

				</View>
			</View>
		);

	}

}

const styles = StyleSheet.create({
	feedContainer:{
		width: '100%',
		height: 300
	},
	feedHeader:{
		height: 70,
		flexDirection: 'row',
		alignItems: 'center'
	},
	avatar:{
		width: 40,
		height: 40,
		backgroundColor: '#CCCCCC',
		marginLeft: 10,
		marginRight: 15,
		borderRadius: 20
	},
	username:{
		width: 150,
		height: 20,
		backgroundColor: '#CCCCCC'
	},
	dateArea:{
		flex: 1,
		alignItems: 'flex-end'
	},
	postDate:{
		width: 80,
		height: 20,
		backgroundColor: '#CCCCCC',
		marginRight: 10		
	},
	feedBody:{
		flex: 1,
		backgroundColor: '#CCCCCC'
	}
});