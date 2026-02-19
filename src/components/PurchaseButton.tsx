import { PURCHASE_URL } from "@/lib/constants";

interface Props {
  size?: "md" | "lg";
  className?: string;
}

export default function PurchaseButton({ size = "md", className = "" }: Props) {
  const py = size === "lg" ? "py-4" : "py-3";
  const text = size === "lg" ? "text-base" : "text-sm";

  return (
    <a
      href={PURCHASE_URL}
      className={`inline-block w-full md:w-auto px-10 ${py} ${text} font-bold rounded-md bg-primary-700 text-white hover:bg-primary-800 transition-colors text-center shadow-sm hover:shadow-md ${className}`}
    >
      今すぐ購入する
    </a>
  );
}
