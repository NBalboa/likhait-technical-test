import React from "react";
import { COLORS } from "../constants/colors";

export const containerStyle: React.CSSProperties = {
  background: "white",
  borderRadius: "12px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
};

export const totalStyle: React.CSSProperties = {
  padding: "16px 24px",
  display: "flex",
  alignItems: "center",
  gap: "12px",
  borderBottom: `1px solid ${COLORS.secondary.s04}`,
  background: COLORS.secondary.s01,
  cursor: "pointer",
};

export const totalLabelStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 600,
  color: COLORS.secondary.s08,
  letterSpacing: "0.05em",
};

export const totalAmountStyle: React.CSSProperties = {
  fontSize: "32px",
  fontWeight: 700,
  color: COLORS.secondary.s10,
};

export const totalCountStyle: React.CSSProperties = {
  fontSize: "14px",
  color: COLORS.secondary.s07,
  marginLeft: "auto",
};

export const toggleButtonStyle: React.CSSProperties = {
  width: "32px",
  height: "32px",
  background: COLORS.secondary.s03,
  border: "none",
  borderRadius: "6px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: COLORS.secondary.s08,
  transition: "all 0.2s",
  flexShrink: 0,
};

export const listStyle: React.CSSProperties = {
  padding: "8px",
};

export const itemStyle: React.CSSProperties = {
  padding: "16px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: COLORS.secondary.s01,
  borderRadius: "8px",
  marginBottom: "8px",
  transition: "all 0.2s",
};

export const itemInfoStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

export const itemIconStyle: React.CSSProperties = {
  fontSize: "32px",
  width: "48px",
  height: "48px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "white",
  borderRadius: "10px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
};

export const itemDetailsStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "4px",
};

export const itemNameStyle: React.CSSProperties = {
  fontSize: "18px",
  fontWeight: 600,
  color: COLORS.secondary.s10,
};

export const itemCountStyle: React.CSSProperties = {
  fontSize: "14px",
  color: COLORS.secondary.s07,
};

export const itemAmountStyle: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: 700,
  color: COLORS.secondary.s10,
};