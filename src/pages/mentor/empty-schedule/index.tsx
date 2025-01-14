import { useEffect, useState } from "react";
import Alert from "../../../components/atoms/alert";
import VerticalScheduler from "../../../components/molecules/vertical-scheduler";
import UpdateScheduler from "../../../components/organisms/update-schedule";
import useScheduleService from "../../../services/useScheduleService";

const EmptySchedulePage = () => {
  const [isOpen, setIsopen] = useState<boolean>(false);
  const { getWeeklyTimeFrame } = useScheduleService();
  const [response, setResponse] = useState(null);
  const fetchData = async () => {
    const response = await getWeeklyTimeFrame();
    setResponse(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative">
      <div className="absolute -top-[75px] left-[230px] ">
        <UpdateScheduler />
      </div>
      <div className="mt-5 empty-schedule">
        {!response?.updateSchedule && (
          <Alert
            onCancel={() => setIsopen(false)}
            open={true}
            type="error"
            message="Giảng viên vui lòng cập nhật lịch trống"
            timeClose={3}
          />
        )}

        {response && <VerticalScheduler scheduleData={response} />}
      </div>
    </div>
  );
};

export default EmptySchedulePage;
