import productX from "../assets/productPage/productX.svg";
import productY from "../assets/productPage/productY.svg";
import room from "../assets/productPage/room.svg";

const productDetailData = {
    en: {
        infoTop: {
            title: "Shop",
            breadcrumb: ["Home", "Shop"]
        },

        product: {
            title: "Floating Phone",
            stars: "4",
            reviews: "10 Reviews",
            price: "$1,139.33",
            availabilityText: "Availability :",
            availability: " In Stock",
            description:
                "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
            button: "Select Options",
            colors: ["blue", "green", "orange", "dark"],
            images: {
                main: productY, 
                gallery: [
                    productX, 
                    productY  
                ]
            }
        },

        tabs: [
            {id:"producttab1", name: "Description"},
            {id:"producttab2", name: "Additional Information"},
            {id:"producttab3", name: "Reviews", count:"(0)"}
        ],

        content: {
            image: room, 

            textBlock: {
                title: "the quick fox jumps over",
                paragraphs: [
                    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
                    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
                    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
                ]
            },

            listBlock1: {
                title: "the quick fox jumps over",
                items: [
                    {id:"listItem1", text:"the quick fox jumps over the lazy dog"},
                    {id:"listItem2",text:"the quick fox jumps over the lazy dog"},
                    {id:"listItem3",text:"the quick fox jumps over the lazy dog"},
                    {id:"listItem4",text:"the quick fox jumps over the lazy dog"},
                ]
            },

            listBlock2: {
                title: "the quick fox jumps over",
                items: [
                    {id:"list2Item1", text:"the quick fox jumps over the lazy dog"},
                    {id:"list2Item2",text:"the quick fox jumps over the lazy dog"},
                    {id:"list2Item3",text:"the quick fox jumps over the lazy dog"},             
                ]
            }
        }
    },

    tr: {
        infoTop: {
            title: "Mağaza",
            breadcrumb: ["Ana Sayfa", "Mağaza"]
        },

        product: {
            title: "Yüzen Telefon",
            stars: "4",
            reviews: "10 Yorum",
            price: "$1,139.33",
            availabilityText: "Stok Durumu :",
            availability: " Stokta Var",
            description:
                "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
            button: "Seçenekleri Seç",
            colors: ["blue", "green", "orange", "dark"],
            images: {
                main: productY, 
                gallery: [
                    productX, 
                    productY  
                ]
            }
        },

        tabs: [
            {id:"producttab4",name: "Açıklama"},
            {id:"producttab5",name: "Ek Bilgiler"},
            {id:"producttab6",name: "Yorumlar", count:"(0)"}
        ],

        content: {
            image: room, 

            textBlock: {
                title: "hızlı tilki üzerinden atlar",
                paragraphs: [
                    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
                    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.",
                    "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
                ]
            },

            listBlock1: {
                title: "hızlı tilki üzerinden atlar",
                items: [
                    {id:"listItem5", text:"the quick fox jumps over the lazy dog"},
                    {id:"listItem6",text:"the quick fox jumps over the lazy dog"},
                    {id:"listItem7",text:"the quick fox jumps over the lazy dog"},
                    {id:"listItem8",text:"the quick fox jumps over the lazy dog"},
                ]
            },

            listBlock2: {
                title: "hızlı tilki üzerinden atlar",
                items: [
                    {id:"list2Item4", text:"the quick fox jumps over the lazy dog"},
                    {id:"list2Item5",text:"the quick fox jumps over the lazy dog"},
                    {id:"list2Item6",text:"the quick fox jumps over the lazy dog"},             
                ]
            }
        }
    }
};

export default productDetailData;