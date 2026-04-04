import face from "../assets/contact/facebook.svg";
import insta from "../assets/contact/instagram.svg";
import x from "../assets/contact/twitter.svg";
import background from "../assets/contact/background.svg";
import team1 from "../assets/team/team1.svg";


const layoutData = {
    en: {
        header: {
            logo: "Bandage",
            menu: ["Home", "Shop", "About", "Blog", "Contact", "Pages"],
            menuResp: ["Home", "Product", "Pricing", "Contact"],
            auth: ["Login", "Register"]
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
        contact: {
            image: background,
            text: "Questions & Answers",
            description: "Problems trying to resolve the conflict between the two major realms of Classical physics:",
            cta: "CONTACT US",
        },

        team: {
            title:"Meet Our Team" ,
            description: "Problems trying to resolve the conflict between \n the two major realms of Classical physics: Newtonian mechanics" ,
            members: [
                {id:"squad1", name:"Aziz Takcı", title:"Full Stack Developer", image:team1},
                {id:"squad2", name:"Gökhan Özdemir", title:"Project Manager", image:team1},
            ],
            icons: [
                {id:"iconface", image:face},
                {id:"iconinsta", image:insta},
                {id:"iconx", image:x},
            ],
        },
    },
    tr: {
        header: {
            logo: "Bandage",
            menu: ["Ana Sayfa", "Mağaza", "Hakkında", "Blog", "İletişim", "Sayfalar"],
            menuResp: ["Ana Sayfa", "Ürünler", "Fiyatlandırma", "İletişim"],
            auth: ["Giriş", "Kayıt Ol"]
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
        },
        contact: {
            image: background, 
            text: "Questions & Answers",
            description: "Problems trying to resolve the conflict between the two major realms of Classical physics:",
            cta: "CONTACT US",
        },
        team: {
            title:"Ekibimiz İle Tanışın" ,
            description: "Klasik fiziğin iki büyük alanı olan \n Newton mekaniği arasındaki çelişkiyi çözmeye yönelik problemler" ,
            members: [
                {id:"squad1", name:"Aziz Takcı", title:"Full Stack Developer", image:team1},
                {id:"squad2", name:"Gökhan Özdemir", title:"Project Manager", image:team1},
            ],
            icons: [
                {id:"iconface", image:face},
                {id:"iconinsta", image:insta},
                {id:"iconx", image:x},
            ],
        },
    }
};

export default layoutData;