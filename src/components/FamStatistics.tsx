// Statistics.tsx


export const FamStatistics = () => {
  const stats = [
    { label: "가족과 대화하는 사람 비율", value: "30.2%", description: "가족과 함께 사는 사람 중 30.2%가 하루 1시간 미만 대화" },
    { label: "떨어져 사는 사람들의 대화 시간", value: "89.2%", description: "가족과 떨어져 사는 사람 중 89.2%가 하루 1시간 미만 대화" },
    { label: "청소년의 대화 시간 부족", value: "80.0%", description: "청소년 중 80.0%가 하루 1시간 미만 대화" },
  ];

  return (
    <div className="flex flex-wrap justify-between mt-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex flex-col items-center w-1/3 p-4">
          <h3 className="text-4xl font-bold">{stat.value}</h3>
          <p className="text-md text-center mt-2">{stat.label}</p>
          <p className="text-sm text-muted-foreground text-center mt-1">{stat.description}</p>
        </div>
      ))}
    </div>
  );
};
