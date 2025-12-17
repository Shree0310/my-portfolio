import Components from "@/Components/Components";
import Heading from "@/Components/Heading";
import Footer from "@/Components/Navbar/Footer";
import NewPortfolio from "@/Components/NewPortfolio";
import SubHeading from "@/Components/SubHeading";

export default function ComponentsPage() {
    return <div className="div">
        <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
         <Heading>Contact me</Heading>
         <SubHeading>
            I&apos;m open to freelancing offers, reach out to me to know more.
         </SubHeading>
         <Components/>
        <Footer/>
    </NewPortfolio>
    </div>
}