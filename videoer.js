
let allListe = [
    {Produkt: "Packing Cubes", Brand: "The Travel Pack", Kategori: "travel", fil: "videoer/packingCubes.mp4"},
    {Produkt: "Elektronik", Brand: "refurbed", Kategori: "tech", fil: "videoer/refurbedSaks.mp4"},
    {Produkt: "Vandhanefilter", Brand: "PureWaters", Kategori: "food", fil: "videoer/vandhanefilter.mp4"},
    {Produkt: "Rejsebureau", Brand: "Kilroy", Kategori: "travel", fil: "videoer/kilroyFridag.mp4"},
    {Produkt: "Labelprinter", Brand: "Lommeprinter", Kategori: "tech", fil: "videoer/labelprinter.mp4"},
    {Produkt: "Proteinpulver", Brand: "Protein.dk", Kategori: "food", fil: "videoer/clearWhey.mp4"},
    {Produkt: "Rejsebureau", Brand: "Kilroy", Kategori: "travel", fil: "videoer/uluru.mp4"},
    {Produkt: "Julekalender", Brand: "Karamel Kompagniet", Kategori: "food", fil: "videoer/julekalender.mp4"},
    {Produkt: "Projektor", Brand: "Nordicast", Kategori: "tech", fil: "videoer/projektor.mp4"},
    {Produkt: "Rådgivning", Brand: "dinApoteker", Kategori: "travel", fil: "videoer/dinApoteker.mp4"},    
];

let allKnap = document.getElementById("allknap");
let travelKnap = document.getElementById("travelknap");
let foodKnap = document.getElementById("foodknap");
let techKnap = document.getElementById("techknap");

travelKnap.addEventListener("click", function(){
    let travelListe = allListe.filter(function(element){
        return "travel" === element.Kategori;
    })
    createVideos(travelListe);
});

foodKnap.addEventListener("click", function(){
    let foodListe = allListe.filter(function(element){
        return "food" === element.Kategori;
    })
    createVideos(foodListe);
});

techKnap.addEventListener("click", function(){
    let techListe = allListe.filter(function(element){
        return "tech" === element.Kategori;
    })
    createVideos(techListe);
});

allKnap.addEventListener("click", function(){
    createVideos(allListe);
});

function createVideos(sorteretliste){
    let divlayer = document.getElementById("video");
    divlayer.replaceChildren();

    for (let video in sorteretliste){
        let videoElement = document.createElement("video");
        videoElement.setAttribute("controls", "");

        let sourceElement = document.createElement("source");
        sourceElement.setAttribute("src", sorteretliste[video].fil);
        sourceElement.setAttribute("type", "video/mp4");
        
        videoElement.appendChild(sourceElement);
        divlayer.appendChild(videoElement);

    }
}

createVideos(allListe);