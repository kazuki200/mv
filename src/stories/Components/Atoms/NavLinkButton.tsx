import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled/types/base";

import React from "react";
import { FC } from "react";
import { NAVLINKBUTTON } from "../../../types/Types";

const sytles = {
  button: css`
    text-decoration: none;
    color: red;
  `,
};

export const NavLinkButton: FC<NAVLINKBUTTON> = ({ href, label }) => {
  return (
    <a css={sytles.button} href={href}>
      {label}
    </a>
  );
};
