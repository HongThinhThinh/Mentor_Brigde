import { BellOutlined } from "@ant-design/icons";
import { FC } from "react";
import { Notification } from "../../atoms/notification/Notification";
import Account from "../../molecules/account/Account";
import { useCurrentUser } from "../../../utils/getcurrentUser";

interface HeaderProps {
  title?: string;
  items?: [];
}

const Header: FC<HeaderProps> = ({ title }) => {
  const user = useCurrentUser();
  const role =
    user?.role == "STUDENT" ? "Xin Chào Sinh Viên!" : "Xin Chào Giảng Viên!";

  return (
    <div className="flex justify-between pt-7">
      <div className="">
        <h1 className="text-2xl-bold pt-3">{title?.toString()}</h1>
      </div>
      <div className="flex gap-5">
        <Notification count={5} items={[]} placement="bottomRight">
          <div className="bg-shade-400 cursor-pointer text-shade-800 h-14 w-14 flex justify-center items-center rounded-full">
            <BellOutlined style={{ fontSize: 26 }} />
          </div>
        </Notification>
        <Account
          src={user?.avatar}
          subTitle={role}
          title={user?.fullName || user?.email}
        />
      </div>
    </div>
  );
};

export default Header;