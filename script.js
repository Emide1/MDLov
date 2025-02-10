document.getElementById("uploadSong").addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (file) {
        let listItem = document.createElement("li");
        listItem.textContent = file.name;
        document.getElementById("songList").appendChild(listItem);
    }
});

document.getElementById("uploadImage").addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (file) {
        let img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        document.getElementById("imageGrid").appendChild(img);
    }
});