import logo from "../assets/logo-semfundo.png";

export default function Footer() {
  return (
    <footer className="bg-night-deep px-4 py-7 sm:px-6">
      <div className="mx-auto flex max-w-310 flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <img src={logo} alt="SNADRILL" className="h-11 w-auto" />
        <span className="text-xs text-[#6f6a5c]">© 2026 SNADRILL Máquinas e Serviços</span>
      </div>
    </footer>
  );
}
