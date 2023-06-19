import Link from 'next/link';

export default function Navbar() {
    // return <div>Navbar</div>
    return (
        <div>
          <h1>Navbar</h1>
          <Link href="/">
            Home
          </Link>
          <Link href="/about">
             About
          </Link>
        </div>
      );
}