import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-tl from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              올랑올랑
            </span>{" "}
            랜딩 페이지
          </h1>{" "}
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          올랑올랑은 가족과 함께하는 소중한 순간을 기록하고 공유하는 어플리케이션입니다.
          <br />
          올랑올랑은 순우리말로 '마음이 설레다, 작은 물결이 일렁이는' 뜻입니다.
          <br />
              미션 하나로 시작되는 가족의 대화와 추억, 설렘을 기록하세요.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3">9월 출시 예정</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/Devocean-TechWave/OLOL-backend"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
