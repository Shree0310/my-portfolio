import Footer from "@/components/Navbar/Footer";
import ComponentsLibraryLayout from "@/components/ComponentLibrary/ComponentsLibraryLayout";
import ButtonsShowcase from "@/components/ButtonsLibrary/ButtonShowcase";

export default function ButtonsLibraryPage() {
  return (
    <ComponentsLibraryLayout activeSection="buttons">
      <div className="w-full">
        <ButtonsShowcase />
        <Footer />
      </div>
    </ComponentsLibraryLayout>
  );
}

