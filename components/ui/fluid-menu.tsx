import React, { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

interface MenuProps {
  trigger: React.ReactNode
  children: React.ReactNode
  align?: "left" | "right"
  showChevron?: boolean
}

export function Menu({ trigger, children, align = "left", showChevron = true }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer inline-flex items-center"
        role="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {trigger}
        {showChevron && (
          <ChevronDown className="ml-2 -mr-1 h-4 w-4 text-slate-400" aria-hidden="true" />
        )}
      </div>

      {isOpen && (
        <div
          className={`absolute ${
            align === "right" ? "right-0" : "left-0"
          } mt-2 w-56 rounded-md bg-[var(--bg-color)] border border-[var(--border-color)] shadow-lg ring-1 ring-[var(--primary-color)] focus:outline-none z-50`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

// FIX: The `children` prop is made optional to allow for icon-only buttons, resolving the type error in `Navbar.tsx`.
export interface MenuItemProps {
  // Fix: Made the 'children' prop optional to support icon-only menu items.
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  isActive?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ children, onClick, disabled = false, icon, isActive = false }) => {
  return (
    <button
      className={`relative block w-full h-16 text-center group
        ${disabled ? "text-slate-500 cursor-not-allowed" : "text-slate-300"}
        ${isActive ? "bg-[var(--primary-color)]/20" : ""}
      `}
      role="menuitem"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="flex items-center justify-center h-full mt-[5%]">
        {icon && (
          <span className="h-6 w-6 transition-all duration-200 group-hover:[&_svg]:stroke-[2.5]">
            {icon}
          </span>
        )}
        {children}
      </span>
    </button>
  )
}

export function MenuContainer({ children }: { children: React.ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const childrenArray = React.Children.toArray(children)

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  }

  const createItemClickHandler = (originalOnClick?: () => void) => {
    return () => {
      if (originalOnClick) {
        originalOnClick();
      }
      setIsExpanded(false);
    };
  };

  return (
    <div className="relative w-[64px]" data-expanded={isExpanded}>
      {/* Container for all items */}
      <div className="relative">
        {/* First item - always visible */}
        <div 
          className="relative w-16 h-16 bg-slate-900/80 backdrop-blur-sm border border-[var(--border-color)] cursor-pointer rounded-full group will-change-transform z-50"
          onClick={handleToggle}
        >
          {childrenArray[0]}
        </div>

        {/* Other items */}
        {childrenArray.slice(1).map((child, index) => {
            if(!React.isValidElement(child)) return null;

            // FIX: The type of `child.props` is unknown. Casting to a ReactElement with specific props
            // allows for type-safe access to `onClick` and for cloning.
            const menuItemChild = child as React.ReactElement<MenuItemProps>;
            const enhancedChild = React.cloneElement(menuItemChild, {
                onClick: createItemClickHandler(menuItemChild.props.onClick),
            });

            return (
              <div 
                key={index} 
                className="absolute top-0 left-0 w-16 h-16 bg-slate-900/80 backdrop-blur-sm border border-[var(--border-color)] will-change-transform"
                style={{
                  transform: `translateY(${isExpanded ? (index + 1) * 68 : 0}px)`,
                  opacity: isExpanded ? 1 : 0,
                  zIndex: 40 - index,
                  clipPath: index === childrenArray.length - 2 
                    ? "circle(50% at 50% 50%)" 
                    : "circle(50% at 50% 55%)",
                  transition: `transform ${isExpanded ? '300ms' : '300ms'} cubic-bezier(0.4, 0, 0.2, 1),
                            opacity ${isExpanded ? '300ms' : '350ms'}`,
                  backfaceVisibility: 'hidden',
                  perspective: 1000,
                }}
              >
                {enhancedChild}
              </div>
            )
        })}
      </div>
    </div>
  )
}