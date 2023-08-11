import { Navbar } from "@/components/navbar";

const RootLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
     <div className="h-full">
        <Navbar />
        <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
          </div> 
      <main className="md:pl-20 pt-16 h-full">
        {children}
      </main>
     </div>
    
  );
}

export default RootLayout;