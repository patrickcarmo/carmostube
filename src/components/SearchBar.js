import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { buscaVideo } from '../store/actions/busca-video';

//const SearchBar = props => {
class SearchBar extends Component {

	constructor(props) {
		super(props);

		//on load
		this.props.buscaVideo('ReactJS')
	}

	pesquisaTermo = e => {
		const termo = e.target.value;
		if (e.key === "Enter") {
			this.props.buscaVideo(termo);
		}
	}

	render() {
		return (
			<div className="search-bar">
				<Segment stacked>
					<Input
						icon="search"
						size="large"
						placeholder="Search.."
						onKeyDown={(e) => this.pesquisaTermo(e)}
					></Input>
				</Segment>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		buscaVideo: (termo) => dispatch(buscaVideo(termo))
	}
}

export default connect(null, mapDispatchToProps)(SearchBar);