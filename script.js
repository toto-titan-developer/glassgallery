const database = [
    {
        name: "Hanging Lantern Green",
        type: "Candle Holder",
        mainImg: "./images/glass/GlassLantern1.png",
        subImgs: [
            "GlassLantern1_grn.png"
        ],

    },
    {
        name: "Hanging Lantern Red",
        type: "Candle Holder",
        mainImg: "./images/glass/GlassLantern2.png",
        subImgs: [
            "GlassLantern2_red.png"
        ],

    },
    {
        name: "Hanging Cube Green",
        type: "Candle Holder",
        mainImg: "./images/glass/GlassLantern3_cube.png",
        subImgs: [
            "GlassLantern2_red.png"
        ],

    },
    {
        name: "Green & Blue Reflector",
        type: "Center Piece",
        mainImg: "./images/glass/CenterPieceCandle.png",
        subImgs: [
            "GlassLantern1_grn.png"
        ],

    },
    {
        name: "Multi Candle Holder",
        type: "Center Piece",
        mainImg: "./images/glass/CenterPieceCandle2.png",
        subImgs: [
            "GlassLantern1_grn.png"
        ],

    },
    {
        name: "Checkered Cube",
        type: "Center Piece",
        mainImg: "./images/glass/CenterPieceCandle3.png",
        subImgs: [
            "GlassLantern1_grn.png"
        ],

    },
    {
        name: "Two Colour Cube",
        type: "Center Piece",
        mainImg: "./images/glass/CenterPieceCandle4.png",
        subImgs: [
            "GlassLantern1_grn.png"
        ],

    },
    {
        name: "Octahedron Candle Holder",
        type: "Center Piece",
        mainImg: "./images/glass/CenterPieceCandle5.png",
        subImgs: [
            "GlassLantern1_grn.png"
        ],

    },
    {
        name: "S Box",
        type: "Jewlery Box",
        mainImg: "./images/glass/JewleryBox1.png",
        subImgs: [
            "GlassLantern1_grn.png"
        ],

    },
    {
        name: "Heart Box",
        type: "Jewlery Box",
        mainImg: "./images/glass/JewleryBox2.png",
        subImgs: [
            "GlassLantern1_grn.png"
        ],

    },
    {
        name: "Cactus Box",
        type: "Jewlery Box",
        mainImg: "./images/glass/JewleryBox3.png",
        subImgs: [
            "GlassLantern1_grn.png"
        ],

    },
    {
        name: "Koala Box",
        type: "Jewlery Box",
        mainImg: "./images/glass/JewleryBox4.png",
        subImgs: [
            "GlassLantern1_grn.png"
        ],

    },
    {
        name: "Cloudy Night",
        type: "Suncatcher",
        mainImg: "./images/glass/Suncatcher1.png",
        subImgs: [
            "GlassLantern1_grn.png"
        ],

    },
    {
        name: "Timber Wolf",
        type: "Suncatcher",
        mainImg: "./images/glass/Suncatcher2.png",
        subImgs: [
            "GlassLantern1_grn.png"
        ],

    },
    {
        name: "Hyrulian Crest",
        type: "Suncatcher",
        mainImg: "./images/glass/Suncatcher3.png",
        subImgs: [
            "GlassLantern1_grn.png"
        ],

    },
    {
        name: "Grand Piano",
        type: "Suncatcher",
        mainImg: "./images/glass/Suncatcher4.png",
        subImgs: [
            "GlassLantern1_grn.png"
        ],

    },

];



const galleryContainer = document.querySelector(".gallery_container");

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
// FOLLOW THIS
document.querySelectorAll(".glass_object").forEach((obj) => {
    obj.addEventListener("click", () => {
        console.log("Name :", obj.childNodes[3].children[0].innerHTML);
        console.log("Type :", obj.childNodes[3].children[1].innerHTML)
    })
})


function testFunction() {
    alert("this worked");
}
