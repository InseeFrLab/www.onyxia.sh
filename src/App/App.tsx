import { GlTemplate } from "gitlanding/GlTemplate";
import { OnyxiaUi } from "theme";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { I18nFetchingSuspense } from "i18n";
import { GlobalStyles } from "tss";

export function App() {
  return (
    <OnyxiaUi>
      <I18nFetchingSuspense>
        <AppContextualized />
      </I18nFetchingSuspense>
    </OnyxiaUi>
  );
}

function AppContextualized() {
  return (
    <>
      <GlobalStyles
        styles={{
          html: {
            scrollBehavior: "smooth",
          }
        }}
      />
      <GlTemplate
        hasTopOfPageLinkButton={true}
        headerOptions={{
          position: "sticky",
          isRetracted: "smart",
        }}
        header={<Header />}
        body={<Body />}
        footer={<Footer />}
      />
    </>
  );
}
