import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "언제 출시하나요?",
    answer: "9월 중으로 출시 예정입니다. 정확한 날짜는 곧 공개될 예정입니다!",
    value: "item-1",
  },
  {
    question: "가족만 가입할 수 있나요?",
    answer: "아니요, 친구들도 가입할 수 있습니다. 가족과 친구들이 함께 사용할 수 있도록 설계되었습니다.",
    value: "item-2",
  },
  {
    question: "아이들이 잘 사용할 지 모르겠어요.",
    answer: "아이들이 즐겁게 사용할 수 있도록 다양한 리워드 기능이 준비되어 있습니다. 용돈을 걸어보세요!",
    value: "item-3",
  },
  {
    question: "엄마가 잘 사용을 안하세요.",
    answer: "그럴 때는 '콕 찌르기' 기능을 사용해보세요. 알림을 보내 엄마의 관심을 유도할 수 있습니다.",
    value: "item-4",
  },
  {
    question: "미션을 받고 싶어요.",
    answer: "미션 요청 기능을 사용해서 새로운 미션을 요청해보세요! 원하는 주제의 미션을 받을 수 있습니다.",
    value: "item-5",
  },
  {
    question: "앱 사용이 어렵지는 않나요?",
    answer: "앱은 직관적이고 사용하기 쉽게 디자인되었습니다. 간단한 가이드와 도움말도 제공됩니다.",
    value: "item-6",
  },
  {
    question: "데이터는 안전한가요?",
    answer: "네, 사용자의 데이터는 안전하게 보호되며, 개인정보 보호 정책에 따라 엄격하게 관리됩니다.",
    value: "item-7",
  },
  {
    question: "기기 제한이 있나요?",
    answer: "모든 Android 기기에서 사용할 수 있습니다. 다만 최신 OS에서 최적의 성능을 제공합니다. 아이폰은 추후 개발 예정입니다.",
    value: "item-8",
  },
  {
    question: "추가 기능이 있나요?",
    answer: "정기적인 업데이트를 통해 새로운 기능들이 추가될 예정입니다. 의견을 보내주시면 반영할 수 있도록 노력하겠습니다.",
    value: "item-9",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        자주 물어보는{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          질문
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        추가 질문이 있으신가요?{" "}
        <br />
        <a
          href="mailto:ollangollang.official@gmail.com"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          ollangollang.official@gmail.com
        </a>
        {" "}로 문의 주세요.
      </h3>
    </section>
  );
};
