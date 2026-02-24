import type { FunctionComponent } from "react";
import Column from "./Column";

export type SectionType = {
  className?: string;
};

const Section: FunctionComponent<SectionType> = ({ className = "" }) => {
  return (
    <main
      className={`self-stretch flex flex-col items-center py-0 px-5 box-border gap-20 shrink-0 max-w-full mq750:gap-10 mq450:gap-5 ${className}`}
    >
      <section className="w-[470px] flex flex-col items-center py-6 px-0 box-border gap-6 bg-[url('/assets/section-title.png')] bg-cover bg-no-repeat bg-[top] text-center text-5xl text-[#ececec] font-[Montserrat]">
        <div className="w-[450px] flex items-start justify-center p-2.5 box-border">
          <div className="flex-1 relative tracking-[-0.32px] leading-[120%] font-medium mq450:text-[29px] mq450:leading-[35px] mq1050:text-[38px] mq1050:leading-[46px]">
            Features that work for your future.
          </div>
        </div>
        <div className="self-stretch relative text-lg leading-[160%]">
          Check out our amazing features and experience the power of Vaultflow
          for yourself.
        </div>
      </section>
      <div className="w-[1200px] flex flex-col items-start p-2.5 box-border gap-20 max-w-full lg:gap-10 mq750:gap-5">
        <section className="self-stretch flex items-start flex-wrap content-start gap-6 text-left text-[32px] text-[#ececec] font-[Montserrat]">
          <Column
            iconWrapper="/assets/icon-1.png"
            analyticsDashboard="Analytics Dashboard"
            text="Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights."
            viewDashboard="View dashboard"
          />
          <Column
            iconWrapper="/assets/icon-2.png"
            analyticsDashboard="Digital Credit Tokens"
            text="Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business."
            viewDashboard="View tokens"
            iconWrapperFilter="drop-shadow(0px 0px 36.5px rgba(149, 37, 201, 0.75))"
            actionsAlignSelf="unset"
          />
        </section>
        <section className="self-stretch shadow-[0px_-2px_10px_rgba(233,_223,_255,_0.3),_0px_-2px_40px_rgba(187,_155,_255,_0.15),_0px_0.5px_0px_rgba(255,_255,_255,_0.5)_inset] rounded-[20px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.05),_rgba(255,_255,_255,_0))] flex items-start p-[60px] box-border gap-4 max-w-full text-left text-[32px] text-[#ececec] font-[Montserrat] lg:pl-[30px] lg:pr-[30px] lg:box-border mq450:pt-[39px] mq450:pb-[39px] mq450:box-border mq1050:flex-wrap">
          <div className="w-[460px] flex flex-col items-start gap-6 max-w-full mq750:min-w-full mq1050:flex-1">
            <div className="w-[50px] h-[50px] [filter:drop-shadow(0px_0px_36.5px_rgba(201,_37,_171,_0.75))] relative flex items-center justify-center">
              <img
                className="w-full h-full [filter:drop-shadow(0px_0px_36.5px_rgba(201,_37,_171,_0.75))] object-contain absolute left-[0px] top-[0px] [transform:scale(2.46)]"
                alt=""
                src="/assets/icon-3.png"
              />
            </div>
            <div className="self-stretch flex flex-col items-start gap-2.5">
              <h2 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.16px] leading-[130%] font-medium font-[inherit] mq450:text-[19px] mq450:leading-[25px] mq1050:text-[26px] mq1050:leading-[33px]">
                Code collaboration
              </h2>
              <div className="self-stretch relative text-sm leading-[150%]">
                Our advanced code synchronization technology ensures that your
                data is always up-to-date and accurate, no matter where it's
                coming from. Whether you're integrating data from multiple
                sources or working with a team of developers, our
                synchronization technology makes it easy to collaborate and
                ensure that your data is consistent and reliable.
              </div>
              <div className="flex items-start pt-4 px-0 pb-0 text-base text-[#fff]">
                <div className="relative [text-decoration:underline] leading-[150%] font-medium">
                  View code collaboration
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end min-w-[380px] mq750:min-w-full">
            <div className="w-[467px] h-[300px] [filter:drop-shadow(0px_-2px_10px_rgba(233,_223,_255,_0.3))_drop-shadow(0px_-2px_40px_rgba(187,_155,_255,_0.15))_drop-shadow(0px_0px_0px_rgba(0,_0,_0,_0.05))_drop-shadow(0px_0px_0px_rgba(255,_255,_255,_0.1))] rounded-[20px] relative flex items-center justify-center">
              <img
                className="w-full h-full [filter:drop-shadow(0px_-2px_10px_rgba(233,_223,_255,_0.3))_drop-shadow(0px_-2px_40px_rgba(187,_155,_255,_0.15))_drop-shadow(0px_0px_0px_rgba(0,_0,_0,_0.05))_drop-shadow(0px_0px_0px_rgba(255,_255,_255,_0.1))] object-contain absolute left-[0px] top-[0px] [transform:scale(1.171)]"
                loading="lazy"
                alt=""
                src="/assets/code-image.png"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Section;
