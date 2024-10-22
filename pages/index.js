/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import QRcodeCanvas from "@/components/qrcode";
import FasadForms from "@/components/fasadForms";
import { FasadQr } from "@/components/fasadQr";
import { useRulesQr } from "@/components/useRulesQr";

export default function Home() {
  const [value, valueQr, changeValue, changeQr ] = useRulesQr();

  return (
    <>
      <FasadQr>
        <QRcodeCanvas value={valueQr} />
      </FasadQr>
      <FasadForms value={value} changeQr={changeQr} changeValue={changeValue} />
    </>
  );
}
