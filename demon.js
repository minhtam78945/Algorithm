const api = 'https://jsonplaceholder.typicode.com/posts';
fetch(api)
    .then(response => response.json())
    .then(posts => {
        var renders = posts.map(post => {
            return `<li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            </li>`

        });
        var render = renders.join('');
        const ul = document.getElementById("ul").innerHTML = render;

    })
