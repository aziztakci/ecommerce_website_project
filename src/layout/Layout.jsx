import Footer from "./Footer";
import Header from "./Header";
import PageContent from "./PageContent";


export default function Layout({ children }) {
  return (
    <div className="flex flex-col "> {/* TODO min-h-screen ekleyebilirsin / önce responsive i ayarla sonra ekle... */}
      <Header />
      <PageContent>
        {children} 
      </PageContent>
      <Footer />
    </div>
  )
}