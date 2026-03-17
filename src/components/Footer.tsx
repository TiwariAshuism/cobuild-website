const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="clash-display text-sm text-foreground">COBUILD</span>
        <p className="text-xs font-mono text-muted-foreground">
          © {new Date().getFullYear()} CoBuild Engineering. All rights reserved.
        </p>
        <span className="text-xs font-mono text-muted-foreground">v.2.0.25</span>
      </div>
    </footer>
  );
};

export default Footer;
