import { css, jsx } from "@emotion/react";
import { FC } from "react";
import { NAVLINKBUTTON } from "../../../types/NavLinkButton";
import { colors } from "../../../lib/style";

export const NavLinkButton: FC<NAVLINKBUTTON> = ({ href, label }) => {
  return (
    <a css={sytles.button} href={href}>
      {label}
    </a>
  );
};

const sytles = {
  button: css`
    text-decoration: none;
    color: ${colors.white};
    font-weight: bold;
  `,
};
