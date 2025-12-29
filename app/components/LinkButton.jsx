import Link from "next/link"

export default function LinkButton({ href, label, variant = "default" }) {
  const baseStyles =
    "w-full flex items-center justify-center rounded-2xl px-6 py-4 text-sm font-medium transition-all duration-300 active:scale-[0.98]"

  const variants = {
    primary:
      "bg-black text-white hover:opacity-90",
    whatsapp:
      "bg-green-600 text-white hover:bg-green-700",
    call:
      "bg-white text-black border border-slate-200 hover:bg-slate-50",
  }

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]}`}>
      {label}
    </Link>
  )
}
