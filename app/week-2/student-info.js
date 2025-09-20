import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <h1>Name: Theo Sanchez</h1>
      <p>
        GitHub:{" "}
        <Link href="https://github.com/TheoSanz/cprg306-assignments"
          style={{ textDecoration: "underline"}}>TheoSanz/cprg306-assignments
        </Link>
      </p>
    </div>
  );
}