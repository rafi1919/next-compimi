"use client";

import { Icon } from "@iconify/react";
import React from "react";

interface iconProps {
  icon: any;
  className?: any;
  width?: any;
  rotate?: any;
  hFlip?: any;
  vFlip?: any;
}
const Icons = ({ icon, className, width, rotate, hFlip, vFlip }: iconProps) => {
  return (
    <>
      <Icon
        width={width}
        rotate={rotate}
        hFlip={hFlip}
        icon={icon}
        className={className}
        vFlip={vFlip}
      />
    </>
  );
};

export default Icons;
