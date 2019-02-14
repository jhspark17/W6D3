class FollowToggle {
  constructor(el){
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.$el.on('click', e => {
      console.log("hello")
      this.handleClick();
    })
  }

 render() {
   this.followState === "followed" ? this.$el.html("followed") : this.$el.html("unfollowed")
  }

 handleClick() {
   if (this.followState === "unfollowed") {
   .then(() => {
     this.followState = "followed"
     this.render()
  })
  } else {
    return $.ajax({
      method: 'DELETE',
      url: `/users/${this.userId}/follow`,
      dataType: 'JSON'
    }).then(() => {
      this.followState = "unfollowed"
      this.render()
    })
  } 
 }
};

module.exports = FollowToggle;