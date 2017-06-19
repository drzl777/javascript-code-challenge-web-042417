$(document).ready(function(){
  // your code here!
  const myApp = new App()
  myApp.render()

})

class App {
  constructor() {
    this.commentList = new CommentList()
    this.commentText = $('form#note-form input').first()
    this.commentContainer = $('#comment-list')
    this.submitBtn = $('form#note-form')
    this.submitBtn.submit(this.onSubmit.bind(this))
  }

  onSubmit (event) {
    event.preventDefault()
    const text = this.commentText.val()
    this.commentList.addComment(text)
    this.commentText.val('')
    this.render()
  }

  render() {
    this.commentContainer.html(this.commentList.renderComments())
  }
}
