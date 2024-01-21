import React from "react";

const sizeClasses = {
  txtInterRegular12Green500: "font-inter font-normal",
  txtPoppinsMedium20Black900: "font-medium font-poppins",
  txtDMMonoRegular12Bluegray400: "font-dmmono font-normal",
  txtDMSansBold6: "font-bold font-dmsans",
  txtDMSansMedium20: "font-dmsans font-medium",
  txtDMMonoRegular12: "font-dmmono font-normal",
  txtInterMedium16: "font-inter font-medium",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtInterRegular11Gray400: "font-inter font-normal",
  txtInterRegular11: "font-inter font-normal",
  txtInterRegular12: "font-inter font-normal",
  txtDMSansRegular14: "font-dmsans font-normal",
  txtInterRegular14: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
