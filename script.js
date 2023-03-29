const menuItems = document.querySelectorAll('nav ul li a');
console.log(menuItems);


menuItems.forEach(item =>{
if (item.href === window.location.href){
    item.classList.add('selected');
    console.log(`${item}  is selected`);
} else {
    item.classList.remove('selected');
}
})



const postContent = ["En butik som jag tycker är trevlig är en liten bokhandel som ligger mitt i stan. Där kan man hitta allt från nya spännande böcker till klassiker, och personalen är alltid så hjälpsam och kunnig. Atmosfären är mysig och avslappnad, och det är alltid en fröjd att besöka den här butiken.",
"Nusa Penida är en ö som ligger söder om Bali i Indonesien. Ön har några av de mest spektakulära vyerna i hela landet, inklusive kristallklart vatten, vita sandstränder och dramatiska klippformationer. Många besökare kommer hit för att dyka och snorkla, och man kan upptäcka allt från manta rays till valhajar i det omgivande vattnet. På land finns också en rad imponerande sevärdheter, inklusive T-rex-liknande klippformationer och vattenfall. Nusa Penida är verkligen en drömdestination för naturälskare och äventyrare.",
"Zebror är vackra på grund av deras unika och iögonfallande mönster av svarta och vita ränder. Dessa mönster har också visat sig ha en praktisk funktion, då de hjälper zebrorna att kamouflera sig mot rovdjur och undvika att bli attackerade. Zebror är också kända för att vara mycket sociala djur och har en stark familjestruktur.",
] 

const main = document.querySelector("main");
console.log(main);
const posts = document.querySelectorAll('main section .divOfPosts')
posts.forEach((post,index) => {
const containerOfPicture = post.querySelector(".container")
const picture = containerOfPicture.querySelector("img")


const containerOfText = post.querySelector('.containerOfText');
const paragraph = containerOfText.querySelector('p');
const headText = containerOfText.querySelector('h4');
const postText = postContent[index]; 
const shortenedText = postText.substring(0,40) + "...";
paragraph.textContent += shortenedText;

post.addEventListener("click", () => {
    const divOfPost = document.createElement("div");
    divOfPost.className = "fullTextOfPost";

    const divOfHeaderAndExit = document.createElement('div');
    divOfHeaderAndExit.className ="titleAndExit";

    const title = document.createElement("h1");
    title.innerText = headText.textContent;
    const x = document.createElement("span");
    x.innerText = "X";

    
    const divImgAndText = document.createElement("div");
    divImgAndText.className = "divImgAndText";
    
    const p = document.createElement("p");
    const img = document.createElement("img");
    img.className="pictureInPost";
    img.src = picture.src;
    p.textContent = postText;


    divImgAndText.append(img, p);
    divOfHeaderAndExit.append(title, x);
    divOfPost.append(divOfHeaderAndExit,divImgAndText);
    main.append(divOfPost);

    x.addEventListener("click", () => {
        divOfPost.remove();
    })

})
})