import face from "../assets/contact/facebook.svg";
import insta from "../assets/contact/instagram.svg";
import x from "../assets/contact/twitter.svg";
import groceryImg from "../assets/images/groceriesCarousel.svg";
import groceryImg3 from "../assets/images/groceriesCarousel3.png";



const homeData = {
    en: {
        header: {
            logo: "Bandage",
            menu: ["Home", "Shop", "About", "Blog", "Contact", "Pages"],
            menuResp: ["Home", "Product", "Pricing", "Contact"],
            auth: ["Login", "Register"]
        },

        carousel: {
            slides: [
                {
                    id: "carousel-slide-grocery-1",
                    title: "GROCERIES DELIVERY",
                    subtitle:
                        "We know how large objects will act, but things on a small scale just do not act that way.",
                    button: "Start Now",
                    image: groceryImg,
                    alt: "grocery_image",
                },
                {
                    id: "carousel-slide-grocery-2",
                    title: "GROCERIES DELIVERY",
                    subtitle:
                        "We know how large objects will act, but things on a small scale just do not act that way.",
                    button: "Start Now",
                    image: groceryImg3,
                    alt: "grocery_image",
                }
            ]
        },

        highlightSection: {
            items: [
                {
                    id: "highlight-unique-life",
                    title: "Unique Life",
                    subtitle: "Explore Items",
                    image: "img_3", // TODO
                },
                {
                    id: "highlight-elements-style-1",
                    title: "Elements Style",
                    subtitle: "Explore Items",
                    image: "img_4", // TODO
                },
                {
                    id: "highlight-elements-style-2",
                    title: "Elements Style",
                    subtitle: "Explore Items",
                    image: "img_5", // TODO
                }
            ]
        },

        featuredProducts1: {
            title: "BESTSELLER PRODUCTS",
            tabs: ["Men", "Women", "Accessories"],
            image: "img_111", // TODO
            imageTitle: "FURNITURE",
            imageText: "5 Items",
            products: [
                {
                    id: "featured-1-prod-1",
                    name: "Graphic Design",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_6", // TODO
                },
                {
                    id: "featured-1-prod-2",
                    name: "Graphic Design",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_7" // TODO
                },
                {
                    id: "featured-1-prod-3",
                    name: "Graphic Design",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_8" // TODO
                }
            ]
        },

        mostPopular1: {
            id: "section-most-popular-1",
            image: "img_123", // TODO
            title: "MOST POPULAR",
            description:
                "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            product: {
                id: "pop-1-detail",
                name: "English Department",
                priceOld: "$16.48",
                priceNew: "$6.48",
                image: "img_9" // TODO
            }
        },

        featuredProducts2: {
            title: "BESTSELLER PRODUCTS",
            tabs: ["Men", "Women", "Accessories"],
            image: "img_111", // TODO
            imageTitle: "FURNITURE",
            imageText: "5 Items",
            products: [
                {
                    id: "featured-2-prod-1",
                    name: "Graphic Design",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_6", // TODO
                },
                {
                    id: "featured-2-prod-2",
                    name: "Graphic Design",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_7" // TODO
                },
                {
                    id: "featured-2-prod-3",
                    name: "Graphic Design",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_8" // TODO
                }
            ]
        },

        mostPopular2: {
            id: "section-most-popular-2",
            image: "img_124", // TODO
            title: "MOST POPULAR",
            description:
                "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
            product: {
                id: "pop-2-detail",
                name: "English Department",
                text: "15 Sales",
                priceOld: "$16.48",
                priceNew: "$6.48",
                image: "img_9" // TODO
            }
        },

        bestsellerProducts: {
            title: "BESTSELLER PRODUCTS",
            products: [
                {
                    id: "best-prod-13",
                    name: "Graphic Design",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_13" // TODO
                },
                {
                    id: "best-prod-14",
                    name: "Graphic Design",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_14" // TODO
                },
                {
                    id: "best-prod-15",
                    name: "Graphic Design",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_15" // TODO
                },
                {
                    id: "best-prod-16",
                    name: "Graphic Design",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_16" // TODO
                }
            ]
        },

        brandLogos: [
            { id: "brand-logo-1", image: "img_17" },// TODO
            { id: "brand-logo-2", image: "img_18" },// TODO
            { id: "brand-logo-3", image: "img_19" },// TODO
            { id: "brand-logo-4", image: "img_20" },// TODO
            { id: "brand-logo-5", image: "img_21" },// TODO
            { id: "brand-logo-6", image: "img_22" } // TODO
        ],

        featuredPosts: {
            title: "Featured Posts",
            subtitle: "Practice Advice",
            posts: [
                {
                    id: "post-madison-1",
                    selection: [{ id: "sel-google", text: "Google" }, { id: "sel-trending", text: "Trending" }, { id: "sel-new", text: "New" }],
                    title: "Loudest à la Madison #1 (L'integral)",
                    description:
                        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
                    button: "Learn More",
                    image: "img_10" // TODO
                },
                {
                    id: "post-madison-2",
                    selection: [{ id: "sel-google-2", text: "Google" }, { id: "sel-trending-2", text: "Trending" }, { id: "sel-new-2", text: "New" }],
                    title: "Loudest à la Madison #1 (L'integral)",
                    description:
                        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
                    button: "Learn More",
                    image: "img_11" // TODO
                },
                {
                    id: "post-madison-3",
                    selection: [{ id: "sel-google-3", text: "Google" }, { id: "sel-trending-3", text: "Trending" }, { id: "sel-new-3", text: "New" }],
                    title: "Loudest à la Madison #1 (L'integral)",
                    description:
                        "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
                    button: "Learn More",
                    image: "img_12" // TODO
                }
            ]
        },

        footer: {
            title: "Consulting Agency For Your Business",
            subtitle: "the quick fox jumps over the lazy dog",
            button: "Contact Us",
            sections: [
                {
                    id: "footer-info",
                    title: "Company Info",
                    links: ["About Us", "Carrier", "We are hiring", "Blog"]
                },
                {
                    id: "footer-legal",
                    title: "Legal",
                    links: ["About Us", "Carrier", "We are hiring", "Blog"]
                },
                {
                    id: "footer-features",
                    title: "Features",
                    links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"]
                },
                {
                    id: "footer-resources",
                    title: "Resources",
                    links: ["IOS & Android", "Watch a Demo", "Customers", "API"]
                }

            ],
            getIn: {
                id: "footer-contact",
                title: "Get In Touch",
                phone: "(480) 555-0103",
                address: "4517 Washington Ave.",
                email: "debra.holt@example.com"
            },
            copyright: "Made With Love By Finland All Right Reserved ",
            images: [
                { id: "footer-image-fb", img: face, text: "facebook" },
                { id: "footer-image-inst", img: insta, text: "instagram" },
                { id: "footer-image-x", img: x, text: "x-twitter" },
            ]

        },
    },

    tr: {
        header: {
            logo: "Bandage",
            menu: ["Ana Sayfa", "Mağaza", "Hakkında", "Blog", "İletişim", "Sayfalar"],
            menuResp: ["Ana Sayfa", "Ürünler", "Fiyatlandırma", "İletişim"],
            auth: ["Giriş", "Kayıt Ol"]
        },

        carousel: {
            slides: [
                {
                    id: "carousel-slide-market-1",
                    title: "MARKET TESLİMATI",
                    subtitle:
                        "Büyük nesnelerin nasıl davranacağını biliyoruz, ancak küçük ölçekte işler bu şekilde işlemez.",
                    button: "Başla",
                    image: groceryImg,
                    alt: "grocery_image",
                },
                {
                    id: "carousel-slide-market-2",
                    title: "MARKET TESLİMATI",
                    subtitle:
                        "Büyük nesnelerin nasıl davranacağını biliyoruz, ancak küçük ölçekte işler bu şekilde işlemez.",
                    button: "Başla",
                    image: groceryImg3,
                    alt: "grocery_image",
                }
            ]
        },

        highlightSection: {
            items: [
                {
                    id: "highlight-tr-unique-life",
                    title: "Benzersiz Yaşam",
                    subtitle: "Ürünleri Keşfet",
                    image: "img_3", // TODO
                },
                {
                    id: "highlight-tr-style-1",
                    title: "Stil Öğeleri",
                    subtitle: "Ürünleri Keşfet",
                    image: "img_4", // TODO
                },
                {
                    id: "highlight-tr-style-2",
                    title: "Stil Öğeleri",
                    subtitle: "Ürünleri Keşfet",
                    image: "img_5", // TODO
                }
            ]
        },

        featuredProducts1: {
            title: "EN ÇOK SATAN ÜRÜNLER",
            tabs: ["Erkek", "Kadın", "Aksesuar"],
            image: "img_111", // TODO
            imageTitle: "MOBİLYA",
            imageText: "5 Ürün",
            products: [
                {
                    id: "featured-1-tr-prod-1",
                    name: "Grafik Tasarım",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_6", // TODO
                },
                {
                    id: "featured-1-tr-prod-2",
                    name: "Grafik Tasarım",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_7" // TODO
                },
                {
                    id: "featured-1-tr-prod-3",
                    name: "Grafik Tasarım",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_8" // TODO
                }
            ]
        },

        mostPopular1: {
            id: "section-tr-most-popular-1",
            image: "img_123", // TODO
            title: "EN POPÜLER",
            description:
                "Ergonomiye ve çalıştığınız ortama odaklanıyoruz. Sadece bir tuş uzağınızda.",
            product: {
                id: "pop-1-tr-detail",
                name: "English Department",
                priceOld: "$16.48",
                priceNew: "$6.48",
                image: "img_9" // TODO
            }
        },

        featuredProducts2: {
            title: "EN ÇOK SATAN ÜRÜNLER",
            tabs: ["Erkek", "Kadın", "Aksesuar"],
            image: "img_111", // TODO
            imageTitle: "MOBİLYA",
            imageText: "5 Ürün",
            products: [
                {
                    id: "featured-2-tr-prod-1",
                    name: "Grafik Tasarım",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_6", // TODO
                },
                {
                    id: "featured-2-tr-prod-2",
                    name: "Grafik Tasarım",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_7" // TODO
                },
                {
                    id: "featured-2-tr-prod-3",
                    name: "Grafik Tasarım",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_8" // TODO
                }
            ]
        },

        mostPopular2: {
            id: "section-tr-most-popular-2",
            image: "img_124", // TODO
            title: "EN POPÜLER",
            description:
                "Ergonomiye ve çalıştığınız ortama odaklanıyoruz. Sadece bir tuş uzağınızda.",
            product: {
                id: "pop-2-tr-detail",
                name: "English Department",
                text: "15 Satış",
                priceOld: "$16.48",
                priceNew: "$6.48",
                image: "img_9" // TODO
            }
        },

        bestsellerProducts: {
            title: "EN ÇOK SATAN ÜRÜNLER",
            products: [
                {
                    id: "best-tr-prod-13",
                    name: "Grafik Tasarım",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_13" // TODO
                },
                {
                    id: "best-tr-prod-14",
                    name: "Grafik Tasarım",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_14" // TODO
                },
                {
                    id: "best-tr-prod-15",
                    name: "Grafik Tasarım",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_15" // TODO
                },
                {
                    id: "best-tr-prod-16",
                    name: "Grafik Tasarım",
                    department: "English Department",
                    priceOld: "$16.48",
                    priceNew: "$6.48",
                    image: "img_16" // TODO
                }
            ]
        },

        brandLogos: [
            { id: "brand-tr-logo-1", image: "img_17" },// TODO
            { id: "brand-tr-logo-2", image: "img_18" },// TODO
            { id: "brand-tr-logo-3", image: "img_19" },// TODO
            { id: "brand-tr-logo-4", image: "img_20" },// TODO
            { id: "brand-tr-logo-5", image: "img_21" },// TODO
            { id: "brand-tr-logo-6", image: "img_22" } // TODO
        ],

        featuredPosts: {
            title: "Öne Çıkan Yazılar",
            subtitle: "Pratik Tavsiyeler",
            posts: [
                {
                    id: "post-tr-madison-1",
                    selection: [{ id: "sel-tr-google", text: "Google" }, { id: "sel-tr-trend", text: "Trend" }, { id: "sel-tr-yeni", text: "Yeni" }],
                    title: "Loudest à la Madison #1 (L'integral)",
                    description:
                        "Ergonomiye ve çalıştığınız ortama odaklanıyoruz. Sadece bir tuş uzağınızda.",
                    button: "Daha Fazla",
                    image: "img_10" // TODO
                },
                {
                    id: "post-tr-madison-2",
                    selection: [{ id: "sel-tr-google-2", text: "Google" }, { id: "sel-tr-trend-2", text: "Trend" }, { id: "sel-tr-yeni-2", text: "Yeni" }],
                    title: "Loudest à la Madison #1 (L'integral)",
                    description:
                        "Ergonomiye ve çalıştığınız ortama odaklanıyoruz. Sadece bir tuş uzağınızda.",
                    button: "Daha Fazla",
                    image: "img_11" // TODO
                },
                {
                    id: "post-tr-madison-3",
                    selection: [{ id: "sel-tr-google-3", text: "Google" }, { id: "sel-tr-trend-3", text: "Trend" }, { id: "sel-tr-yeni-3", text: "Yeni" }],
                    title: "Loudest à la Madison #1 (L'integral)",
                    description:
                        "Ergonomiye ve çalıştığınız ortama odaklanıyoruz. Sadece bir tuş uzağınızda.",
                    button: "Daha Fazla",
                    image: "img_12" // TODO
                }
            ]
        },

        footer: {
            title: "İşletmeniz İçin Danışmanlık Ajansı",
            subtitle: "atik tilki tembel köpeğin üzerinden atlar",
            button: "İletişime Geç",
            sections: [
                {
                    id: "footer-tr-info",
                    title: "Kurumsal Bilgiler",
                    links: ["Hakkımızda", "Kariyer", "İşe Alım", "Blog"]
                },
                {
                    id: "footer-tr-legal",
                    title: "Yasal",
                    links: ["Hakkımızda", "Kariyer", "İşe Alım", "Blog"]
                },
                {
                    id: "footer-tr-features",
                    title: "Özellikler",
                    links: ["İş Pazarlama", "Kullanıcı Analitiği", "Canlı Destek", "Sınırsız Destek"]
                },
                {
                    id: "footer-tr-resources",
                    title: "Kaynaklar",
                    links: ["IOS & Android", "Demo İzle", "Müşteriler", "API"]
                },

            ],
            getIn: {
                id: "footer-tr-contact",
                title: "Bize Ulaşın",
                phone: "(480) 555-0103",
                address: "4517 Washington Ave.",
                email: "debra.holt@example.com"
            },
            copyright: "Finlandiya Tarafından Yapıldı Bütün Hakları Saklıdır",
            images: [
                { id: "footer-image-fb", img: face, text: "facebook" },
                { id: "footer-image-inst", img: insta, text: "instagram" },
                { id: "footer-image-x", img: x, text: "x-twitter" },
            ]
        }
    }
};

export default homeData;
