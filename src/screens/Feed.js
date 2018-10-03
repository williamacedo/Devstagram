import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { checkLogin } from '../actions/AuthActions';
import { getFeed } from '../actions/FeedActions';
import { NavigationActions, StackActions } from 'react-navigation';
import FeedItemFake from '../components/feed/FeedItemFake';
import FeedItem from '../components/feed/FeedItem';

export class Feed extends Component {
	static navigationOptions = {
		title:'Devstagram'
	}

	constructor(props) {
	  super(props);
	
	  this.state = {
	  	feedFake:[{"id":"3","id_user":"3","url":"https:\/\/alunos.b7web.com.br\/apis\/devstagram\/media\/photos\/i3.jpg","date_posted":"2018-01-01 14:30:00","name":"testador","avatar":"https:\/\/alunos.b7web.com.br\/apis\/devstagram\/media\/avatar\/default.jpg","like_count":"0","comments":[{"id":"1","id_user":"1","id_photo":"3","date_comment":"2018-01-01 18:00:00","txt":"Show de bola!","name":"Bonieky"}]},{"id":"2","id_user":"2","url":"https:\/\/alunos.b7web.com.br\/apis\/devstagram\/media\/photos\/i2.jpg","date_posted":"2018-01-01 13:45:00","name":"Testador","avatar":"https:\/\/alunos.b7web.com.br\/apis\/devstagram\/media\/avatar\/default.jpg","like_count":"0","comments":[]},{"id":"1","id_user":"2","url":"https:\/\/alunos.b7web.com.br\/apis\/devstagram\/media\/photos\/i1.jpg","date_posted":"2018-01-01 12:30:00","name":"Testador","avatar":"https:\/\/alunos.b7web.com.br\/apis\/devstagram\/media\/avatar\/default.jpg","like_count":"2","comments":[]}]
	  };
	  this.verifyStatus = this.verifyStatus.bind(this);
	}

	componentDidMount() {
		this.props.getFeed();
	}

	componentDidUpdate() {
		this.verifyStatus();
	}

	verifyStatus() {
		if(this.props.status === 2){
		this.props.navigation.dispatch(StackActions.reset({
			index:0,
			key:null,
			actions:[
				NavigationActions.navigate({routeName:'Tabs'})
			]
		}));			
		}
	}	

	/*

		{(this.props.feedLoading == false && this.props.feed.length == 0) &&
		<View style={styles.feedZero}>
			<Text>Não há items a serem mostrados</Text>
		</View>
		{(this.props.feedLoading == false && this.props.feed.length > 0) &&

		}		
	}
	*/

	render() {
		return (
			<View style={styles.container}>
				{this.props.feedLoading == true &&
					<View>
						<FeedItemFake />
						<FeedItemFake />
					</View>
				}
				<FlatList
					data={this.state.feedFake}
					renderItem={({item})=><FeedItem data={item} nav={this.props.navigation} />}
					keyExtractor={(item)=>item.id}
					style={styles.feed}
				/>				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1
	},
	feed:{
		flex: 1
	},
	feedZero:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status,
		feed:state.feed.feed,
		feedLoading:state.feed.feedLoading
	};
};

const FeedConnect = connect(mapStateToProps, { checkLogin, getFeed })(Feed);
export default FeedConnect;