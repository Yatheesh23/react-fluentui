import { makeStyles, shorthands } from "@fluentui/react-components";

export const customeCardStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    width: "500px",
    maxWidth: "100%",
    boxShadow: "0 32px 64px rgba(0,0,0,0.28)",
  },
  cardHeader: {
    ...shorthands.padding("2em"),
  },
  formStyles: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("15px"),
    maxWidth: "450px",
    "> div": {
      display: "flex",
      flexDirection: "column",
      ...shorthands.gap("2px"),
    },
  },
  loginBtn: {
    width: "30px",
  },
  container: {
    display: "flex",
    ...shorthands.gap("10px"),
  },

  contentHeader: {
    marginTop: "0",
  },
});
