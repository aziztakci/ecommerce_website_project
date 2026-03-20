import Footer from "./Footer";
import Header from "./Header";
import PageContent from "./PageContent";


export default function Layout({ children }) {
  return (
    <>
      <Header />
      <PageContent>
        {children} 
      </PageContent>
      <Footer />
    </>
  )
}