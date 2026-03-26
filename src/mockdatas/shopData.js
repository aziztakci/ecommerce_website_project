import black from "../assets/shopPage/black.svg";
import blue from "../assets/shopPage/blue.svg";
import red from "../assets/shopPage/red.svg";
import skateboard from "../assets/shopPage/skateboard.svg";
import white from "../assets/shopPage/white.svg";
import p1 from "../assets/shopPage/p1.svg";
import p2 from "../assets/shopPage/p2.svg";
import p3 from "../assets/shopPage/p3.svg";
import p4 from "../assets/shopPage/p4.svg";
import p5 from "../assets/shopPage/p5.svg";
import p6 from "../assets/shopPage/p6.svg";
import p7 from "../assets/shopPage/p7.svg";
import p8 from "../assets/shopPage/p8.svg";
import p9 from "../assets/shopPage/p9.svg";
import p10 from "../assets/shopPage/p10.svg";
import p11 from "../assets/shopPage/p11.svg";
import p12 from "../assets/shopPage/p12.svg";


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
            sortDefault: [{ text: "Popularity", value: "popularity" },
            { text: "Newest", value: "newest" },
            { text: "Price: Low to High", value: "price-low" },
            { text: "Price: High to Low", value: "price-high" },
            ],
            filter: "Filter"
        },

        products: [
            { id: "prod-1", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p1 },
            { id: "prod-2", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p2 },
            { id: "prod-3", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p3 },
            { id: "prod-4", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p4 },
            { id: "prod-5", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p5 },
            { id: "prod-6", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p6 },
            { id: "prod-7", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p7 },
            { id: "prod-8", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p8 },
            { id: "prod-9", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p9 },
            { id: "prod-10", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p10 },
            { id: "prod-11", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p11 },
            { id: "prod-12", name: "Graphic Design", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p12 },
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
            { id: "cat-1", title: "KIYAFETLER", items: "5 Ürün", image: black },
            { id: "cat-2", title: "KIYAFETLER", items: "5 Ürün", image: blue },
            { id: "cat-3", title: "KIYAFETLER", items: "5 Ürün", image: white },
            { id: "cat-4", title: "KIYAFETLER", items: "5 Ürün", image: red },
            { id: "cat-5", title: "KIYAFETLER", items: "5 Ürün", image: skateboard },
        ],

        toolbar: {
            resultText: "Showing all 12 results",
            views: "Views:",
            sortDefault: [{ text: "Popüler", value: "popularity" },
            { text: "En Yeni", value: "newest" },
            { text: "Fiyat: En Düşük", value: "price-low" },
            { text: "Fiyat: En Düşük", value: "price-high" },
            ],
            filter: "Filter"
        },

        products: [
            { id: "prod-1", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p1 },
            { id: "prod-2", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p2 },
            { id: "prod-3", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p3 },
            { id: "prod-4", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p4 },
            { id: "prod-5", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p5 },
            { id: "prod-6", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p6 },
            { id: "prod-7", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p7 },
            { id: "prod-8", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p8 },
            { id: "prod-9", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p9 },
            { id: "prod-10", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p10 },
            { id: "prod-11", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p11 },
            { id: "prod-12", name: "Grafik Tasarım", department: "English Department", priceOld: "$16.48", priceNew: "$6.48", image: p12 },
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