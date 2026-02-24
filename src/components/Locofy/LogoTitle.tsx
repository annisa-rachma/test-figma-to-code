import type { FunctionComponent } from "react";

export type LogoTitleType = {
  className?: string;
};

const LogoTitle: FunctionComponent<LogoTitleType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center py-[60px] px-5 gap-10 shrink-0 text-left text-xl text-[#fff] font-[Montserrat] mq750:gap-5 ${className}`}
    >
      <h3 className="m-0 relative text-[length:inherit] leading-[130%] font-[inherit] mq450:text-base mq450:leading-[21px]">
        <span>{`Trusted by teams at over `}</span>
        <span className="font-medium">1,000</span>
        <span> of the world’s leading organizations</span>
      </h3>
      <div className="self-stretch flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center gap-12 max-w-full mq450:gap-6 mq1050:flex-wrap">
          <img
            className="h-5 w-[62px]"
            loading="lazy"
            alt="Dell"
            src="/assets/logo-dell.svg"
          />
          <img className="h-[17px] w-[87px]" alt="Zendesk" src="/assets/logo-zendesk.svg" />
          <img className="h-[21px] w-[67px]" alt="Rakuten" src="/assets/logo-rakuten.svg" />
          <img className="h-[13px] w-[143px]" alt="Pacific Funds" src="/assets/logo-pacific-funds.svg" />
          <img className="h-[24.3px] w-20" alt="NCR" src="/assets/logo-ncr.svg" />
          <div className="h-[22.8px] w-[120px] relative">
            <img className="absolute left-0 h-full" alt="Nest" src="/assets/nest.svg" />
            <img className="absolute right-0 h-[70%] top-[15%]" alt="Lattice" src="/assets/lattice.svg" />
          </div>
          <img className="h-5 w-[54.3px]" alt="TED" src="/assets/logo-ted.svg" />
        </div>
      </div>
    </section>
  );
};

export default LogoTitle;
