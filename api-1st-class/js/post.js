function loadPost(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => displayPost(data))
}

/**
 * get the container element where you want to add the new elements
 * creat child element
 * set innerText or innerHTML 
 * appendChild
 */

function displayPost(posts){
  for(let post of posts){
    console.log(post);
    let postContainer = document.getElementById('posts-container');
    let postDive = document.createElement('div');
    postDive.classList.add('post')
    postDive.innerHTML = `
     <h4>User- ${post.userId} </h4>
     <h5>Post: ${post.title}titel<h5>
     <p>Post Description: ${post.body}</p>
    `;
    postContainer.appendChild(postDive);
  }
   

}

loadPost();
