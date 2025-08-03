export const Footer = () => {
  return (
    <footer className="py-4 px-4 bg-card relative border-t border-border mt-8 flex flex-col items-center justify-center">
      <p className="text-sm text-muted-foreground text-center">
        &copy; {new Date().getFullYear()} Hania. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors mt-2"
      >
      </a>
    </footer>
  );
};
