var NewsFeed = React.createClass({
  render: function () {
    return (
      <div className="news-feed">
<<<<<<< HEAD
        <PostStatusFormN className={""} userId={LoginStore.user().id}/>
=======
        <PostStatusForm className={""} userId={LoginStore.user().id}/>
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
        <FriendActivity />
      </div>
    )
  }
})
