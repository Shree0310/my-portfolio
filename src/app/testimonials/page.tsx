import Heading from "@/Components/Heading";
import Footer from "@/Components/Navbar/Footer";
import NewPortfolio from "@/Components/NewPortfolio";
import Projects2 from "@/Components/Project2";
import SubHeading from "@/Components/SubHeading";
import Testimonials from "@/Components/Testimonials";

const TestimonialsPage = () =>{
return <div>
    <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
                <Testimonials/>
                <Footer/>
     </NewPortfolio>
</div>
}
export default TestimonialsPage;