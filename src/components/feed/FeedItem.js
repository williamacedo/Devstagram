import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class FeedItem extends Component {

	render() {

		return (
			<View style={styles.feedContainer}>
				<View style={styles.feedHeader}>
					<View style={styles.avatar}>
						<Image source={{uri:this.props.data.avatar}} style={styles.avatarImg} />
					</View>
					<View style={styles.username}><Text>{this.props.data.name}</Text></View>
					<View style={styles.dateArea}>
						<View style={styles.postDate}></View>
					</View>
					
				</View>
				<View style={styles.feedBody}>
					<Image source={{uri:this.props.data.url}} style={styles.feedImage} />
				</View>
				<View style={styles.feedFooter}>
					<View style={styles.likeArea}>
						<Text>{this.props.data.like_count}</Text>
					</View>
					<View style={styles.commentArea}>
						<Text>{this.props.data.comments.length}</Text>
					</View>					
				</View>
				{this.props.data.comments.length > 0 &&
					<View style={styles.commentsContainer}>
						{this.props.data.comments.map((citem) => {
							return (
								<Text>{citem.name}: {citem.txt}</Text>
							);
						})}
					</View>
				}
				<View style={styles.feedEndLine}>

				</View>
			</View>
		);

	}

}

const styles = StyleSheet.create({
	feedContainer:{
		width: '100%'
	},
	feedHeader:{
		height: 70,
		flexDirection: 'row',
		alignItems: 'center'
	},
	avatar:{
		width: 40,
		height: 40,
		backgroundColor: '#00FF00',
		marginLeft: 10,
		marginRight: 15,
		borderRadius: 20
	},
	avatarImg:{
		width: 40,
		height: 40
	},
	username:{
		width: 150,
		height: 25,
	},
	dateArea:{
		flex: 1,
		alignItems: 'flex-end'
	},
	postDate:{
		width: 80,
		height: 20,
		backgroundColor: '#00FF00',
		marginRight: 10		
	},
	feedBody:{
		flex: 1,
		backgroundColor: '#00FF00'
	},
	feedImage:{
		width: 300,
		height: 300
	},
	feedFooter:{
		height: 60,
		flexDirection: 'row'
	},
	likeArea:{
		width: 60,
		height: 60,
		backgroundColor: '#CCCCCC'
	},
	commentArea:{
		width: 60,
		height: 60,
		backgroundColor: '#CCCCCC'		
	},
	commentsContainer:{
		padding: 10
	},
	feedEndLine:{
		height: 2,
		backgroundColor: '#CCCCCC'
	}
});