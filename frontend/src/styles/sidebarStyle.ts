import { COLORS } from "../constants/colors";


export const headerStyle: React.CSSProperties = {
  padding: "24px 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: `1px solid ${COLORS.secondary.s04}`,
};

export const logoStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

export const logoIconStyle: React.CSSProperties = {
  width: "48px",
  height: "48px",
  background: COLORS.primary.p07,
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "28px",
  fontWeight: "bold",
  color: "white",
};

export const logoTitleStyle: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: 700,
  color: COLORS.primary.p09,
  lineHeight: 1.2,
};

export const toggleButtonStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  background: "transparent",
  border: "none",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",

  transition: "background 0.2s",
  marginLeft: "16px",
};

export const navStyle: React.CSSProperties = {
  flex: 1,
  padding: "16px 0",
};

