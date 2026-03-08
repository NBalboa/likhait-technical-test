import React from "react";
import { CATEGORY_EMOJIS } from "../constants/categoryEmojis";
import { COLORS } from "../constants/colors";
import { containerStyle, itemAmountStyle, itemCountStyle, itemDetailsStyle, itemIconStyle, itemInfoStyle, itemNameStyle, itemStyle, listStyle, toggleButtonStyle, totalAmountStyle, totalCountStyle, totalLabelStyle, totalStyle } from "../styles/categoryBreakdownStyle";

interface CategoryData {
  category: string;
  amount: number;
  count: number;
}

interface CategoryBreakdownProps {
  categories: CategoryData[];
  total: number;
  totalCount: number;
}

const CategoryBreakdown: React.FC<CategoryBreakdownProps> = ({
  categories,
  total,
  totalCount,
}) => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  const formatAmount = (amount: number) => {
    return `$${amount.toFixed(2)}`;
  };

  return (
    <div style={containerStyle}>
      <div
        style={totalStyle}
        onClick={() => setIsCollapsed(!isCollapsed)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsCollapsed(!isCollapsed);
          }
        }}
      >
        <span style={totalLabelStyle}>TOTAL:</span>
        <span style={totalAmountStyle}>{formatAmount(total)}</span>
        <span style={totalCountStyle}>({totalCount} transactions)</span>
        <button
          style={toggleButtonStyle}
          aria-label={isCollapsed ? "Expand" : "Collapse"}
          onClick={(e) => {
            e.stopPropagation();
            setIsCollapsed(!isCollapsed);
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = COLORS.secondary.s04;
            e.currentTarget.style.color = COLORS.secondary.s10;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = COLORS.secondary.s03;
            e.currentTarget.style.color = COLORS.secondary.s08;
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="currentColor"
            style={{
              transform: isCollapsed ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
            }}
          >
            <path d="M8 11l-5-5h10z" />
          </svg>
        </button>
      </div>

      {!isCollapsed && (
        <div style={listStyle}>
          {categories.map((category) => (
            <div
              key={category.category}
              style={itemStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = COLORS.secondary.s02;
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0, 0, 0, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = COLORS.secondary.s01;
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={itemInfoStyle}>
                <span style={itemIconStyle}>
                  {CATEGORY_EMOJIS[category.category] || "📊"}
                </span>
                <div style={itemDetailsStyle}>
                  <div style={itemNameStyle}>{category.category}</div>
                  <div style={itemCountStyle}>
                    {category.count} transaction
                    {category.count !== 1 ? "s" : ""}
                  </div>
                </div>
              </div>
              <div style={itemAmountStyle}>{formatAmount(category.amount)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryBreakdown;
