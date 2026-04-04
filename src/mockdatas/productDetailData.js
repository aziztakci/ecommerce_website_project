import productX from "../assets/productPage/productX.svg";
import productY from "../assets/productPage/productY.svg";

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
                main: productY, // TODO
                gallery: [
                    productX, 
                    productY  
                ]
            }
        },

        tabs: {
            description: "Description",
            additionalInfo: "Additional Information",
            reviews: "Reviews (0)"
        },

        content: {
            image: null, // TODO

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
                    "the quick fox jumps over the lazy dog",
                    "the quick fox jumps over the lazy dog",
                    "the quick fox jumps over the lazy dog",
                    "the quick fox jumps over the lazy dog"
                ]
            },

            listBlock2: {
                title: "the quick fox jumps over",
                items: [
                    "the quick fox jumps over the lazy dog",
                    "the quick fox jumps over the lazy dog",
                    "the quick fox jumps over the lazy dog"
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
                main: null, // TODO
                gallery: [
                    null, // TODO
                    null  // TODO
                ]
            }
        },

        tabs: {
            description: "Açıklama",
            additionalInfo: "Ek Bilgiler",
            reviews: "Yorumlar (0)"
        },

        content: {
            image: null, // TODO

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
                    "hızlı tilki tembel köpeğin üzerinden atlar",
                    "hızlı tilki tembel köpeğin üzerinden atlar",
                    "hızlı tilki tembel köpeğin üzerinden atlar",
                    "hızlı tilki tembel köpeğin üzerinden atlar"
                ]
            },

            listBlock2: {
                title: "hızlı tilki üzerinden atlar",
                items: [
                    "hızlı tilki tembel köpeğin üzerinden atlar",
                    "hızlı tilki tembel köpeğin üzerinden atlar",
                    "hızlı tilki tembel köpeğin üzerinden atlar"
                ]
            }
        }
    }
};

export default productDetailData;