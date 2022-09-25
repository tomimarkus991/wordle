export const realButtonVariants = {
  // regular --> hover --> active --> dark

  dark: `bg-gray-700 text-[#f3f2f0] border-gray-900
    hover:text-white
    active:border-gray-700
    dark:bg-gray-700 dark:border-gray-900 dark:active:border-gray-700`,
  light: `bg-slate-50 text-slate-700 border-slate-200
    hover:text-gray-800
    active:border-slate-50`,
  blue: `bg-blue-700 text-[#f3f2f0] border-blue-900
    hover:text-white
    active:border-blue-700
    dark:bg-blue-700 dark:border-blue-900 dark:active:border-blue-700`,
  green: `bg-green-600 text-[#f3f2f0] border-green-700
    hover:text-white
    active:border-green-600`,
  yellow: `bg-yellow-500 text-[#f3f2f0] border-yellow-600
    hover:text-white
    active:border-yellow-500`,
  gray: `bg-gray-500 text-[#f3f2f0] border-gray-600
    hover:text-white
    active:border-gray-500`,
};

export const realButtonSizes = {
  xxs: "py-2 px-3 text-sm",
  xs: "py-2 px-5 text-sm",
  sm: "py-2 px-10 text-sm",
  md: "py-2 px-14 text-md",
  lg: "py-3 px-18 text-lg",
};

export type RealButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof realButtonVariants;
  size?: keyof typeof realButtonSizes;
  children: string | React.ReactNode;
};
