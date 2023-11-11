import CardList from "@web/features/pricing/ui/pricing-card-list";

const HeaderSection = () => (
  <header className="flex flex-col items-center py-7">
    <div className="max-w-3xl text-center">
      <h2 className="text-3xl text-[#2F2F2F] md:text-5xl lg:text-6xl">
        Your story, your terms
      </h2>
      <div className="mx-auto mt-4">
        <p className="text-[#626262] text-base">
          Choose the plan that best suits you
        </p>
      </div>
    </div>
  </header>
);

const FooterSection = () => (
  <footer className="flex flex-col items-start gap-0 pt-7 lg:pt-16 mx-auto lg:justify-center lg:items-center pb-7 lg:gap-7  max-w-[408px]">
    <div className="flex flex-col gap-5 lg:flex-row">
      <div>🚫 Cancel Anytime</div>
      <div>🛡 Safe & Secure payment</div>
    </div>
    <p>
      Enterprise: <span className="underline">sales@widegamut.co</span>
    </p>
  </footer>
);

function PricingPage() {
  return (
    <div className="w-full px-5 mx-auto pt-7 md:pt-8 max-w-7xl">
      <HeaderSection />
      <CardList />
      <FooterSection />
    </div>
  );
}

export default PricingPage;
