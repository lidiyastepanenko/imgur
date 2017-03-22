var React = require('react');
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState: function() {
    return {
      topics: []
    }
  },
  componentWillMount: function() {
    Actions.getTopics();
  },
  render: function() {
    return <div className="list-group">
      {this.renderTopics()}
    </div>
  },
  renderTopics: function() {
    return this.state.topics.map(function(topic){
      return <Link to={"topics/" + topic.id} className="col-sm-6 col-md-4" key={topic.id}>
        <h2>{topic.name}</h2>

         <p>{topic.description}</p>
        {
          topic.heroImage && <img width='150' height='100' src={topic.heroImage.link} alt="" />
        }
        </Link>     
    });
  },
  onChange: function(event, topics) {
    this.setState({topics: topics});
  }
});
