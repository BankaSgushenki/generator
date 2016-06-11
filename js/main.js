Array.prototype.getRandomItem = function() {
	function getRandomIndex(max) {
		return Math.floor(Math.random()*(max))
	}
	return this[getRandomIndex(this.length)];
}

var Generator = React.createClass({
  getText: function() {
  	var data = this.props.data;
  	return data.desription.getRandomItem() + data.names.getRandomItem() + data.actions.getRandomItem() + data.reasons.getRandomItem();
  },
  getInitialState: function() {
    return {text: this.getText(), auto: false};
  },
  handleGenetateRequest: function(e) {
    this.setState({text: this.getText()});
  },
  handleAutoGenerate: function(e) {
  	if(this.state.auto) {
  		clearInterval(this.timer);
  		this.state.auto = false;
  	} else {
  		this.timer = setInterval(() => {
  			this.setState({text: this.getText(), auto: true});
  		}, 2000);
  	}
  },
  render: function() {
    return (
      <div className="generator raised jumbotron">
        <h2>Generator</h2>
        <p>Слышал, что {this.state.text}</p>
        <div className = "actions">
        	<input type="button" className = "btn btn-primary btn-md" value="Generate!" onClick={this.handleGenetateRequest}/>
        	<input type="button" className = "btn btn-success btn-md" value="Auto!" onClick={this.handleAutoGenerate}/>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <Generator data={dictionary}/>,
  document.getElementById('container')
);