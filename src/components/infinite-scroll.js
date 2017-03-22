var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Actions = require('../actions');
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');
var ImagePreview = require('./image-preview');
var InfiniteScroll = require('react-component-infinite-scroll');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      hasMore: true,
      items: 
    };
  },
  loadMore: function (page) {
    console.log('load');
    setTimeout(function () {
      this.setState({
        items: this.state.items.concat,
        hasMore: (page < 5)
      });
    }.bind(this), 1000);
  },
  render: function () {
    console.log('render');
    var InfiniteScroll = React.addons.InfiniteScroll;
    return 
    <InfiniteScroll loader={<div className="loader">Loading ...</div>} loadMore={this.loadMore} hasMore={this.state.hasMore}>
        {this.state.items}
    </InfiniteScroll > );
}
});