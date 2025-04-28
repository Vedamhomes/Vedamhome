"use client";

import React from "react";
import Image from "next/image";
import { Button } from "antd";

// Regular expression to check if a string is an image URL
const isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;

const getChildrenToRender = (item, i) => {
  if (!item || !item.name) return null; // Safety check

  let Tag = "div"; // Default element
  if (item.name.startsWith("title")) Tag = "h1";
  if (item.href) Tag = "a";

  let children = item.children;

  // If children is a string and matches an image URL, render as an image
  if (typeof children === "string" && isImg.test(children)) {
    children = (
      <Image loading="lazy"  src={children} alt="img" width={300} height={200} unoptimized />
    );
  }

  // If it's a button, render Ant Design's Button component
  if (item.name.startsWith("button") && typeof children === "object") {
    children = <Button {...children} />;
  }

  return (
    <Tag key={i} {...item}>
      {children}
    </Tag>
  );
};

export default getChildrenToRender;
