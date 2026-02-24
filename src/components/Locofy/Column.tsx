import { type FunctionComponent, useMemo, type CSSProperties } from "react";

export type ColumnType = {
  className?: string;
  iconWrapper?: string;
  analyticsDashboard?: string;
  text?: string;
  viewDashboard?: string;

  /** Style props */
  iconWrapperFilter?: CSSProperties["filter"];
  actionsAlignSelf?: CSSProperties["alignSelf"];
};

const Column: FunctionComponent<ColumnType> = ({
  className = "",
  iconWrapper,
  analyticsDashboard,
  text,
  viewDashboard,
  iconWrapperFilter,
  actionsAlignSelf,
}) => {
  const iconWrapperStyle: CSSProperties = useMemo(() => {
    return {
      filter: iconWrapperFilter,
    };
  }, [iconWrapperFilter]);

  const actionsStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: actionsAlignSelf,
    };
  }, [actionsAlignSelf]);

  return (
    <div
      className={`flex-1 flex flex-col items-center min-w-[376px] text-left text-[32px] text-[#ececec] font-[Montserrat] mq750:min-w-full ${className}`}
    >
      <div className="w-full shadow-[0px_-2px_10px_rgba(233,_223,_255,_0.3),_0px_-2px_40px_rgba(187,_155,_255,_0.15),_0px_0.5px_0px_rgba(255,_255,_255,_0.5)_inset] rounded-[20px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.05),_rgba(255,_255,_255,_0))] flex flex-col items-start p-[60px] box-border gap-4 max-w-full mq750:pl-[30px] mq750:pr-[30px] mq750:box-border mq450:pt-[39px] mq450:pb-[39px] mq450:box-border">
        <div className="w-[50px] h-[50px] [filter:drop-shadow(0px_0px_36.5px_rgba(89,_29,_221,_0.75))] relative flex items-center justify-center">
          <img
            className="w-full h-full [filter:drop-shadow(0px_0px_36.5px_rgba(89,_29,_221,_0.75))] object-contain absolute left-[0px] top-[0px] [transform:scale(2.46)]"
            loading="lazy"
            alt=""
            src={iconWrapper}
            style={iconWrapperStyle}
          />
        </div>
        <div className="self-stretch flex flex-col items-start gap-2.5">
          <h1 className="m-0 self-stretch relative text-[length:inherit] tracking-[-0.16px] leading-[130%] font-medium font-[inherit] mq450:text-[19px] mq450:leading-[25px] mq1050:text-[26px] mq1050:leading-[33px]">
            {analyticsDashboard}
          </h1>
          <div className="self-stretch relative text-sm leading-[150%]">
            {text}
          </div>
          <div
            className="self-stretch flex items-start pt-4 px-0 pb-0 text-base text-[#fff]"
            style={actionsStyle}
          >
            <div className="flex items-center justify-center">
              <div className="relative [text-decoration:underline] leading-[150%] font-medium">
                {viewDashboard}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Column;
