import type { FunctionComponent } from "react";
import NavbarLogoLeft from "../components/Locofy/NavbarLogoLeft";
import HeroStack from "../components/Locofy/HeroStack";
import LogoTitle from "../components/Locofy/LogoTitle";
import Section from "../components/Locofy/Section";
import Footer from "../components/Locofy/Footer";


const Locofy: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-[#0b0121] flex flex-col items-center leading-[normal] tracking-[normal]">
      <NavbarLogoLeft />
      <HeroStack />
      <LogoTitle />
      <Section />
      <section className="self-stretch bg-[#0b0121] overflow-hidden flex flex-col items-center py-[60px] px-5 text-center text-5xl text-[#ececec] font-[Montserrat] mq750:pt-[39px] mq750:pb-[39px] mq750:box-border">
        <div className="w-[1200px] shadow-[0px_-2px_10px_rgba(233,_223,_255,_0.3),_0px_-2px_40px_rgba(187,_155,_255,_0.15),_0px_0.5px_0px_rgba(255,_255,_255,_0.5)_inset] rounded-[20px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.05),_rgba(255,_255,_255,_0))] flex flex-col items-center p-[60px] box-border mq450:pt-[39px] mq450:pb-[39px] mq450:box-border mq1050:pl-[30px] mq1050:pr-[30px] mq1050:box-border">
          <div className="w-[768px] flex flex-col items-center gap-6">
            <b className="self-stretch relative leading-[120%] mq450:text-[29px] mq450:leading-[35px] mq1050:text-[38px] mq1050:leading-[46px]">
              {" "}
              Our powerful analytics provides invaluable insights.
            </b>
            <div className="self-stretch relative text-lg leading-[150%]">{`Unlock the power of data with our cutting-edge analytics product. Get instant insights with our user-friendly Analytics Dashboard, and take advantage of our innovative digital credit tokens to reward your customers and incentivize engagement. `}</div>
            <button className="cursor-pointer border-[#ececec] border-solid border-[1px] py-2.5 px-[23px] bg-[transparent] rounded-[60px] flex items-center justify-center hover:bg-[rgba(212,212,212,0.09)] hover:border-[#d4d4d4] hover:border-solid hover:hover:border-[1px] hover:box-border">
              <div className="relative text-base leading-[150%] font-[Montserrat] text-[#ececec] text-left">
                Download the app
              </div>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Locofy;
