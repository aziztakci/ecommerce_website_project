import Footer from "./Footer";
import Header from "./Header";
import PageContent from "./PageContent";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col bg-light-background">
      <Header />
      <PageContent>{children}</PageContent> {/* TODO- tüm componenti sarmalama, pageconteti sil, PageContent componentini güncelle. */}
      <Footer />
    </div>
  );
}
