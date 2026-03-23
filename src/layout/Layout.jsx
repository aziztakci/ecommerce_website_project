import Footer from "./Footer";
import Header from "./Header";
import PageContent from "./PageContent";


export default function Layout({ children }) {
  return (
    <div className="flex flex-col bg-black"> {/* TODO light-gray-1 olacak daha sonra*/}
      <Header />
      <PageContent>
        {children} 
      </PageContent>
      <Footer />
    </div>
  )
}