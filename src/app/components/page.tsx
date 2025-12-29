import Components from "@/components/Components";
import Heading from "@/components/Heading";
import Footer from "@/components/Navbar/Footer";
import NewPortfolio from "@/components/NewPortfolio";
import SubHeading from "@/components/SubHeading";

export default function ComponentsPage() {
    return <div className="div">
        <NewPortfolio className="min-h-[200vh] p-2 md:p-10 md:pb-10">
         <Heading>Overview</Heading>
         <SubHeading className="my-2">
            I like experimenting and creating new components...
         </SubHeading>
         <Components/>
        <Footer/>
    </NewPortfolio>
    </div>
}