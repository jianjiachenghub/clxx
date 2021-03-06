import { css } from "@emotion/core";
import { vw } from "@clxx/base";

export const style = {
  container: css({
    backgroundColor: "#fff",
    userSelect: "none",
    borderTopLeftRadius: vw(10),
    borderTopRightRadius: vw(10),
    overflow: "hidden",
    boxShadow: `0 0 5px 0px #00000094`
  }),
  head: css({
    position: "relative",
    "&::after": {
      content: "''",
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      height: "1px",
      transform: `scaleY(${1 / window.devicePixelRatio})`,
      backgroundColor: "#ccc"
    }
  }),
  defaultTitle: css({
    color: "#333",
    margin: 0,
    fontSize: vw(16),
    lineHeight: vw(44)
  }),
  close: css({
    position: "absolute",
    fontSize: 0,
    right: vw(15),
    top: "50%",
    transform: `translateY(-50%)`,
    transition: `transform 50ms, opacity 50ms`,
    svg: {
      width: vw(20),
      path: {
        fill: "#aaa"
      }
    },
    "&:active": {
      opacity: 0.5,
      transform: `translateY(-50%) scale(1.2)`
    }
  }),

  // 选择区域
  select: css({
    padding: `0 ${vw(15)}`
  }),
  selectItem: css({
    position: "relative",
    color: "#333",
    lineHeight: vw(44),
    fontSize: vw(16),
    fontWeight: 600
  }),
  selectItemActive: css({
    color: "#108ee9"
  }),
  selectItemSeperator: css({
    color: "#ccc",
    lineHeight: 1,
    fontSize: vw(14),
    margin: `0 ${vw(5)}`
  }),

  // 列表区域
  optionItem: css({
    color: "#333",
    fontSize: vw(18)
  })
};
