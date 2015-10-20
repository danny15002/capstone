var NewsFeed = React.createClass({
  render: function () {
    return (
      <div className="news-feed">
        <PostStatusForm className={""} userId={LoginStore.user().id}/>
        <FriendActivity />
      </div>
    )
  }
})
