import React from 'react';
import { connect } from 'react-redux';
import { fetchPublicPhotos } from '../actions/flickrActions';
import {Panel,Thumbnail} from 'react-bootstrap';
@connect((store) => {
  return {
    data: store.data,
  };
})

export default class Main extends React.Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    const term = this.refs.tags.value;
    this.props.dispatch(fetchPublicPhotos(term))
  }

    render(){
        const photos = [];
        for(var k in this.props.data.items){
            photos.push(<div className="col-lg-3 col-xs-6 col-sm-6" key={k.toString()}>
                <Panel  bsStyle="primary">
                <Panel.Heading>
                    <Panel.Title componentClass="h3">{(this.props.data.items[k].title).slice(0,60)} </Panel.Title>
                </Panel.Heading>
                <Panel.Body >
                    <Thumbnail src={this.props.data.items[k].media.m} />
                </Panel.Body>
            </Panel>
            </div> )
        }


    return (

      <div className="container">
        <h1>Flickr Images</h1>

        <input type="text" ref="tags" placeholder="Search tags" />
        <button onClick={this.handleSearch}>Go</button>

        <h3>{this.props.data.title}</h3>
        <div className="row">
          {photos}
        </div>
      </div>


      )
  }
}

