import { css, jsx } from "@emotion/react";
import { FC } from "react";
import { colors } from "../../../lib/style";

type PROPS = {
  href: string;
  label: string;
  backgrounds: {};
};

export const NavLinkButton: FC<PROPS> = ({ href, label }) => {
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
