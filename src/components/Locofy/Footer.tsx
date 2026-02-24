import type { FunctionComponent } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch flex flex-col items-center py-16 px-5 text-left text-2xl text-[#fff] font-[Montserrat] mq750:pt-[42px] mq750:pb-[42px] mq750:box-border ${className}`}
    >
      <div className="w-[1200px] flex flex-col items-start p-6 box-border">
        <div className="self-stretch flex items-start flex-wrap content-start gap-6">
          <div className="flex-1 flex flex-col items-start gap-10 min-w-[300px] mq450:gap-5">
            <div className="self-stretch flex flex-col items-start gap-4">
              <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.01em] font-medium font-[inherit] mq450:text-[19px]">
                Contact
              </h3>
              <div className="self-stretch flex flex-col items-start gap-1.5 text-lg">
                <div className="self-stretch relative tracking-[-0.01em] font-light">
                  Work inquires: work@vaultflow.com
                </div>
                <div className="self-stretch relative tracking-[-0.01em] font-light">
                  PR and speaking: press@vaultflow.com
                </div>
                <div className="self-stretch relative tracking-[-0.01em] font-light">
                  New business: newbusiness@vaultflow.com
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <h3 className="m-0 relative text-[length:inherit] tracking-[-0.01em] font-medium font-[inherit] mq450:text-[19px]">
                Careers
              </h3>
              <div className="relative text-lg tracking-[-0.01em] font-light">
                Careers@vaultflow.com
              </div>
            </div>
            <div className="relative text-base tracking-[-0.01em] font-light text-[#939393]">
              © 2023 Vaultflow. All Rights Reserved.
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start gap-10 min-w-[300px] mq450:gap-5">
            <div className="self-stretch flex flex-col items-start gap-4">
              <h3 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.01em] font-medium font-[inherit] mq450:text-[19px]">
                Address
              </h3>
              <div className="w-[210px] flex items-start text-lg">
                <div className="flex-1 relative tracking-[-0.01em] font-light">
                  398 11th Street, Floor 2<br />
                  San Francisco, CA 94103
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start gap-4">
              <h3 className="m-0 relative text-[length:inherit] tracking-[-0.01em] font-medium font-[inherit] mq450:text-[19px]">
                Social
              </h3>
              <div className="self-stretch flex flex-col items-start gap-1.5 text-lg">
                <div className="relative tracking-[-0.01em] font-light">
                  Twitter
                </div>
                <div className="relative tracking-[-0.01em] font-light">
                  Instagram
                </div>
                <div className="relative tracking-[-0.01em] font-light">
                  Tik Tok
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch w-[180px] flex items-end justify-end text-[22px] text-[#ececec]">
            <div className="h-[22px] w-[138px] flex items-end justify-end">
              <div className="h-[22px] w-[138px] flex items-start gap-2.5">
                <img
                  className="h-[22px] w-[22px] object-cover"
                  alt=""
                  src="/assets/valtflow-icon.png"
                />
                <h3 className="m-0 h-[22px] w-[106px] relative text-[length:inherit] tracking-[-0.03em] leading-[100%] font-bold font-[inherit] inline-block mq450:text-lg mq450:leading-[18px]">
                  Vaultflow
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
