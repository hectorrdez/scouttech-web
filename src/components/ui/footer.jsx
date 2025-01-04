import { sitemap } from "../../pages/sitemap";
import { Link } from "react-router-dom";

export function Footer() {
  const footerLinks = sitemap.public.filter(
    (route) => route.scope === "footer"
  );

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <nav className="flex gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-400 hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} ScoutTech. Todos los derechos
            reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
