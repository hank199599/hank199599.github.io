'use client'

import Avatar from "next/image";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { IconSchool, IconBriefcase } from "@tabler/icons-react";
import { ResumeContentCard } from "../resume-content-card";
import { ResumeContent } from "./resume-content";

export function ResumeSection() {
  const { education, experience } = ResumeContent();

  return (
    <section className="flex bg-transparent justify-center items-center from-gray-100 to-white w-full">
    <div className="relative bg-background/50 backdrop-blur-sm w-full max-w-7xl rounded-3xl shadow-lg pt-16 flex flex-col items-center">
      {/* 頭像 */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 p-0">
        <Avatar
          src="/avatar.png"
          alt="avatar"
          width={100}
          height={100}
          className="rounded-full border-4 border-white shadow-md"
        />
      </div>
      <div className="text-center mb-6">
        <h2 className="text-xl md:text-5xl font-semibold mt-4 mb-2">游紹宏</h2>
          <p className="text-gray-500 text-lg">「機會，是留給準備好的人」</p>
        </div>
        {/* 學歷 */}
        <div className="flex flex-col gap-4 px-30 w-full" >
            <div className="w-full mb-4 ">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><IconSchool /> 學歷</h3>
            <Separator className="my-4 bg-gray-400" />
            <div className="flex flex-col gap-4">
              {education.map((item) => (
                <ResumeContentCard key={item.school} title={item.title} company={item.school} description={[item.major]} startDate={item.startDate} endDate={item.endDate} />
              ))}
            </div>
            </div>
            {/* 經歷 */}
            <div className="w-full mb-4">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><IconBriefcase /> 工作經歷</h3>
            <Separator className="my-4 bg-gray-400" />
            <div className="flex flex-col gap-4">
                {experience.map((item) => (
                  <ResumeContentCard key={item.company} title={item.title} company={item.company} description={item.description} link={item.link} startDate={item.startDate} endDate={item.endDate} />
                ))}
            </div>
            </div>
            {/* 技能 */}
            <div className="w-full mb-4">
            <h3 className="text-lg font-semibold mb-2">技能</h3>
            <Separator className="my-4 bg-gray-400" />
            <div className="flex flex-wrap gap-2">
                    <Badge>AWS</Badge>
                    <Badge>GCP</Badge>
                    <Badge>Docker</Badge>
                    <Badge>Kubernetes</Badge>
                    <Badge>Python</Badge>
                    <Badge>CI/CD</Badge>            
                </div>
            </div>
        </div>
    </div>
  </section>
  );
}