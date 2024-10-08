
import seoyeon from "@/assets/seoyeon.png";
import jung from "@/assets/jung.png";
import youjin from "@/assets/youjin.png";
import ubin from "@/assets/ubin.png";
import joungeun from "@/assets/joungeun.png";
import pokeIcon from "@/assets/pokeIcon.png";  // 아이콘 이미지 경로 예시
import fireIcon from "@/assets/fireIcon.png";
import bookIcon from "@/assets/bookIcon.png";

const notifications = [
  {
    id: 1,
    avatar: seoyeon, // 유저 아바타 이미지 URL
    name: "딸 / 장세연",
    message: "'화분에 물주기' 미션을 콕 찔렸어요!",
    time: "7/17 13:05",
    icon: pokeIcon, // 아이콘 이미지
    type: "default",
  },
  {
    id: 2,
    avatar: jung,
    name: "친구 / 염정",
    message: "'헬스장 가기' 미션을 응원해요!",
    time: "7/17 13:00",
    icon: fireIcon,
    type: "default",
  },
  {
    id: 3,
    avatar: youjin,
    name: "딸 / 피유진",
    message: "새로운 미션을 보내달라고 콕 찔렸어요!",
    time: "7/16 11:40",
    icon: pokeIcon,
    type: "default",
  },
  {
    id: 4,
    avatar: ubin,
    name: "동생 / 김유빈",
    message: "새로운 미션을 보냈어요!",
    time: "7/16 11:40",
    icon: bookIcon,
    type: "highlight",
  },
  {
    id : 5,
    avatar : joungeun,
    name : "아버지 / 신중은",
    message : "새로운 미션을 보냈어요!",
    icon : bookIcon,
    time : "7/16 11:40",
  }
];

const NotificationItem = ({ notification }:any) => {
  const { avatar, name, message, time, icon, type } = notification;

  const itemClass =
    type === "highlight"
      ? "border border-green-400 bg-white dark:bg-gray-800 dark:border-green-600" // For highlighted items
      : "bg-gray-100 dark:bg-gray-700"; // For default items

  return (
    <div className={`flex items-center p-3 mb-2 rounded-lg ${itemClass} shadow-sm`}>
      <img src={avatar} alt="User Avatar" className="h-8 w-8 rounded-full mr-3" />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="font-medium text-sm dark:text-white">{name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{time}</p>
        </div>
        <div className="flex items-center">
          <img src={icon} alt="Notification Icon" className="h-4 w-4 mr-2" />
          <p className="text-sm dark:text-gray-300">{message}</p>
        </div>
      </div>
    </div>
  );
};

const NotificationList = () => {
  return (
    <div className="p-4 max-w-md mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4 dark:text-white">알림</h1>
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
};

export default NotificationList;
