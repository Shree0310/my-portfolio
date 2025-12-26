import Components from "@/Components/Components";
import Heading from "@/Components/Heading";
import Footer from "@/Components/Navbar/Footer";
import NewPortfolio from "@/Components/NewPortfolio";
import SubHeading from "@/Components/SubHeading";

export default function ComponentsPage() {
    return <div className="div">
        <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
         <Heading>Overview</Heading>
         <SubHeading className="my-2">
            I like experimenting and creating new components...
         </SubHeading>
         <Components/>
        <Footer/>
    </NewPortfolio>
    </div>
}