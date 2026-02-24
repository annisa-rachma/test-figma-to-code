import type { FunctionComponent } from "react";

export type NavbarLogoLeftType = {
  className?: string;
};

const NavbarLogoLeft: FunctionComponent<NavbarLogoLeftType> = ({
  className = "",
}) => {
  return (
    <header
      className={`self-stretch bg-[#0b0121] overflow-hidden flex items-start justify-center py-0 px-6 top-[0] z-[99] sticky text-left text-[22px] text-[#ececec] font-[Montserrat] ${className}`}
    >
      <div className="w-[1200px] flex items-center justify-center">
        <div className="w-[1200px] flex items-center justify-between gap-5 mq1050:w-[438px] mq1050:gap-5">
          <div className="flex items-start py-5 px-0">
            <div className="h-[22px] w-[138px] flex items-center justify-center">
              <div className="h-[22px] w-[138px] flex items-start gap-2.5">
                <img
                  className="h-[22px] w-[22px] object-cover"
                  loading="lazy"
                  alt=""
                  src="/assets/valtflow-icon.png"
                />
                <h3 className="m-0 h-[22px] w-[106px] relative text-[length:inherit] tracking-[-0.03em] leading-[100%] font-bold font-[inherit] inline-block">
                  Vaultflow
                </h3>
              </div>
            </div>
          </div>
          <div className="overflow-hidden flex items-center gap-8 text-base mq450:gap-4 mq1050:hidden">
            <div className="flex items-start py-6 px-3">
              <div className="relative leading-[150%]">Features</div>
            </div>
            <div className="flex items-start py-6 px-3">
              <div className="relative leading-[150%]">Pricing</div>
            </div>
            <div className="flex items-start py-6 px-3">
              <div className="relative leading-[150%]">About us</div>
            </div>
            <button className="cursor-pointer border-[#ececec] border-solid border-[1px] py-2 px-5 bg-[#ececec] rounded-[50px] flex items-center justify-center hover:bg-[#d4d4d4] hover:border-[#d4d4d4] hover:border-solid hover:hover:border-[1px] hover:box-border">
              <div className="relative text-base leading-[150%] font-[Montserrat] text-[#0b081c] text-left">
                Download the app
              </div>
            </button>
            <button className="cursor-pointer border-[#ececec] border-solid border-[1px] py-1.5 px-[19px] bg-[transparent] rounded-[50px] flex items-center justify-center hover:bg-[rgba(212,212,212,0.09)] hover:border-[#d4d4d4] hover:border-solid hover:hover:border-[1px] hover:box-border">
              <div className="relative text-base leading-[150%] font-[Montserrat] text-[#ececec] text-left">
                Talk to an expert
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarLogoLeft;
