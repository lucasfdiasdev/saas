import Header from "@/components/header";

const LayoutSite = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Header />
      {children}
    </div>
  );
};

export default LayoutSite;
