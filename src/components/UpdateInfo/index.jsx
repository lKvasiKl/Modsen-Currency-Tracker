import circle from "@assets/icons/circle.svg";
import { formatTime } from "@utils/formatingFunctions";
import { getCache } from "@utils/cachingFunctions";

import { UpdateInfoContainer, Image, Text } from "./styled";

const CACHE_LAST_UPDATE_KEY = process.env.REACT_APP_CACHE_LAST_UPDATE_KEY;

const UpdateInfo = () => {
  const milliseconds = getCache(CACHE_LAST_UPDATE_KEY);
  const timeString = formatTime(milliseconds);

  return (
    <UpdateInfoContainer>
      <Image alt="Last update circle" height="50px" src={circle} width="50px" />
      <Text>Last updated at {timeString}</Text>
    </UpdateInfoContainer>
  );
};

export default UpdateInfo;
