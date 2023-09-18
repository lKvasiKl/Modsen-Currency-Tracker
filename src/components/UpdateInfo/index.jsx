import circle from "@assets/icons/circle.svg";

import { UpdateInfoContainer, Image, Text } from "./styled";

const UpdateInfo = () => {
  return (
    <UpdateInfoContainer>
      <Image alt="Last update circle" height="50px" src={circle} width="50px" />
      <Text>Last updated at 11:59pm</Text>
    </UpdateInfoContainer>
  );
};

export default UpdateInfo;
