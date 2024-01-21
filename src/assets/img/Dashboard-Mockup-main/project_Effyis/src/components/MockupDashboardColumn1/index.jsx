import React from "react";

import { Button, Img, SelectBox, Text } from "components";

const filterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MockupDashboardColumn1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-8 h-full items-start justify-between w-full">
          <div className="flex flex-row items-center justify-between w-full">
            <Button
              className="flex h-9 items-center justify-center w-9"
              shape="round"
              color="orange_200_28"
              size="sm"
              variant="fill"
            >
              <Img className="h-5" src="images/img_bag.svg" alt="bag" />
            </Button>
            <SelectBox
              className="sm:flex-1 font-inter leading-[normal] text-gray-400 text-left text-xs w-[21%] sm:w-full"
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
          <div className="flex sm:flex-col flex-row gap-8 items-start justify-start w-full">
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtInterRegular14"
              >
                {props?.allorders}
              </Text>
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-gray-800 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  {props?.zero}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtInterRegular14"
              >
                {props?.pending}
              </Text>
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-gray-800 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  {props?.zeroOne}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-blue_gray-400 text-sm w-auto"
                size="txtInterRegular14"
              >
                {props?.completed}
              </Text>
              <div className="flex flex-row gap-[7px] items-center justify-center w-auto">
                <Text
                  className="text-gray-800 text-xl w-auto"
                  size="txtPoppinsMedium20"
                >
                  {props?.zeroTwo}
                </Text>
                <Text
                  className="text-green-500 text-xs w-auto"
                  size="txtInterRegular12Green500"
                >
                  {props?.zeroThree}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MockupDashboardColumn1.defaultProps = {
  allorders: "All Orders",
  zero: "0",
  pending: "Pending",
  zeroOne: "0",
  completed: "Completed",
  zeroTwo: "0",
  zeroThree: "+0.00%",
};

export default MockupDashboardColumn1;
