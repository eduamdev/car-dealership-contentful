import React from "react";

const sizes = {
  xs: "px-3 py-1",
  default: "w-40 py-3",
  lg: "w-56 py-3",
};

const colors = {
  default: "bg-white text-accents-4",
  primary:
    "bg-primary text-on-primary hover:bg-primary-hover focus:outline-none focus:border-primary-focus focus:shadow-outline active:bg-primary-active",
};

const Btn = (props) => <button {...props} />;
const Link = (props) => <a {...props} />;

const components = {
  button: Btn,
  link: Link,
};

const Button = ({
  text,
  tag,
  size = "default",
  color = "default",
  ...rest
}) => {
  const TagName = components[tag || "button"];
  return (
    <TagName
      className={`whitespace-no-wrap inline-flex items-center justify-center border border-transparent transition ease-in-out duration-150 leading-6 shadow-md rounded-md ${
        sizes[size || "default"]
      } ${colors[color || "default"]}`}
      {...rest}
    >
      {text}
    </TagName>
  );
};

export default Button;
