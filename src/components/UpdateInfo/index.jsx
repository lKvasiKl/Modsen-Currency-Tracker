import circle from "@assets/icons/circle.svg";
import { formatTime } from "@utils/formatingFunctions";
import { getCache } from "@utils/cachingFunctions";
import { ENV_VARIABLES } from "@constants/envVariables";

import { UpdateInfoContainer, Image, Text } from "./styled";

const UpdateInfo = () => {
  const milliseconds = getCache(ENV_VARIABLES.cacheLastUpdateKey);
  let timeString = formatTime(new Date().getTime());

  if (Object.keys(milliseconds).length !== 0) {
    timeString = formatTime(milliseconds);
  }

  return (
    <UpdateInfoContainer>
      <Image alt="Last update circle" height="50px" src={circle} width="50px" />
      <Text>Last updated at {timeString}</Text>
    </UpdateInfoContainer>
  );
};

export default UpdateInfo;
