import productX from "../assets/productPage/productX.svg";
import productY from "../assets/productPage/productY.svg";
import room from "../assets/productPage/room.svg";
import cheese from "../assets/images/cheese.svg";
import whaleBin from "../assets/images/whaleBin.svg";
import candy from "../assets/images/candy.svg";
import bleach from "../assets/images/bleach.svg";

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
        },
        bestsellerProducts: {
                title: "BESTSELLER PRODUCTS",
                products: [
                    {
                        id: "best-prod-113",
                        name: "Graphic Design",
                        department: "English Department",
                        priceOld: "$16.48",
                        priceNew: "$6.48",
                        image: whaleBin,
                    },
                    {
                        id: "best-prod-114",
                        name: "Graphic Design",
                        department: "English Department",
                        priceOld: "$16.48",
                        priceNew: "$6.48",
                        image: cheese,
                    },
                    {
                        id: "best-prod-115",
                        name: "Graphic Design",
                        department: "English Department",
                        priceOld: "$16.48",
                        priceNew: "$6.48",
                        image: bleach,
                    },
                    {
                        id: "best-prod-116",
                        name: "Graphic Design",
                        department: "English Department",
                        priceOld: "$16.48",
                        priceNew: "$6.48",
                        image: candy,
                    },
                    {
                        id: "best-prod-117",
                        name: "Graphic Design",
                        department: "English Department",
                        priceOld: "$16.48",
                        priceNew: "$6.48",
                        image: whaleBin,
                    },
                    {
                        id: "best-prod-118",
                        name: "Graphic Design",
                        department: "English Department",
                        priceOld: "$16.48",
                        priceNew: "$6.48",
                        image: cheese,
                    },
                    {
                        id: "best-prod-119",
                        name: "Graphic Design",
                        department: "English Department",
                        priceOld: "$16.48",
                        priceNew: "$6.48",
                        image: bleach,
                    },
                    {
                        id: "best-prod-110",
                        name: "Graphic Design",
                        department: "English Department",
                        priceOld: "$16.48",
                        priceNew: "$6.48",
                        image: candy,
                    }
                ]
            },
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
        },

        bestsellerProducts: {
                    title: "EN ÇOK SATAN ÜRÜNLER",
                    products: [
                        {
                            id: "best-tr-prod-213",
                            name: "Grafik Tasarım",
                            department: "English Department",
                            priceOld: "$16.48",
                            priceNew: "$6.48",
                            image: whaleBin,
                        },
                        {
                            id: "best-tr-prod-214",
                            name: "Grafik Tasarım",
                            department: "English Department",
                            priceOld: "$16.48",
                            priceNew: "$6.48",
                            image: cheese,
                        },
                        {
                            id: "best-tr-prod-215",
                            name: "Grafik Tasarım",
                            department: "English Department",
                            priceOld: "$16.48",
                            priceNew: "$6.48",
                            image: bleach,
                        },
                        {
                            id: "best-tr-prod-216",
                            name: "Grafik Tasarım",
                            department: "English Department",
                            priceOld: "$16.48",
                            priceNew: "$6.48",
                            image: candy,
                        },
                        {
                            id: "best-tr-prod-217",
                            name: "Grafik Tasarım",
                            department: "English Department",
                            priceOld: "$16.48",
                            priceNew: "$6.48",
                            image: whaleBin,
                        },
                        {
                            id: "best-tr-prod-218",
                            name: "Grafik Tasarım",
                            department: "English Department",
                            priceOld: "$16.48",
                            priceNew: "$6.48",
                            image: cheese,
                        },
                        {
                            id: "best-tr-prod-219",
                            name: "Grafik Tasarım",
                            department: "English Department",
                            priceOld: "$16.48",
                            priceNew: "$6.48",
                            image: bleach,
                        },
                        {
                            id: "best-tr-prod-220",
                            name: "Grafik Tasarım",
                            department: "English Department",
                            priceOld: "$16.48",
                            priceNew: "$6.48",
                            image: candy,
                        },
                    ]
                },
    }
};

export default productDetailData;