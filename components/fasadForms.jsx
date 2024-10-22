/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
export default function FasadForms({ value, changeQr, changeValue }) {
  return (
    <div className="mt-8 w-[800px] border rounded-lg p-5 bg-white flex flex-col items-center">
      <p className="text-gray-800">Введите целевую ссылку или текст:</p>
      <input
        type="text"
        className="w-full p-4 text-slate-700 border border-cyan-600 mt-2"
        placeholder="https://"
        value={value}
        onChange={changeValue}
      />
      <button
        className="text-slate-50 bg-black mx-auto mt-5 text-lg font-semibold px-5 py-4 shadow-md hover:bg-slate-900 transition-all hover:scale-[0.98]
           rounded-lg"
        onClick={changeQr}
      >
        Получить QR Code
      </button>
    </div>
  );
}
