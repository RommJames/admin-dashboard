let mainCardContainer = document.querySelector("#main-card-container");
let certificateHTML = document.querySelector("#certificate-card");

mainCardContainer.innerHTML += projects.map(
    ({link, title, description})=> 
    `
    <div class="main-card">
        <h3>${title}</h3>
        <p>${description}</p>
        <div id="main-card-icons">
            <a href="#Bookmark" target="_blank">
                <img src="media/icons/bookmark-outline.svg" alt="bookmark-icon">
            </a>      
            <a href="${link}" target="_blank">
                <img src="media/icons/eye.svg" alt="view-icon">
            </a>      
            <a href="https://github.com/RommJames" target="_blank">
                <img src="media/icons/github.svg" alt="github-icon">
            </a>      
            <a href="#delete" target="_blank">
                <img src="media/icons/delete-outline.svg" alt="delete-icon">
            </a>      
            <a href="#share" target="_blank">
                <img src="media/icons/share.svg" alt="share-icon">
            </a>      
            
        </div>
    </div>
    `
).join("");

certificateHTML.innerHTML += certificates.map(
    ({img, title, description})=>
    `
        <div class="list-certificate">  
            <h3>${title}</h3>     
            <p>${description}</p>
            <a href="media/certificates/${img}" style="display: inline-block;" target="_blank">
                <img src="media/icons/eye.svg" alt="view-icon">
            </a>   
        </div>
    `
).join("<hr style=\"margin: 10px auto;\">")
