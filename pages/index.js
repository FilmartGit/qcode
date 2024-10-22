/* eslint-disable react/react-in-jsx-scope */
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex items-center justify-center h-screen w-full font-[family-name:var(--font-geist-sans)]`}
    >
      <div className="border rounded-lg shadow-md p-5 w-96">
        <div className="">
          
        </div>
      </div>
    </div>
  );
}
