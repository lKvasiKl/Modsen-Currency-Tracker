import { formatTime } from "@utils/dateFormatting";
import { getCache } from "@utils/dataCaching";
import { ENV_VARIABLES } from "@constants/envVariables";
import { IMAGE_CONFIG, LAST_UPDATE_TEXT } from "./config";

import { UpdateInfoContainer, Image, Text } from "./styled";

const UpdateInfo = () => {
  const milliseconds = getCache(ENV_VARIABLES.cacheLastUpdateKey);
  let timeString = formatTime(new Date().getTime());

  if (Object.keys(milliseconds).length !== 0) {
    timeString = formatTime(milliseconds);
  }

  return (
    <UpdateInfoContainer>
      <Image {...IMAGE_CONFIG} />
      <Text>
        {LAST_UPDATE_TEXT} {timeString}
      </Text>
    </UpdateInfoContainer>
  );
};

export default UpdateInfo;
