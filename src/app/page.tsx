import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ResumeSection } from "@/components/page-section/resume-section";

export const metadata = {
  title: "游紹宏",
  description: "游紹宏 是一位熱愛學習新技術，樂於團隊合作與分享的雲端工程師。",
};

export default function Home() {
  return (
    <>
      <div >
      <div className="flex flex-col">
        <section
          className="w-full px-0 flex flex-col justify-center items-center relative py-16 md:py-24 h-[300px]"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/startup-grind/image/upload/c_scale,w_1200/c_crop,h_650,w_1200,y_0.5_mul_h_sub_0.5_mul_650/c_crop,h_650,w_1200/c_fill,dpr_2.0,f_auto,g_center,q_auto:good/v1/gcs/platform-data-goog/event_banners/gdev-eccosystems-bevy-chapters-background-blue_rCAKIc6.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            width: "100%",
            margin: 0,
          }}
        >
        <SiteHeader />
        </section>
        <div className="flex flex-col pb-16 -mt-14">
        <ResumeSection />
        </div>
        <SiteFooter />
      </div>
    </div>
    </>
  );
}
