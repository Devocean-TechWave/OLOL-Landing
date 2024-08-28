import { Progress } from "@/components/ui/progress"; // Progress 바 컴포넌트
import olol from "@/assets/olol.png"; // 올랑올랑 로고 이미지

const MissionCard = () => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 w-[320px] mx-auto">
      {/* Header with Logo and Progress */}
      <div className="flex flex-col items-center mb-4">
        <img src={olol} alt="올랑올랑" className="h-12 w-12 mb-2" /> {/* 크기 축소 및 여백 조정 */}
        <Progress value={16} max={100} className="w-full h-2 my-1 rounded-full bg-gray-200" /> {/* Progress 바 크기 및 스타일링 조정 */}
        <span className="text-xs text-gray-500 mt-1">1/6</span>
      </div>

      {/* Question Section */}
      <div className="text-center my-4">
        <h1 className="text-lg font-bold text-green-600">Q1.</h1> {/* 텍스트 크기 및 색상 조정 */}
        <p className="text-sm text-gray-700 mt-1 leading-relaxed">
          가족 구성원의 기분이 안 좋다면 <br /> 그 이유를 안다.
        </p>
      </div>

      {/* Answer Options */}
      <div className="flex flex-col gap-2 mt-4 w-full">
        {[
            "당연하지! 매우 그렇다!",
            "음... 아마도? 그렇다!",
            "안 좋은 일이 있었겠지, 보통이다.",
            "엥 뭐가 문제지? 그렇지 않다.",
            "(무신경) 전혀 그렇지 않다."
        ].map((text, index) => (
            <button
            key={index}
            className="bg-gradient-to-r from-green-400 to-green-500 text-white py-2 px-4 rounded-full shadow-md hover:from-green-500 hover:to-green-600 transition duration-150 ease-in-out text-sm"
            >
            {text}
            </button>
        ))}
        </div>
    </div>
  );
};

export default MissionCard;