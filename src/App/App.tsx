import { GlTemplate } from "gitlanding/GlTemplate";
import { OnyxiaUi } from "theme";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { I18nFetchingSuspense } from "i18n";

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
  );
}
