import NewPortfolio from "@/Components/NewPortfolio";
import Projects2 from "@/Components/Project2";
import LandingBlogs from "@/Components/Landing-blogs";
import Heading from "@/Components/Heading";
import SubHeading from "@/Components/SubHeading";
import Footer from "@/Components/Navbar/Footer";
import ContactForm from "@/Components/ContactForm";

export default function ContactPage() {
    return <div>
        <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
         <Heading>Contact me</Heading>
         <SubHeading>
            I'm open to freelancing offers, reach out to me to know more.
         </SubHeading>
         <ContactForm/>
        <Footer/>
    </NewPortfolio>
    </div>
}