function deletePost(index) {
    var savedPosts = localStorage.getItem('posts');
    var posts = savedPosts ? JSON.parse(savedPosts) : [];
  
    if (index >= 0 && index < posts.length) {
      posts.splice(index, 1);
      localStorage.setItem('posts', JSON.stringify(posts));
      alert('Пост видалено. Оновіть головну сторінку для перегляду.');
    } else {
      alert('Неприпустимий індекс поста.');
    }
  }
  
  function renderPosts(posts) {
    var contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';
  
    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      var postDiv = document.createElement('div');
      postDiv.classList.add('post');
  
      if (post.type === 'photo') {
        var photoImg = document.createElement('img');
        photoImg.src = post.url;
        postDiv.appendChild(photoImg);
      } else if (post.type === 'video') {
        var videoPlayer = document.createElement('video');
        videoPlayer.src = post.url;
        videoPlayer.controls = true;
        postDiv.appendChild(videoPlayer);
      }
  
      var messagePara = document.createElement('p');
      messagePara.textContent = post.message;
      postDiv.appendChild(messagePara);
  
      var deleteButton = document.createElement('button');
      deleteButton.textContent = 'Видалити';
      deleteButton.setAttribute('onclick', 'deletePost(' + i + ')');
      postDiv.appendChild(deleteButton);
  
      contentDiv.appendChild(postDiv);
    }
  }
  