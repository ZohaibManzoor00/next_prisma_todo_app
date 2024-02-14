import Link from "next/link";

type MyComponentProps = {
  to: string;
  name: string;
  styles?: string;
};

export default function NavLink({ to, name, styles }: MyComponentProps) {
  return <Link href={to} className={`hover:text-slate-400 ${styles}`}>{name}</Link>
}
