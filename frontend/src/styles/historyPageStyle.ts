import React from "react";
import { COLORS } from "../constants/colors";

export const pageStyle: React.CSSProperties = {
  padding: "48px 64px",
  minHeight: "100vh",
  background: COLORS.secondary.s01,
};

export const headerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "24px",
  justifyContent: "space-between",
};

export const leftHeaderStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "24px",
};

export const rightHeaderStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px"
}

export const titleStyle: React.CSSProperties = {
  fontSize: "40px",
  fontWeight: 700,
  color: COLORS.secondary.s10,
  margin: 0,
  flexShrink: 0,
};

export const loadingStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "48px",
  fontSize: "18px",
  color: COLORS.secondary.s08,
};