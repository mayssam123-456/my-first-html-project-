var festivals = [];

function festival(name, location, images, price, description) {
    return {
        name: name,
        location: location,
        images: images,
        price: price,
        description: description
    };
}

var item1 = festival(
    'Carnevale di Venezia',
    "italy",
    [
        "https://st2.depositphotos.com/1007630/6315/i/450/depositphotos_63152773-stock-photo-carneval-mask-in-venice-venetian.jpg",
        "https://media.istockphoto.com/id/1359908441/photo/carnevale-di-venezia.jpg?s=612x612&w=0&k=20&c=71Ty1uxXOYuX-VjiqrgpNwQkhlB4M-8no_LU4UZGyxc=",
        "https://www.shutterstock.com/image-photo/venice-italy-february-4-2024-600nw-2422226779.jpg",
        "https://media.gettyimages.com/id/72796888/it/foto/two-people-in-carnival-costumes-venice-portrait.jpg?s=612x612&w=gi&k=20&c=DW0y9bfhGvz77LNgDol1R0AUrPw6DB6Km9hr-8qZ4qQ="
    ],
    "90$",
    "The Carnival of Venice (Carnevale di Venezia) is a world-famous festival held in Venice"
);

var item2 = festival(
    'Palio di Siena',
    "italy",
    [
        "https://media.gettyimages.com/id/176616628/photo/restricted-to-editorial-use-no-marketing-no-advertising-campaigns-supporters-of-the-contrada.jpg?s=612x612&w=gi&k=20&c=FBJTobUlqZCQa-foKsmES_VHNReXUc_km_Srkqe8Yt4=",
        "https://paliodisiena.photography/wp-content/gallery/home/Foto-Quadrivia-e-Tittia-Palio-di-Siena.jpg",
        "https://www.toscana.info/wp-content/uploads/sites/123/siena-palio-di-siena-costumi.jpg",
        "https://st2.depositphotos.com/1605004/44304/i/450/depositphotos_443046720-stock-photo-siena-italy-april-contrada-valdimontone.jpg"
    ],
    "200$",
    "The Palio di Siena is a historic horse race held twice a year in Siena's Piazza del Campo"
);

var item3 = festival(
    "La Tomatina di Ivrea",
    "spain",
    [
        "https://d36tnp772eyphs.cloudfront.net/blogs/1/2018/11/La-Tomatina-festival-in-Spain.jpg",
        "https://kickasstrips.com/wp-content/uploads/2017/04/Food-fight-festival-la-tomatina-tomato-battle4-Small.jpg",
        "https://media02.stockfood.com/largepreviews/MjE3MDczODk0Nw==/70023837-People-at-the-tomato-festival-Tomatina-Tomato-Festival-Bunol-Valencia-Spain.jpg"
    ],
    "Free",
    "TLa Tomatina Festival started the last Wednesday of August in 1945 when some young people spent time in the town square to attend the Giants and Big-Heads figures parade. One participant's Big-head fell off, as a result of the festivities. The participant flew into a fit of rage, and began hitting everything in their path. There was a market stall of vegetables that fell victim to the fury of the crowd, as people started to pelt each other with tomatoes until the local forces ended the fruit battle."
);

festivals.push(item1, item2, item3);

function show() {
    $("#bt").on("click", function () {
        var locationInput = $("#titre").val().toLowerCase(); 
        var x = [];

        for (let i = 0; i < festivals.length; i++) {
            if (festivals[i].location === locationInput) {
                x.push(festivals[i]);
            }
        }


        $("#results").empty();


        for (let i = 0; i < x.length; i++) {
            $("#results").append(`
                <div class="festival-item">
                    <h2>${x[i].name}</h2>
                    <h2>${x[i].location}</h2>
                    <img src="${x[i].images[0]}" id="image-${i}" class="festival-image" /> 
                    <p>${x[i].description}</p>
                    <h3>${x[i].price}</h3>
                </div>
            `);


            $(`#image-${i}`).on("click", function () {
                toggleImage(x[i], i);
            });
        }

        if (x.length === 0) {
            $("#results").append("<p>No festivals found for this location.</p>");
        }
    });
}

var counter = [];
function toggleImage(item, index) {
    if (!counter[index]) {
        counter[index] = 0;
    }
    counter[index] = (counter[index] + 1) % item.images.length;
    $(`#image-${index}`).attr("src", item.images[counter[index]]);
}


show();
