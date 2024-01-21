import React from "react";

import { Button, Img, Text } from "components";

const MockupDashboardEmptystate = (props) => {
  return (
    <>
      <div className={props.className}>
      <div className="bg-gray-100 border border-gray-300_01 border-solid flex items-center justify-start p-10 sm:px-5 rounded-full h-[150px] w-[120px] ">
  {/* Content goes here */}
  {/* Content goes here */}
          <Img
            className="h-[300px] w-[300px]"
            src="images/img_bag_gray_400.svg"
            alt="bag"
          />
        </div>
        <div className="flex flex-col gap-6 items-center justify-start w-auto md:w-full">
          <div className="flex flex-col gap-3 items-center justify-start w-auto md:w-full">
            <Text
              className="text-black-900 text-center text-xl w-auto"
              size="txtPoppinsMedium20Black900"
            >
              {props?.noordersyet}
            </Text>
            <Text
              className="max-w-[282px] md:max-w-full text-blue_gray-400 text-center text-sm"
              size="txtInterRegular14"
            >
              {props?.descriptiontext}
            </Text>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[180px] rounded-[12px]"
            leftIcon={
              <Img
                className="h-6 mr-5"
                src="images/img_favorite.svg"
                alt="favorite"
              />
            }
            color="pink_600"
            size="sm"
            variant="fill"
          >
            <div className="!text-white-A700 font-inter leading-[normal] text-base text-center">
              {props?.newProduct}
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};

MockupDashboardEmptystate.defaultProps = {
  noordersyet: "No Orders Yet?",
  descriptiontext:
    "Add products to your store and start selling to see orders here.",
  newProduct: "New Product",
};

export default MockupDashboardEmptystate;
