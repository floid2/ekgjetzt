import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Seite nicht gefunden – EKGjetzt"
        description="Die angeforderte Seite existiert leider nicht oder wurde verschoben."
      />
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <div className="text-center max-w-md">
          <h1 className="mb-4 text-6xl font-serif font-bold text-primary">404</h1>
          <h2 className="mb-4 text-2xl font-serif text-foreground">Seite nicht gefunden</h2>
          <p className="mb-8 text-muted-foreground">
            Die angeforderte Seite existiert leider nicht oder wurde verschoben.
          </p>
          <Button asChild size="lg">
            <Link to="/">Zurück zur Startseite</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
