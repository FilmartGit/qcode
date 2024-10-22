/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

export function FasadQr({ children }) {
  return (
    <div className="border rounded-lg shadow-2xl p-5 w-fit bg-white">
      <h1 className="text-xl text-slate-950 pb-2">Генератор QRcode</h1>
      <hr />
      {children}
    </div>
  );
}
