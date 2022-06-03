import { css } from "@emotion/react";
import React from "react";
import { FC } from "react";
import { colors } from "../../../lib/style";

export const MeetBallButton: FC = () => {
  return (
    <div css={button}>
      <span css={round}></span>
      <span css={round}></span>
      <span
        css={css`
          ${round};
          margin-right: 0;
        `}
      ></span>
    </div>
  );
};

const styels = {
  button: css`
    background-color: ${colors.white};
    height: 15px;
    width: 15px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: ${colors.light_blue};
      opacity: 0.5;
    }
  `,
  round: css`
    background-color: ${colors.black};
    opacity: 0.2;
    height: 2px;
    width: 2px;
    border-radius: 100%;
    margin-right: 2px;
  `,
};

const { button, round } = styels;
