import { css } from "@emotion/react";

export const form = css`
  width: 50%;
`;

export const input = (hasError?: boolean) => css`
  display: flex;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;

  label {
    flex: 1;
    color: ${hasError ? "red" : "none"};
  }

  div {
    flex: 4;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    input {
      padding: 0.5rem;
      border: 1px solid ${hasError ? "red" : "black"};
    }

    span {
      color: ${hasError ? "red" : "none"};
    }
  }
`;
