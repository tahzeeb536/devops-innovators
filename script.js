document.addEventListener("DOMContentLoaded", function () {
    fetch("posts/posts.json")
        .then(response => response.json())
        .then(data => {
            let postsContainer = document.getElementById("blog-posts");

            data.forEach(post => {
                let postElement = document.createElement("div");
                postElement.classList.add("post");

                postElement.innerHTML = `
                    <h2>${post.title}</h2>
                    <p>${post.excerpt}</p>
                    <a href="${post.url}" class="read-more">Read more</a>
                `;

                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error("Error loading posts:", error));
});
