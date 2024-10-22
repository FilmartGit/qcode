/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

export default function LayoutApp({ children }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      {children}
    </div>
  );
}
