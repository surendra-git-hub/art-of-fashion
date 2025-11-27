import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import type { ViewName, RouteParams, RouterContextType } from "./types";

// Create Router Context
const RouterContext = createContext<RouterContextType | undefined>(undefined);

// Custom Hook to use Router
export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context)
    throw new Error("useRouter must be used within a RouterProvider");
  return context;
};

interface RouterProviderProps {
  children: ReactNode;
}

export const RouterProvider: React.FC<RouterProviderProps> = ({ children }) => {
  const [currentView, setCurrentView] = useState<ViewName>("HOME");
  const [params, setParams] = useState<RouteParams>({});

  // Handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#/", "");
      const [path, ...query] = hash.split("/");

      switch (path) {
        case "":
        case undefined:
          setCurrentView("HOME");
          setParams({});
          break;
        case "article":
          setCurrentView("ARTICLE");
          setParams({ id: query[0] });
          break;
        case "category":
          setCurrentView("CATEGORY");
          setParams({ category: decodeURIComponent(query[0]) });
          break;
        case "about":
          setCurrentView("ABOUT");
          setParams({});
          break;
        default:
          setCurrentView("HOME");
          setParams({});
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // Initial load

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Navigation function
  const navigate = useCallback((view: ViewName, newParams?: RouteParams) => {
    setCurrentView(view);
    setParams(newParams || {});

    let hash = "/";
    if (view === "ARTICLE" && newParams?.id) hash = `/article/${newParams.id}`;
    else if (view === "CATEGORY" && newParams?.category)
      hash = `/category/${newParams.category}`;
    else if (view === "ABOUT") hash = "/about";

    window.location.hash = hash;
    window.scrollTo(0, 0);
  }, []);

  // Go back function
  const goBack = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <RouterContext.Provider value={{ currentView, params, navigate, goBack }}>
      {children}
    </RouterContext.Provider>
  );
};
