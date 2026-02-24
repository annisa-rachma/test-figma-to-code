import type { FunctionComponent } from "react";

export type HeroStackType = {
  className?: string;
};

const HeroStack: FunctionComponent<HeroStackType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center pt-[170px] px-5 pb-20 bg-[url('/assets/hero-stack.png')] bg-cover bg-no-repeat bg-[top] text-left text-base text-[rgba(255,255,255,0)] font-[Montserrat] lg:pt-[110px] lg:pb-[52px] lg:box-border mq750:gap-5 mq750:pt-[71px] mq750:pb-[34px] mq750:box-border mq1050:gap-10 ${className}`}
    >
      <div className="w-[960px] flex flex-col items-center gap-20 mq750:gap-5 mq1050:gap-10">
        <section className="self-stretch flex flex-col items-center gap-6 text-center text-[17.3px] text-[#f2f4f8] font-[Montserrat]">
          <div className="w-[417.6px] rounded-[61.9px] border-[rgba(255,255,255,0.3)] border-solid border-[1.2px] box-border flex items-start py-2 pl-[19px] pr-[18px]">
            <div className="relative leading-[150%]">
              We just raised $20M in Series B. Learn more
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center gap-6 text-[80px] text-[rgba(236,236,236,0.65)]">
            <div className="self-stretch relative tracking-[-0.03em] leading-[100%] font-medium text-transparent !bg-clip-text [background:linear-gradient(145.55deg,_#ececec,_rgba(236,_236,_236,_0))] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-2xl mq450:leading-8 mq1050:text-[40px] mq1050:leading-[48px]">
              Modern analytics
              <br />
              for the modern world
            </div>
            <div className="w-[600px] flex items-start justify-center text-lg">
              <div className="flex-1 relative leading-[160%]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. `}</div>
            </div>
          </div>
          <div className="flex items-start justify-center pt-4 px-0 pb-0 gap-4 mq450:flex-wrap">
            <button className="cursor-pointer [border:none] py-3 px-6 bg-[#ececec] rounded-[60px] flex items-center justify-center hover:bg-[#d4d4d4]">
              <div className="relative text-base leading-[150%] font-[Montserrat] text-[#0b081c] text-left">
                Download the app
              </div>
            </button>
            <button className="cursor-pointer border-[#ececec] border-solid border-[1px] py-2.5 px-[23px] bg-[transparent] self-stretch rounded-[60px] flex items-center justify-center hover:bg-[rgba(212,212,212,0.09)] hover:border-[#d4d4d4] hover:border-solid hover:hover:border-[1px] hover:box-border">
              <div className="relative text-base leading-[150%] font-[Montserrat] text-[#ececec] text-left">
                Talk to an expert
              </div>
            </button>
          </div>
        </section>
        <div className="self-stretch h-[472px] shadow-[0px_-2px_10px_rgba(233,_223,_255,_0.3),_0px_-2px_40px_rgba(187,_155,_255,_0.15)] rounded-3xl flex flex-col items-center justify-center bg-[url('/assets/image-wrapper.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="relative leading-[150%]">
            Dummy text to delete in Webflow
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroStack;
