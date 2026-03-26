import Footer from "./Footer";
import Header from "./Header";
import PageContent from "./PageContent";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-light-background">
      <Header />
      <main className="grow w-full">{children}</main> {/* TODO- tüm componenti sarmalama, pageconteti sil, PageContent componentini güncelle. */}
      <Footer />
    </div>
  );
}
