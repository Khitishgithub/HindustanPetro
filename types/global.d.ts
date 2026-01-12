export {};

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: {
          new (
            options: {
              pageLanguage: string;
              includedLanguages?: string;
              layout?: unknown;
              autoDisplay?: boolean;
            },
            elementId: string
          ): void;

          InlineLayout: {
            SIMPLE: unknown;
          };
        };
      };
    };
  }
}
