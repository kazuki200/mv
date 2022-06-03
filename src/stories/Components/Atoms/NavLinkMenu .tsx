import { css } from "@emotion/react";
import { colors } from "../../../lib/style";
import React, { FC } from "react";

export type PROPS = {
  link: { label: string; href: string }[];
  backgrounds: {};
};


export const NavLinkMenu: FC<PROPS> = ({ link }) => {
  return (
    <ul css={wrapper}>
      {link.map((link) => (
        <li css={menu__block} key={link.label}>
          <a css={nav} href={link.href}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

const styles = {
  wrapper: css`
    background-color: ${colors.white};
    border: 1px solid ${colors.black};
    border-radius: 5%;
    width: 130px;
    list-style: none;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 0;
    padding-left: 0;
  `,
  menu__block: css`
    font-weight: 500;
    cursor: pointer;
    line-height: 1.5;
    &:hover {
      background-color: ${colors.gray};
    }
  `,
  nav: css`
    text-decoration: 0;
    display: block;
    padding-left: 20px;
    padding-right: 20px;
    color: ${colors.black};
  `,
};

const { wrapper, menu__block, nav } = styles;
