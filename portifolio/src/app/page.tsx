import { About } from "./_components/about";
import { Contact } from "./_components/contact";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Services } from "./_components/services";


export default function Home() {
  return(
    <main>
      <Hero />
      <About />
      <Services/>
      <Contact/>
      <Footer/>
    
    </main>
  )
}