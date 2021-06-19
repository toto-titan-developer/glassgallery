$('.slider_one_big_picture').EasySlides();

// NOTE**** Each subImgs array must contant minimum 2 values
const database = [
    {
        name: "Hanging Lantern Green",
        type: "Candle Holder",
        mainImg: "./images/glass/GlassLantern1.png",
        subImgs: [
            "./images/glass/GlassLantern1_A.png",
            "./images/glass/GlassLantern1_B.png",
            "./images/glass/GlassLantern1_C.png",
        ],

    },
    {
        name: "Hanging Lantern Red",
        type: "Candle Holder",
        mainImg: "./images/glass/GlassLantern2.png",
        subImgs: [
            "./images/glass/GlassLantern2_A.png",
            "./images/glass/GlassLantern2_B.png"

        ],

    },
    {
        name: "Hanging Cube Green",
        type: "Candle Holder",
        mainImg: "./images/glass/GlassLantern3_cube.png",
        subImgs: [
            "./images/glass/GlassLantern3_cube_A.png",
            "./images/glass/GlassLantern3_cube_B.png",
            "./images/glass/GlassLantern3_cube_C.png"
        ],

    },
    {
        name: "Green and Blue Reflector",
        type: "Center Piece",
        mainImg: "./images/glass/CenterPieceCandle.png",
        subImgs: [
            "./images/glass/CenterPieceCandle_A.png",
            "./images/glass/CenterPieceCandle_B.png",
            "./images/glass/CenterPieceCandle_C.png",
            "./images/glass/CenterPieceCandle_D.png",
            "./images/glass/CenterPieceCandle_E.png",
            "./images/glass/CenterPieceCandle_F.png",
            "./images/glass/CenterPieceCandle_G.png",
        ],

    },
    {
        name: "Multi Candle Holder",
        type: "Center Piece",
        mainImg: "./images/glass/CenterPieceCandle2.png",
        subImgs: [
            "./images/glass/CenterPieceCandle2_A.png",
            "./images/glass/CenterPieceCandle2_B.png",
            "./images/glass/CenterPieceCandle2_C.png",
            "./images/glass/CenterPieceCandle2_D.png",
            "./images/glass/CenterPieceCandle2_E.png"
        ],

    },
    {
        name: "Checkered Cube",
        type: "Center Piece",
        mainImg: "./images/glass/CenterPieceCandle3.png",
        subImgs: [
            "./images/glass/CenterPieceCandle3_A.png",
            "./images/glass/CenterPieceCandle3_B.png",
            "./images/glass/CenterPieceCandle3_C.png",
            "./images/glass/CenterPieceCandle3_D.png",
        ],

    },
    {
        name: "Two Colour Cube",
        type: "Center Piece",
        mainImg: "./images/glass/CenterPieceCandle4.png",
        subImgs: [
            "./images/glass/CenterPieceCandle4_A.png",
            "./images/glass/CenterPieceCandle4_B.png",
            "./images/glass/CenterPieceCandle4_C.png",
        ],

    },
    {
        name: "Octahedron Candle Holder",
        type: "Center Piece",
        mainImg: "./images/glass/CenterPieceCandle5.png",
        subImgs: [
            "./images/glass/CenterPieceCandle5_A.png",
            "./images/glass/CenterPieceCandle5_B.png",
            "./images/glass/CenterPieceCandle5_C.png",
        ],

    },
    {
        name: "S Box",
        type: "Jewlery Box",
        mainImg: "./images/glass/JewleryBox1.png",
        subImgs: [
            "./images/glass/JewleryBox1_B.png",
            "./images/glass/JewleryBox1_A.png",
            "./images/glass/JewleryBox1_C.png",
            "./images/glass/JewleryBox1_D.png",
        ],

    },
    {
        name: "Heart Box",
        type: "Jewlery Box",
        mainImg: "./images/glass/JewleryBox2.png",
        subImgs: [
            "./images/glass/JewleryBox2_A.png",
            "./images/glass/JewleryBox2_B.png",
            "./images/glass/JewleryBox2_C.png",
        ],

    },
    {
        name: "Cactus Box",
        type: "Jewlery Box",
        mainImg: "./images/glass/JewleryBox3.png",
        subImgs: [
            "./images/glass/JewleryBox3_A.png",
            "./images/glass/JewleryBox3_B.png",
            "./images/glass/JewleryBox3_C.png",
            "./images/glass/JewleryBox3_D.png",
        ],

    },
    {
        name: "Koala Box",
        type: "Jewlery Box",
        mainImg: "./images/glass/JewleryBox4.png",
        subImgs: [
            "./images/glass/JewleryBox4_A.png",
            "./images/glass/JewleryBox4_B.png",
            "./images/glass/JewleryBox4_C.png",
            "./images/glass/JewleryBox4_D.png",
            "./images/glass/JewleryBox4_E.png",
        ],

    },
    {
        name: "Cloudy Night",
        type: "Suncatcher",
        mainImg: "./images/glass/Suncatcher1.png",
        subImgs: [
            "./images/glass/Suncatcher1_A.png",
            "./images/glass/Suncatcher1_B.png",
            "./images/glass/Suncatcher1_C.png",
            "./images/glass/Suncatcher1_D.png"
            
        ],

    },
    {
        name: "Timber Wolf",
        type: "Suncatcher",
        mainImg: "./images/glass/Suncatcher2.png",
        subImgs: [
            "./images/glass/Suncatcher2_A.png",
            "./images/glass/Suncatcher2_B.png",
            "./images/glass/Suncatcher2_C.png",
            "./images/glass/Suncatcher2_D.png",
        ],

    },
    {
        name: "Hyrulian Crest",
        type: "Suncatcher",
        mainImg: "./images/glass/Suncatcher3.png",
        subImgs: [
            "./images/glass/Suncatcher3_A.png",
            "./images/glass/Suncatcher3_B.png",
        ],

    },
    {
        name: "Grand Piano",
        type: "Suncatcher",
        mainImg: "./images/glass/Suncatcher4.png",
        subImgs: [
            "./images/glass/Suncatcher4_A.png",
            "./images/glass/Suncatcher4_B.png",
            "./images/glass/Suncatcher4_C.png",
            "./images/glass/Suncatcher4_D.png",
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
        // console.log("Name :", obj.childNodes[3].children[0].innerHTML);
        // console.log("Type :", obj.childNodes[3].children[1].innerHTML);
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
        // console.log(images);
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
const glassElements = document.querySelectorAll(".glass_object");
const filter = document.querySelector("#search_filter");
console.log(glassElements[0].children[1].children[1].innerHTML);
console.log(filter.options[filter.selectedIndex].value);
function FilterChange() {
    let filterVal = filter.options[filter.selectedIndex].value;
    if (filterVal === "All"){
        for (let i = 0; i < glassElements.length; i++){
            glassElements[i].style.display = "block";
        }
    }
    else {
        for (let i = 0; i < glassElements.length; i++){
            if(filterVal === glassElements[i].children[1].children[1].innerHTML){
                glassElements[i].style.display = "block";
            }
            else {
                glassElements[i].style.display = "none";
            }
        }
    }
}
