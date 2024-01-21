import React from "react";

import { Button, Img, SelectBox, Text } from "components";

const filterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MockupDashboardColumn = (props) => {
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
              <Img className="h-5" src="images/img_user.svg" alt="user" />
            </Button>
            {!!props?.filter ? (
              <SelectBox
                className="sm:flex-1 font-inter leading-[normal] text-gray-400 text-left text-xs w-[29%] sm:w-full"
                placeholderClassName="text-gray-400"
                value={props?.filter}
                isSearchable={false}
                placeholder="This Week"
                indicator={
                  <Img
                    className="h-4 w-4"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                name="filter"
                isMulti={false}
                options={filterOptionsList}
              />
            ) : null}
          </div>
          <div className="flex flex-row gap-8 items-start justify-start w-full">
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              {!!props?.customers ? (
                <Text
                  className="text-blue_gray-400 text-sm w-auto"
                  size="txtInterRegular14"
                >
                  {props?.customers}
                </Text>
              ) : null}
              <div className="flex flex-row gap-[7px] items-center justify-center w-auto">
                {!!props?.zero ? (
                  <Text
                    className="text-gray-800 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    {props?.zero}
                  </Text>
                ) : null}
                {!!props?.zeroOne ? (
                  <Text
                    className="text-green-500 text-xs w-auto"
                    size="txtInterRegular12Green500"
                  >
                    {props?.zeroOne}
                  </Text>
                ) : null}
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
              {!!props?.active ? (
                <Text
                  className="text-blue_gray-400 text-sm w-auto"
                  size="txtInterRegular14"
                >
                  {props?.active}
                </Text>
              ) : null}
              <div className="flex flex-row gap-[7px] items-center justify-center w-auto">
                {!!props?.zeroTwo ? (
                  <Text
                    className="text-gray-800 text-xl w-auto"
                    size="txtPoppinsMedium20"
                  >
                    {props?.zeroTwo}
                  </Text>
                ) : null}
                {!!props?.zeroThree ? (
                  <Text
                    className="text-green-500 text-xs w-auto"
                    size="txtInterRegular12Green500"
                  >
                    {props?.zeroThree}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MockupDashboardColumn.defaultProps = {};

export default MockupDashboardColumn;
