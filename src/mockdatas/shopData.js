import black from "../assets/shopPage/black.svg";
import blue from "../assets/shopPage/blue.svg";
import red from "../assets/shopPage/red.svg";
import skateboard from "../assets/shopPage/skateboard.svg";
import white from "../assets/shopPage/white.svg";

const shopData = {
    en: {
        infoTop: {
            title: "Shop",
            breadcrumb: ["Home", "Shop"]
        },

        categories: [
            { id: "cat-1", title: "CLOTHS", items: "5 Items", image: black }, 
            { id: "cat-2", title: "CLOTHS", items: "5 Items", image: blue },
            { id: "cat-3", title: "CLOTHS", items: "5 Items", image: white }, 
            { id: "cat-4", title: "CLOTHS", items: "5 Items", image: red }, 
            { id: "cat-5", title: "CLOTHS", items: "5 Items", image: skateboard }, 
        ],

        toolbar: {
            resultText: "Showing all 12 results",
            views: "Views:",
            sortDefault: "Popularity",
            filter: "Filter"
        },

        products: [
            { id: "prod-1", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-2", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-3", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-4", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-5", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-6", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-7", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-8", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-9", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-10", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-11", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-12", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
        ],

        pagination: {
            first: "First",
            pages: ["1", "2", "3"],
            next: "Next"
        },

        brandLogos: [
            { id: "brand-1", name: "hooli", image: null }, // TODO
            { id: "brand-2", name: "lyft", image: null }, // TODO
            { id: "brand-3", name: "hood", image: null }, // TODO
            { id: "brand-4", name: "stripe", image: null }, // TODO
            { id: "brand-5", name: "aws", image: null }, // TODO
            { id: "brand-6", name: "reddit", image: null }, // TODO
        ]
    },

    tr: {
        infoTop: {
            title: "Mağaza",
            breadcrumb: ["Ana Sayfa", "Mağaza"]
        },

        categories: [
            { id: "cat-1", title: "KIYAFETLER", items: "5 Ürün", image: null }, // TODO
            { id: "cat-2", title: "KIYAFETLER", items: "5 Ürün", image: null }, // TODO
            { id: "cat-3", title: "KIYAFETLER", items: "5 Ürün", image: null }, // TODO
            { id: "cat-4", title: "KIYAFETLER", items: "5 Ürün", image: null }, // TODO
            { id: "cat-5", title: "KIYAFETLER", items: "5 Ürün", image: null }, // TODO
        ],

        toolbar: {
            resultText: "Toplam 12 sonuç gösteriliyor",
            views: "Görünüm:",
            sortDefault: "Popülerlik",
            filter: "Filtre"
        },

        products: [
            { id: "prod-1", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-2", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-3", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-4", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-5", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-6", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-7", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-8", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-9", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-10", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-11", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
            { id: "prod-12", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: null }, // TODO
        ],

        pagination: {
            first: "İlk",
            pages: ["1", "2", "3"],
            next: "Sonraki"
        },

        brandLogos: [
            { id: "brand-1", name: "hooli", image: null }, // TODO
            { id: "brand-2", name: "lyft", image: null }, // TODO
            { id: "brand-3", name: "hood", image: null }, // TODO
            { id: "brand-4", name: "stripe", image: null }, // TODO
            { id: "brand-5", name: "aws", image: null }, // TODO
            { id: "brand-6", name: "reddit", image: null }, // TODO
        ]
    }
};

export default shopData;