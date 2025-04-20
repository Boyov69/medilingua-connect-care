
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
          404 - Page Not Found
        </h1>
        <p className="mt-6 text-base text-muted-foreground leading-7">
          Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
        </p>
        <div className="mt-10">
          <Button asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
