import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">RentVision</Link>
      </div>

      <nav aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/properties">Properties</Link>
        <Link href="/map">Map</Link>
        <Link href="/login">Login</Link>
      </nav>
    </header>
  );
}
