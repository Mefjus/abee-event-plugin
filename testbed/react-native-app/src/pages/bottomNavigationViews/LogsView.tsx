import React, { useContext, useEffect } from "react";
import { BehavioralContext, useV } from "react-native-behavioral";
import { Text } from "react-native-paper";

export const LogsView = () => {
  const { initialize } = useContext(BehavioralContext);
  const { error, getData, data } = useV();

  useEffect(() => {
    initialize("userId");
    getData();
  }, []);

  return (
    <>
      <Text>VisitorId: {data?.visitorId}</Text>
      <Text>Full visitor data:</Text>
      <Text>{error ? error.message : JSON.stringify(data, null, 2)}</Text>
    </>
  );
};
