const FooterSection = () => {
  return (
    <footer className="py-12 bg-foreground">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        <p className="font-display text-2xl font-semibold text-primary-foreground mb-2">
          Os Falecidos de Favaios
        </p>
        <p className="font-body text-sm text-primary-foreground/50 mb-6">
          Registos de Óbitos · 1926–1940 · Alto Douro, Portugal
        </p>
        <div className="w-16 h-px bg-gold/40 mx-auto mb-6" />
        <p className="font-body text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} · Projecto de preservação digital do
          património documental de Favaios
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
