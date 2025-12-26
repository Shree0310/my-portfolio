import Footer from "@/components/Navbar/Footer";
import NewPortfolio from "@/components/NewPortfolio";
import Testimonials from "@/components/Testimonials";

const TestimonialsPage = () =>{
return <div>
    <NewPortfolio className="min-h-[200vh] p-4 md:p-20 md:pb-10">
                <Testimonials/>
                <Footer/>
     </NewPortfolio>
</div>
}
export default TestimonialsPage;