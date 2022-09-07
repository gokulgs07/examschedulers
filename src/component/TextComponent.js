import React from 'react'
    export const TextComponent = ({
        label,
        value = null,
        styleProps,
        children,
        CustomTag = "div",
        onchange = null ,
      }) => {
        console.log("VALUE : " + value);
        return (
          <CustomTag onChange={onchange} style={styleProps}>
            {label}
            {children}
          </CustomTag>
        );
      };
      export const Box = ({ children, style }) => {
        return <div style={style}>{children}</div>;
      };

export default TextComponent