
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { LightBulbIcon } from "./Icons";
import { Progress } from "@/components/ui/progress"
import cat from "@/assets/cat.svg";
import missionStamp from "@/assets/missionStamp.png";
import MissionCard from "./\bMissionCard";
import NotificationList from "./\bNotificationList";
export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        
        
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <img src={cat} alt="Cat" className="w-20" />
          <div className="flex flex-col">
            <CardTitle className="text-lg">고양이 밥주기
            </CardTitle>
            <CardDescription>딸/장세연</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <span className="flex text-sm text-gray-500 ml-auto justify-end">D-10</span> {/* Aligned to the right */}
          <Progress value={60} />
        </CardContent>
      </Card>
    
       
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
      <CardTitle className="text-sm">미션 수행 화면</CardTitle>
      <CardContent>
        <img src={missionStamp} alt="Cat"  />
      </CardContent>
    
      </Card>

      {/* Pricing */}
      <div className="absolute top-[160px] left-[20px] w-72 drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <MissionCard />
      </div>

      {/* Service */}<div className="absolute w-[350px] -right-[10px] bottom-[-220px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
      <NotificationList/>
      </div>
      
    </div>
  );
};
