import React from "react";

const sizes = {
  xs: "xs",
  default: "",
  lg: "lg",
};

const colors = {
  default: "",
  primary: "primary",
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
      className={`btn ${sizes[size || "default"]} ${
        colors[color || "default"]
      }`}
      {...rest}
    >
      {text}
    </TagName>
  );
};

export default Button;
