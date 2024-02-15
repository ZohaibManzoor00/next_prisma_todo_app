import Link from "next/link";

type NavLinkProps = {
  to: string;
  name: string;
  styles?: string;
};

export default function NavLink({ to, name, styles }: NavLinkProps) {
  return <Link href={to} className={`hover:text-slate-400 ${styles}`}>{name}</Link>
}
