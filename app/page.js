import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>

      <nav>
        <ul>
          <li>
            <Link href="/week-2">Go to Week 2</Link>
          </li>
          <li>
            <Link href="/week-3">Go to Week 3</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
