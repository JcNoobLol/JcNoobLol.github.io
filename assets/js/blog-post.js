//Start
var firebaseConfig = {
    apiKey: "AIzaSyB1quMmhEC8DpoVZkymuL2dBd0wxXXMll0",
authDomain: "jac-formdatabase.firebaseapp.com",
databaseURL: "https://jac-formdatabase-default-rtdb.firebaseio.com",
projectId: "jac-formdatabase",

  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
//end
const displayPosts = async () => {
  try {
    const postsRef = db.collection("jac-blogpost");
    const querySnapshot = await postsRef.orderBy("timestamp", "desc").get();

    const postsList = document.getElementById("post");

    querySnapshot.forEach((doc) => {
      const post = doc.data();
      const postElement = document.createElement("div");
      postElement.className = "post";
      postElement.innerHTML = `
      <div class='real'>
        <h2>${post.title}</h2>
        <img src='${post.imageURL}' alt='Image'><br><BR>
        <a href='./post.html?id=${doc.id}'>View post here</a>
        </div>
      `;
      postsList.appendChild(postElement);
    });
  } catch (error) {
    console.error("Error displaying posts: ", error);
  }
};

window.onload = () => {
  displayPosts();
};
window.onload = displayPosts;