let loadComments = () => {
  fetch('https://jsonplaceholder.typicode.com/comments')
  .then(res => res.json())
  .then(data => DisplayComments(data.slice(0, 21)))
}

let DisplayComments = comments =>{
  let CommentsConteinar = document.getElementById('comments-conntainer');

  comments.forEach(comment => {
    console.log(comment)
    let commentDiv = document.createElement('div');
    commentDiv.classList.add('comment')
    commentDiv.innerHTML =`
     <div onclick="loadPost('${comment.id}')">
     <h3>comments :  ${comment.body}  </h3>
     <p>email: ${comment.email}</p>
     <p>id: ${comment.postId}</p>
     <p>name: ${comment.name}</p>
    </div>
    `;
    CommentsConteinar.appendChild(commentDiv);
  });
  
}

let loadPost = (postId) => {
   let url = `https://jsonplaceholder.typicode.com/posts/${postId}`
   fetch(url)
   .then(res => res.json())
   .then(data =>  dislayPost(data))
}

let dislayPost = comment => {
 let postContainer = document.getElementById('post-container');
 postContainer.innerHTML = `
  <h3>post : ${comment.body}</h3>
 `

  
}

loadComments();