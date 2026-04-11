import face from "../assets/contact/facebook.svg";
import insta from "../assets/contact/instagram.svg";
import x from "../assets/contact/twitter.svg";



const layoutData = {
    en: {
        header: {
            logo: "Bandage",
            menu: ["Home", "Shop", "About", "Contact", "Team"],
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
        
    },
    tr: {
        header: {
            logo: "Bandage",
            menu: ["Ana Sayfa", "Mağaza", "Hakkında", "İletişim", "Ekip"],
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
        
    }
};

export default layoutData;