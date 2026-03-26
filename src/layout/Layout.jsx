import Footer from "./Footer";
import Header from "./Header";


export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-light-background">
      <Header />
      <main className="grow w-full">{children}</main> 
      <Footer />
    </div>
  );
}
