import React from "react";

import { Button, Img, List, SelectBox, Text } from "components";
import MockupDashboardBarchart from "components/MockupDashboardBarchart";
import MockupDashboardColumn from "components/MockupDashboardColumn";
import MockupDashboardColumn1 from "components/MockupDashboardColumn1";
import MockupDashboardEmptystate from "components/MockupDashboardEmptystate";

const filterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const filterOptionsList1 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const filterOptionsList2 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const filterOptionsList3 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const filterOptionsList4 = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const iconOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const durationOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MockupDashboardPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-dmsans items-center justify-end mx-auto w-full">
        <div className="flex flex-col gap-[22px] items-center justify-start pb-[85px] w-full">
          <header className="flex flex-col items-center justify-center md:px-5 w-full">
            <div className="bg-white-A700 flex flex-1 flex-col items-start justify-start sm:px-5 px-[21px] py-3.5 w-full">
              <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-gray-800 text-xl w-auto"
                  size="txtDMSansMedium20"
                >
                  Dashboard
                </Text>
                <div className="flex flex-row gap-8 items-center justify-start w-auto">
                  <div className="h-[35px] md:h-auto relative w-8">
                    <Button
                      className="flex h-[30px] items-center justify-center mt-auto mx-auto w-[30px]"
                      shape="circle"
                      color="pink_600_19"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-[18px]"
                        src="images/img_notification.svg"
                        alt="notification"
                      />
                    </Button>
                    <Text
                      className="absolute bg-pink-600 h-3 justify-center px-1 right-[1%] rounded-[5px] text-[6px] text-center text-shadow-ts text-white-A700 top-[0] w-[11px]"
                      size="txtDMSansBold6"
                    >
                      1
                    </Text>
                  </div>
                  <div className="flex flex-row gap-5 h-[38px] md:h-auto items-center justify-start">
                    <div className="flex flex-col items-center justify-start w-[66%]">
                      <div className="flex flex-col items-end justify-start w-full">
                        <Text
                          className="text-gray-900 text-right text-sm"
                          size="txtDMSansRegular14"
                        >
                          Anima Agrawal
                        </Text>
                        <Text
                          className="mt-0.5 text-gray-600 text-right text-xs"
                          size="txtDMMonoRegular12"
                        >
                          Company LLC
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-8 w-[31px]"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 border-gray-100_01 border-solid border-t flex flex-1 flex-col items-start justify-start px-5 py-1 w-full">
              <div className="flex flex-row gap-[11px] items-start justify-start w-auto">
                <Img className="h-4 w-4" src="images/img_home.svg" alt="home" />
                <List
                  className="sm:flex-col flex-row gap-[11px] grid grid-cols-4 w-[89%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-row gap-[11px] items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-400 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      /
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-xs w-auto"
                      size="txtDMMonoRegular12Bluegray400"
                    >
                      Page
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[11px] items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-400 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      /
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-xs w-auto"
                      size="txtDMMonoRegular12Bluegray400"
                    >
                      Page
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[11px] items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-400 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      /
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-xs w-auto"
                      size="txtDMMonoRegular12Bluegray400"
                    >
                      Page
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[11px] items-start justify-start w-auto">
                    <Text
                      className="text-blue_gray-400 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      /
                    </Text>
                    <Text
                      className="text-blue_gray-400 text-xs w-auto"
                      size="txtDMMonoRegular12Bluegray400"
                    >
                      Page
                    </Text>
                  </div>
                </List>
              </div>
            </div>
          </header>
          <div className="flex flex-col font-inter gap-5 items-start justify-start max-w-[1106px] mx-auto md:px-5 w-full">
            <List
              className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1106px] w-full"
              orientation="horizontal"
            >
              <MockupDashboardColumn
                className="bg-white-A700 flex flex-col gap-2.5 h-[145px] md:h-auto items-start justify-start px-[15px] py-[11px] rounded-[12px] w-[321px]"
                customers="Sales"
                zero="₦0.00"
                zeroOne="+0.00%"
                active="Volume"
                zeroTwo="0"
              />
              <MockupDashboardColumn
                className="bg-white-A700 flex flex-col gap-2.5 h-[145px] md:h-auto items-start justify-start px-[15px] py-[11px] rounded-[12px] w-[321px]"
                customers="Customers"
                zero="0"
                zeroOne="+0.00%"
                active="Active"
                zeroTwo="0"
                zeroThree="+0.00%"
              />
              <MockupDashboardColumn1 className="bg-white-A700 flex flex-1 flex-col gap-2.5 h-[145px] md:h-auto items-start justify-start px-[15px] py-[11px] rounded-[12px] w-full" />
            </List>
            <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start max-w-[1104px] w-full">
              <div className="flex flex-1 flex-col gap-5 items-start justify-start max-w-[663px] w-full">
                <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                  <MockupDashboardBarchart className="bg-white-A700 flex flex-1 flex-col gap-2.5 h-[337px] md:h-auto items-center justify-center px-5 py-[21px] rounded-[12px] w-full" />
                  <List
                    className="flex flex-1 flex-col gap-[19px] items-start w-full"
                    orientation="vertical"
                  >
                    <MockupDashboardColumn
                      className="bg-pink-600 flex flex-1 flex-col gap-2.5 h-[159px] md:h-auto items-start justify-start my-0 px-[15px] py-[11px] rounded-[12px] w-full"
                      customers="All Products"
                      zero="0"
                      zeroOne="+0.00%"
                      active="Active"
                      zeroTwo="0"
                      zeroThree="+0.00%"
                    />
                    <MockupDashboardColumn
                      className="bg-white-A700 flex flex-col gap-2.5 h-[170px] md:h-auto items-start justify-start px-[20px] py-[15px] rounded-[12px] w-[350px]"
                      customers={<span style={{ color: 'red' }}>Abandoned Card</span>}
                      zero="0"
                      zeroOne="+0.00%"
                      active="Customers"
                      zeroTwo="0"
                      zeroThree="+0.00%"
                    />
                    
                  </List>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start px-5 py-[15px] rounded-[12px] w-full">
                  <div className="flex flex-col gap-9 items-start justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex flex-row gap-[21px] items-center justify-start w-auto">
                        <Text
                          className="text-base text-gray-800 w-auto"
                          size="txtInterMedium16"
                        >
                          Summary
                        </Text>
                        <SelectBox
                          className="leading-[normal] text-left text-sm w-[52%] sm:w-full"
                          placeholderClassName="text-pink-600"
                          indicator={
                            <Img
                              className="h-5 mr-[0] w-5"
                              src="images/img_arrowdown_pink_600.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="icon"
                          options={iconOptionsList}
                          isSearchable={false}
                          placeholder="Sales"
                          shape="round"
                          color="pink_600_14"
                          size="xs"
                          variant="fill"
                        />
                      </div>
                      <SelectBox
                        className="sm:flex-1 leading-[normal] text-gray-900_01 text-left text-xs w-[15%] sm:w-full"
                        placeholderClassName="text-gray-900_01"
                        indicator={
                          <Img
                            className="h-4 w-4"
                            src="images/img_arrowdown_gray_900_01.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="duration"
                        options={durationOptionsList}
                        isSearchable={false}
                        placeholder="Last 7 Days"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row sm:gap-[45px] items-start justify-between w-full">
                      <div className="flex flex-col gap-[37px] items-end justify-start w-auto">
                        <Text
                          className="text-[11px] text-blue_gray-300 w-auto"
                          size="txtInterRegular11"
                        >
                          100k
                        </Text>
                        <Text
                          className="text-[11px] text-blue_gray-300 text-right w-auto"
                          size="txtInterRegular11"
                        >
                          80k
                        </Text>
                        <Text
                          className="text-[11px] text-blue_gray-300 text-right w-auto"
                          size="txtInterRegular11"
                        >
                          60k
                        </Text>
                        <Text
                          className="text-[11px] text-blue_gray-300 text-right w-auto"
                          size="txtInterRegular11"
                        >
                          40k
                        </Text>
                        <Text
                          className="text-[11px] text-blue_gray-300 text-right w-auto"
                          size="txtInterRegular11"
                        >
                          20k
                        </Text>
                      </div>
                      <List
                        className="sm:flex-1 sm:flex-col flex-row gap-[45px] grid grid-cols-3 w-[34%] sm:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-[19px] items-center justify-start w-auto">
                          <Img
                            className="h-[241px] w-[13px]"
                            src="images/img_bar.svg"
                            alt="bar"
                          />
                          <Text
                            className="text-[11px] text-gray-400 text-right w-auto"
                            size="txtInterRegular11Gray400"
                          >
                            Sept 10
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[19px] items-center justify-start w-auto">
                          <Img
                            className="h-[241px] w-[13px]"
                            src="images/img_bar.svg"
                            alt="bar"
                          />
                          <Text
                            className="text-[11px] text-gray-400 text-right w-auto"
                            size="txtInterRegular11Gray400"
                          >
                            Sept 11
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[19px] items-center justify-start w-auto">
                          <Img
                            className="h-[241px] w-[13px]"
                            src="images/img_bar.svg"
                            alt="bar"
                          />
                          <Text
                            className="text-[11px] text-gray-400 text-right w-auto"
                            size="txtInterRegular11Gray400"
                          >
                            Sept 12
                          </Text>
                        </div>
                      </List>
                      <List
                        className="sm:flex-1 sm:flex-col flex-row gap-[45px] grid grid-cols-4 w-[48%] sm:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col gap-[19px] items-center justify-start w-auto">
                          <Img
                            className="h-[241px] w-[13px]"
                            src="images/img_bar.svg"
                            alt="bar"
                          />
                          <Text
                            className="text-[11px] text-gray-400 text-right w-auto"
                            size="txtInterRegular11Gray400"
                          >
                            Sept 13
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[19px] items-center justify-start w-auto">
                          <Img
                            className="h-[241px] w-[13px]"
                            src="images/img_bar.svg"
                            alt="bar"
                          />
                          <Text
                            className="text-[11px] text-gray-400 text-right w-auto"
                            size="txtInterRegular11Gray400"
                          >
                            Sept 14
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[19px] items-center justify-start w-auto">
                          <Img
                            className="h-[241px] w-[13px]"
                            src="images/img_bar.svg"
                            alt="bar"
                          />
                          <Text
                            className="text-[11px] text-gray-400 text-right w-auto"
                            size="txtInterRegular11Gray400"
                          >
                            Sept 15
                          </Text>
                        </div>
                        <div className="flex flex-col gap-[19px] items-center justify-start w-auto">
                          <Img
                            className="h-[241px] w-[13px]"
                            src="images/img_bar.svg"
                            alt="bar"
                          />
                          <Text
                            className="text-[11px] text-gray-400 text-right w-auto"
                            size="txtInterRegular11Gray400"
                          >
                            Sept 16
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col h-full items-start justify-start p-5 rounded-[12px] w-full">
                <div className="flex flex-col md:gap-10 gap-40 items-center justify-center w-full">
                  <Text
                    className="text-base text-gray-800 w-full"
                    size="txtInterMedium16"
                  >
                    Recent Orders
                  </Text>
                  <MockupDashboardEmptystate className="flex flex-col gap-10 items-center justify-start w-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockupDashboardPage;
