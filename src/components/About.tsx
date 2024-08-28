import { Statistics } from "./Statistics";
import olol from "../assets/olol.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={olol}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  올랑올랑{" "}
                </span>
                이란?
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                현대 사회에서 가족과의 대화 시간은 점점 줄어들고 있습니다.
                <br />
                조사에 따르면, 많은 사람들이 하루에 1시간도 채 되지 않는 대화를 나누고 있으며, 이로 인해 가족 간의 유대감이 약해지고 있습니다.
                <br />
                올랑올랑은 이러한 문제를 해결하기 위해 개발된 어플리케이션입니다.
                <br />
                간단한 미션과 대화를 통해 가족 간의 소통을 자연스럽게 유도하고, 세대 간의 이해를 돕습니다.
                <br />
                올랑올랑을 통해 가족과의 대화가 더욱 의미 있고 풍성해질 것입니다.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
