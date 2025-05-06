import Link from "next/link";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <Link href="#">
          <img
            src={`${basePath}/DialogixLogo.svg`}
            alt="Dialogix Logo"
            className="h-8"
          />
        </Link>
        <p className="text-gray-600">© 2025 Dialogix. All rights reserved.</p>
      </div>
    </footer>
  );
}
