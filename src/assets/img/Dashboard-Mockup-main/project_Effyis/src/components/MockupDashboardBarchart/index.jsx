import React from "react";

import { Img, SelectBox, Text } from "components";

const filterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MockupDashboardBarchart = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-6 h-[291px] md:h-auto items-center justify-start w-full">
          <div className="flex flex-col gap-3 items-start justify-start w-full">
            <div className="flex flex-row gap-3 items-start justify-between w-full">
              <Text
                className="text-base text-gray-800 w-auto"
                size="txtInterMedium16"
              >
                {props?.marketingtext}
              </Text>
              <SelectBox
                className="sm:flex-1 font-inter leading-[normal] text-gray-400 text-left text-xs w-[30%] sm:w-full"
                placeholderClassName="text-gray-400"
                indicator={
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="filter"
                options={filterOptionsList}
                isSearchable={false}
                placeholder="This Week"
              />
            </div>
            <div className="flex flex-row gap-[23px] items-start justify-between w-full">
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <div className="bg-pink-600 h-2 rounded-[50%] w-2"></div>
                <Text
                  className="text-[11px] text-blue_gray-300 w-auto"
                  size="txtInterRegular11"
                >
                  {props?.acquisitiontext}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <div className="bg-indigo-200 h-2 rounded-[50%] w-2"></div>
                <Text
                  className="text-[11px] text-blue_gray-300 w-auto"
                  size="txtInterRegular11"
                >
                  {props?.purchasetext}
                </Text>
              </div>
              <div className="flex flex-row gap-2 items-center justify-center w-auto">
                <div className="bg-orange-200 h-2 rounded-[50%] w-2"></div>
                <Text
                  className="text-[11px] text-blue_gray-300 w-auto"
                  size="txtInterRegular11"
                >
                  {props?.retentiontext}
                </Text>
              </div>
            </div>
          </div>
          <Img
            className="h-[205px] w-[205px]"
            src="images/img_group2.svg"
            alt="groupTwo"
          />
        </div>
      </div>
    </>
  );
};

MockupDashboardBarchart.defaultProps = {
  marketingtext: "Marketting",
  acquisitiontext: "Acquisition",
  purchasetext: "Purchase",
  retentiontext: "Retention",
};

export default MockupDashboardBarchart;
