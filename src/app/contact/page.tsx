import NewPortfolio from "@/components/NewPortfolio";
import Heading from "@/components/Heading";
import SubHeading from "@/components/SubHeading";
import Footer from "@/components/Navbar/Footer";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return <div>
        <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
         <Heading>Contact me</Heading>
         <SubHeading>
            I&apos;m open to freelancing offers, reach out to me to know more.
         </SubHeading>
         <ContactForm/>
        <Footer/>
    </NewPortfolio>
    </div>
}