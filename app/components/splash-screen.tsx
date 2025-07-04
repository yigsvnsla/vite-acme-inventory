import { GalleryVerticalEnd } from "lucide-react";
import type { FC } from "react";

export const SplashScreen: FC = () => {
  return (
    <section>
      <div className="flex justify-center gap-2 md:justify-start">
        <div className="flex items-center gap-2 font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4 dark:text-white" />
          </div>
          Acme Inc.
        </div>
      </div>
    </section>
  );
};
