import Navbar from './navbar'
import Header from './header'
import Footer from './footer'
 
export default function Layout({ children }) {
  return (
    <>
      <Header/>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}