class CommentList {
  constructor() {
    this.comments = []
  }

  addComment(text) {
    const comment = new Comment(text)
    this.comments.push(comment)
  }

  renderComments() {
    return '<ul>' + this.comments.map(comment => comment.render()).join('') + '</ul>'
  }
}
