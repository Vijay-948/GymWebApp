import { css } from "@emotion/core";

const Overlay = () => {
  return <div css={styles} className="overlay"></div>;
};

const styles = css`
  position: absolute;
`;

export default Overlay;
