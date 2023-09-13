import circle from "@assets/images/circle.svg";

import { UpdateInfoContainer, Text } from "./styled";

const UpdateInfo = () => {
  return (
    <UpdateInfoContainer>
      <img alt="Last update circle" height="50px" src={circle} width="50px" />
      <Text>Last updated at 11:59pm</Text>
    </UpdateInfoContainer>
  );
};

export default UpdateInfo;
