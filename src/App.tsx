export default function App() {
  return (
    <div className="bg-[#0b0121] min-h-screen font-montserrat">
      {/* Navbar */}
      <nav className="bg-[#0b0121] px-6 py-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/assets/valtflow-icon.png" alt="Vaultflow" className="w-[22px] h-[22px]" />
            <span className="text-[#ececec] text-[22px] font-bold tracking-[-0.66px]">Vaultflow</span>
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-[#ececec] text-[16px] px-3 py-6 hover:opacity-80 transition-opacity">Features</a>
            <a href="#" className="text-[#ececec] text-[16px] px-3 py-6 hover:opacity-80 transition-opacity">Pricing</a>
            <a href="#" className="text-[#ececec] text-[16px] px-3 py-6 hover:opacity-80 transition-opacity">About us</a>
            <button className="bg-[#ececec] text-[#0b081c] px-5 py-2 rounded-full text-[16px] hover:opacity-90 transition-opacity">
              Download the app
            </button>
            <button className="border border-[#ececec] text-[#ececec] px-5 py-2 rounded-full text-[16px] hover:bg-[#ececec] hover:text-[#0b081c] transition-all">
              Talk to an expert
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-5 pt-[170px] pb-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none">
          <img src="/assets/hero-stack.png" alt="" className="absolute w-[105%] h-[102%] left-[-2.5%] top-[-0.5%] object-cover" />
        </div>

        <div className="max-w-[960px] mx-auto relative z-10">
          {/* Title Section */}
          <div className="flex flex-col items-center gap-6 mb-20">
            {/* Pill */}
            <div className="border border-[rgba(255,255,255,0.3)] rounded-full px-5 py-2.5">
              <p className="text-[#f2f4f8] text-[17px] text-center">
                We just raised $20M in Series B. <span className="underline">Learn more</span>
              </p>
            </div>

            {/* Heading */}
            <h1
              className="text-[80px] font-medium leading-none text-center tracking-[-2.4px] bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(173.477deg, rgb(236, 236, 236) 20.345%, rgba(236, 236, 236, 0) 128.73%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Modern analytics<br />for the modern world
            </h1>

            {/* Description */}
            <div className="max-w-[600px]">
              <p className="text-[rgba(236,236,236,0.65)] text-[18px] leading-[1.6] text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="bg-[#ececec] text-[#0b081c] px-6 py-3 rounded-full text-[16px] hover:opacity-90 transition-opacity">
                Download the app
              </button>
              <button className="border border-[#ececec] text-[#ececec] px-6 py-3 rounded-full text-[16px] hover:bg-[#ececec] hover:text-[#0b081c] transition-all">
                Talk to an expert
              </button>
            </div>
          </div>

          {/* Dashboard Image */}
          <div className="relative rounded-[24px] shadow-[0px_-2px_10px_0px_rgba(233,223,255,0.3),0px_-2px_40px_0px_rgba(187,155,255,0.15),inset_0px_0.5px_0px_0px_rgba(255,255,255,0.5)] h-[472px] overflow-hidden">
            <img src="/assets/image-wrapper.png" alt="Analytics Dashboard" className="w-full h-full object-cover rounded-[24px]" />
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="px-5 py-15">
        <div className="flex flex-col items-center gap-10">
          <p className="text-[rgba(255,255,255,0.8)] text-[20px] leading-[1.3] text-center">
            Trusted by teams at over <span className="font-medium">1,000</span> of the world's leading organizations
          </p>

          {/* Logos Grid */}
          <div className="flex items-center justify-center gap-12 flex-wrap max-w-[1200px]">
            <img src="/assets/logo-dell.svg" alt="Dell" className="h-[20px] w-auto opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/assets/logo-zendesk.svg" alt="Zendesk" className="h-[17px] w-auto opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/assets/logo-rakuten.svg" alt="Rakuten" className="h-[21px] w-auto opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/assets/logo-pacific-funds.svg" alt="Pacific Funds" className="h-[13px] w-auto opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/assets/logo-ncr.svg" alt="NCR" className="h-[24px] w-auto opacity-80 hover:opacity-100 transition-opacity" />
            <div className="h-[23px] w-[120px] relative opacity-80 hover:opacity-100 transition-opacity">
              <img src="/assets/nest.svg" alt="" className="absolute left-0 h-full" />
              <img src="/assets/lattice.svg" alt="" className="absolute right-0 h-[70%] top-[15%]" />
            </div>
            <img src="/assets/logo-ted.svg" alt="TED" className="h-[20px] w-auto opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-5 py-20">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <div className="max-w-[470px] mx-auto text-center mb-20 relative py-6">
            <img src="/assets/section-title.png" alt="" className="absolute inset-0 w-full h-full object-contain pointer-events-none" />
            <h2 className="text-[#ececec] text-[48px] font-medium leading-[1.2] tracking-[-0.32px] mb-6 relative z-10">
              Features that work for your future.
            </h2>
            <p className="text-[#ececec] text-[18px] leading-[1.6] relative z-10">
              Check out our amazing features and experience the power of Vaultflow for yourself.
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-20">
            {/* Row 1: Two Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Analytics Dashboard Card */}
              <div className="bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-transparent rounded-[20px] shadow-[0px_-2px_10px_0px_rgba(233,223,255,0.3),0px_-2px_40px_0px_rgba(187,155,255,0.15),inset_0px_0.5px_0px_0px_rgba(255,255,255,0.5)] p-15">
                <div className="shadow-[0px_0px_36px_0px_rgba(89,29,221,0.75)] rounded-full w-[50px] h-[50px] mb-4">
                  <img src="/assets/icon-1.png" alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-[#ececec] text-[32px] font-medium leading-[1.3] tracking-[-0.16px] mb-2.5">
                  Analytics Dashboard
                </h3>
                <p className="text-[#ececec] text-[14px] leading-[1.5] mb-4">
                  Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.
                </p>
                <a href="#" className="text-white text-[16px] font-medium underline hover:opacity-80 transition-opacity inline-block pt-4">
                  View dashboard
                </a>
              </div>

              {/* Digital Credit Tokens Card */}
              <div className="bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-transparent rounded-[20px] shadow-[0px_-2px_10px_0px_rgba(233,223,255,0.3),0px_-2px_40px_0px_rgba(187,155,255,0.15),inset_0px_0.5px_0px_0px_rgba(255,255,255,0.5)] p-15">
                <div className="shadow-[0px_0px_36px_0px_rgba(149,37,201,0.75)] rounded-full w-[50px] h-[50px] mb-4">
                  <img src="/assets/icon-2.png" alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-[#ececec] text-[32px] font-medium leading-[1.3] tracking-[-0.16px] mb-2.5">
                  Digital Credit Tokens
                </h3>
                <p className="text-[#ececec] text-[14px] leading-[1.5] mb-4">
                  Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.
                </p>
                <a href="#" className="text-white text-[16px] font-medium underline hover:opacity-80 transition-opacity inline-block pt-4">
                  View tokens
                </a>
              </div>
            </div>

            {/* Row 2: Code Collaboration Card */}
            <div className="bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-transparent rounded-[20px] shadow-[0px_-2px_10px_0px_rgba(233,223,255,0.3),0px_-2px_40px_0px_rgba(187,155,255,0.15),inset_0px_0.5px_0px_0px_rgba(255,255,255,0.5)] p-15">
              <div className="grid md:grid-cols-2 gap-4 items-center">
                <div>
                  <div className="shadow-[0px_0px_36px_0px_rgba(201,37,171,0.75)] rounded-full w-[50px] h-[50px] mb-6">
                    <img src="/assets/icon-3.png" alt="" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="text-[#ececec] text-[32px] font-medium leading-[1.3] tracking-[-0.16px] mb-2.5">
                    Code collaboration
                  </h3>
                  <p className="text-[#ececec] text-[14px] leading-[1.5] mb-4">
                    Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable.
                  </p>
                  <a href="#" className="text-white text-[16px] font-medium underline hover:opacity-80 transition-opacity inline-block pt-4">
                    View code collaboration
                  </a>
                </div>
                <div className="rounded-[20px] shadow-[0px_-2px_10px_0px_rgba(233,223,255,0.3),0px_-2px_40px_0px_rgba(187,155,255,0.15),inset_0px_0.5px_0px_0px_rgba(255,255,255,0.5)] overflow-hidden">
                  <img src="/assets/code-image.png" alt="Code collaboration" className="w-full h-[300px] object-cover rounded-[20px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-5 py-15">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-gradient-to-b from-[rgba(255,255,255,0.05)] to-transparent rounded-[20px] shadow-[0px_-2px_10px_0px_rgba(233,223,255,0.3),0px_-2px_40px_0px_rgba(187,155,255,0.15),inset_0px_0.5px_0px_0px_rgba(255,255,255,0.5)] p-15">
            <div className="max-w-[768px] mx-auto text-center">
              <h2 className="text-[#ececec] text-[48px] font-bold leading-[1.2] mb-6">
                Our powerful analytics provides invaluable insights.
              </h2>
              <p className="text-[#ececec] text-[18px] leading-[1.5] mb-6">
                Unlock the power of data with our cutting-edge analytics product. Get instant insights with our user-friendly Analytics Dashboard, and take advantage of our innovative digital credit tokens to reward your customers and incentivize engagement.
              </p>
              <button className="border border-[#ececec] text-[#ececec] px-6 py-3 rounded-full text-[16px] hover:bg-[#ececec] hover:text-[#0b081c] transition-all">
                Download the app
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-5 py-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Column 1: Contact & Careers */}
            <div className="space-y-10">
              <div>
                <h4 className="text-white text-[24px] font-medium tracking-[-0.24px] mb-4">Contact</h4>
                <div className="text-white text-[18px] font-light tracking-[-0.18px] space-y-1.5">
                  <p>Work inquires: work@vaultflow.com</p>
                  <p>PR and speaking: press@vaultflow.com</p>
                  <p>New business: newbusiness@vaultflow.com</p>
                </div>
              </div>
              <div>
                <h4 className="text-white text-[24px] font-medium tracking-[-0.24px] mb-4">Careers</h4>
                <p className="text-white text-[18px] font-light tracking-[-0.18px]">Careers@vaultflow.com</p>
              </div>
              <p className="text-[#939393] text-[16px] font-light tracking-[-0.16px]">
                © 2023 Vaultflow. All Rights Reserved.
              </p>
            </div>

            {/* Column 2: Address & Social */}
            <div className="space-y-10">
              <div>
                <h4 className="text-white text-[24px] font-medium tracking-[-0.24px] mb-4">Address</h4>
                <p className="text-white text-[18px] font-light tracking-[-0.18px] leading-normal">
                  398 11th Street, Floor 2<br />
                  San Francisco, CA 94103
                </p>
              </div>
              <div>
                <h4 className="text-white text-[24px] font-medium tracking-[-0.24px] mb-4">Social</h4>
                <div className="text-white text-[18px] font-light tracking-[-0.18px] space-y-1.5">
                  <p className="hover:opacity-70 transition-opacity cursor-pointer">Twitter</p>
                  <p className="hover:opacity-70 transition-opacity cursor-pointer">Instagram</p>
                  <p className="hover:opacity-70 transition-opacity cursor-pointer">Tik Tok</p>
                </div>
              </div>
            </div>

            {/* Column 3: Logo */}
            <div className="flex items-end justify-end">
              <div className="flex items-center gap-3">
                <img src="/assets/valtflow-icon.png" alt="Vaultflow" className="w-[22px] h-[22px]" />
                <span className="text-[#ececec] text-[22px] font-bold tracking-[-0.66px]">Vaultflow</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
