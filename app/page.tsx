import MainSellingPoint from "@/app/MainSellingPoint";
import MainCategories from "@/app/MainCategories";
import MainIntro from "@/app/MainIntro";
import WebsiteLayout from "@/app/WebsiteLayout";

export default function Home() {
  return (
      <WebsiteLayout>
          <main>
              <MainIntro/>
              <MainSellingPoint/>
              <MainCategories/>
          </main>
      </WebsiteLayout>

  );
}
