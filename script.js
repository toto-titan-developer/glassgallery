$('.slider_one_big_picture').EasySlides();

// NOTE**** Each subImgs array must contant minimum 2 values
const database = [
    {
        name: "Hanging Lantern Green",
        type: "Candle Holder",
        mainImg: "./images/glass/GlassLantern1.png",
        subImgs: [
            "./images/glass/GlassLantern1_grn.png",
            "./images/glass/GlassLantern1_grn.png",
            "./images/glass/GlassLantern1_grn.png",
            "./images/glass/GlassLantern1_grn.png",
            "./images/glass/GlassLantern1_grn.png",
        ],

    },
    {
        name: "Hanging Lantern Red",
        type: "Candle Holder",
        mainImg: "./images/glass/GlassLantern2.png",
        subImgs: [
            "./images/glass/GlassLantern2_red.png",
            "./images/glass/GlassLantern2_red.png"

        ],

    },
    {
        name: "Hanging Cube Green",
        type: "Candle Holder",
        mainImg: "./images/glass/GlassLantern3_cube.png",
        subImgs: [
            "./images/glass/GlassLantern2_red.png",
            "./images/glass/GlassLantern2_red.png"
        ],

    },
    {
        name: "Green and Blue Reflector",
        type: "Center Piece",
        mainImg: "./images/glass/CenterPieceCandle.png",
        subImgs: [
            "./images/glass/GlassLantern2_red.png",
            "./images/glass/GlassLantern2_red.png"
        ],

    },
    {
        name: "Multi Candle Holder",
        type: "Center Piece",
        mainImg: "./images/glass/CenterPieceCandle2.png",
        subImgs: [
            "./images/glass/GlassLantern2_red.png",
            "./images/glass/GlassLantern2_red.png"
        ],

    },
    {
        name: "Checkered Cube",
        type: "Center Piece",
        mainImg: "./images/glass/CenterPieceCandle3.png",
        subImgs: [
            "./images/glass/GlassLantern2_red.png",
            "./images/glass/GlassLantern2_red.png"
        ],

    },
    {
        name: "Two Colour Cube",
        type: "Center Piece",
        mainImg: "./images/glass/CenterPieceCandle4.png",
        subImgs: [
            "./images/glass/GlassLantern2_red.png",
            "./images/glass/GlassLantern2_red.png"
        ],

    },
    {
        name: "Octahedron Candle Holder",
        type: "Center Piece",
        mainImg: "./images/glass/CenterPieceCandle5.png",
        subImgs: [
            "./images/glass/GlassLantern2_red.png",
            "./images/glass/GlassLantern2_red.png"
        ],

    },
    {
        name: "S Box",
        type: "Jewlery Box",
        mainImg: "./images/glass/JewleryBox1.png",
        subImgs: [
            "./images/glass/GlassLantern2_red.png",
            "./images/glass/GlassLantern2_red.png"
        ],

    },
    {
        name: "Heart Box",
        type: "Jewlery Box",
        mainImg: "./images/glass/JewleryBox2.png",
        subImgs: [
            "./images/glass/GlassLantern2_red.png",
            "./images/glass/GlassLantern2_red.png"
        ],

    },
    {
        name: "Cactus Box",
        type: "Jewlery Box",
        mainImg: "./images/glass/JewleryBox3.png",
        subImgs: [
            "./images/glass/GlassLantern2_red.png",
            "./images/glass/GlassLantern2_red.png"
        ],

    },
    {
        name: "Koala Box",
        type: "Jewlery Box",
        mainImg: "./images/glass/JewleryBox4.png",
        subImgs: [
            "./images/glass/GlassLantern2_red.png",
            "./images/glass/GlassLantern2_red.png"
        ],

    },
    {
        name: "Cloudy Night",
        type: "Suncatcher",
        mainImg: "./images/glass/Suncatcher1.png",
        subImgs: [
            "./images/glass/GlassLantern2_red.png",
            "./images/glass/GlassLantern2_red.png"
        ],

    },
    {
        name: "Timber Wolf",
        type: "Suncatcher",
        mainImg: "./images/glass/Suncatcher2.png",
        subImgs: [
            "./images/glass/GlassLantern2_red.png",
            "./images/glass/GlassLantern2_red.png"
        ],

    },
    {
        name: "Hyrulian Crest",
        type: "Suncatcher",
        mainImg: "./images/glass/Suncatcher3.png",
        subImgs: [
            "./images/glass/GlassLantern2_red.png",
            "./images/glass/GlassLantern2_red.png"
        ],

    },
    {
        name: "Grand Piano",
        type: "Suncatcher",
        mainImg: "./images/glass/Suncatcher4.png",
        subImgs: [
            "./images/glass/GlassLantern2_red.png",
            "./images/glass/GlassLantern2_red.png"
        ],

    },

];



const galleryContainer = document.querySelector(".gallery_container");
const popUpWindow = document.getElementById("popUp_window");
const sliderContainer= document.querySelector(".slider");

for (let i = 0; i < database.length; i++){
    let obj = database[i];
    let newDiv = document.createElement("div");
    newDiv.classList.add("glass_object");
    let content = 
    `
    <img src="${obj.mainImg}" alt="glass" height="290px" width="290px">
        <div class="glass_info">
            <h3 class="glass_title">${obj.name}</h3>
            <h4 class="glass_type">${obj.type}</h4>
        </div>
    `;
    newDiv.innerHTML = content;
    galleryContainer.appendChild(newDiv);
};


// Opening Pop Up Window
document.querySelectorAll(".glass_object").forEach((obj) => {
    obj.addEventListener("click", () => {
        console.log("Name :", obj.childNodes[3].children[0].innerHTML);
        console.log("Type :", obj.childNodes[3].children[1].innerHTML);
        let dataObject = null;
        for(let i = 0; i < database.length; i++){
            if(obj.childNodes[3].children[0].innerHTML === database[i].name){
                dataObject = database[i];
                // console.log("My Object is : ", dataObject);
                break;
            }
        }
        let images = dataObject["subImgs"].map(arr => arr);
        images.unshift(dataObject["mainImg"]);
        console.log(images);
        for(let i = 0; i< images.length; i++){
            let newImg = document.createElement("IMG");
            newImg.classList.add("glass_img");
            newImg.setAttribute("src", images[i]);
            newImg.setAttribute("alt", "Glass Art Piece");
            sliderContainer.appendChild(newImg);
        }

        $('.slider_one_big_picture').EasySlides();
        popUpWindow.style.display = "flex";
    })
})
// Closing Pop Up
function ClosePopUp() {
    popUpWindow.style.display = "none";
    let glassItems = document.querySelectorAll(".glass_img");
    for(let i = 0; i< glassItems.length; i++){
        sliderContainer.removeChild(glassItems[i]);       
    }

}


// Search Functions

