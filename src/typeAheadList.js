var TypeAheadList = React.createClass({
  render: function() {
    var postListItems = this.props.posts.map(function(post){
        return(
          <li key={post.ID}>{post.title}</li>
        )
      })

    return (
      <ol>
        {postListItems}
      </ol>
    )
  }
})
