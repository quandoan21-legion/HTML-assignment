document.getElementById('commentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var commentInput = document.getElementById('comment-form');
  var commentValue = commentInput.value.trim();

  if (commentValue !== '') {
    alert('Comment text: ' + commentValue);
  } else {
    alert('Comment is empty!');
  }
});
