import React from "react";

import { formatTime } from "@utils/dateFormatting";
import { getCache } from "@utils/dataCaching";
import { getEnvVariables, ENV_VARIABLE_KEYS } from "@constants/envVariables";
import { IMAGE_CONFIG, LAST_UPDATE_TEXT } from "./config";

import { UpdateInfoContainer, Image, Text } from "./styled";

const LAST_UPDATE_KEY = getEnvVariables(ENV_VARIABLE_KEYS.cacheLastUpdateKey);

const UpdateInfo = React.memo(() => {
  const milliseconds = getCache(LAST_UPDATE_KEY);
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
});

export default UpdateInfo;
