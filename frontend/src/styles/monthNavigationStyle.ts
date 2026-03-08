import { COLORS } from "../constants/colors";

export const wrapperStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  padding: "16px 0",
};

export const containerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
  gap: "12px",
  maxWidth: "900px",
  marginRight: "32px",
  flex: 1,
};

export const navigationButtonStyle: React.CSSProperties = {
  padding: "12px 16px",
  fontSize: "16px",
  fontWeight: 500,
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "all 0.2s",
  background: COLORS.primary.p05,
  color: "white",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  minWidth: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};