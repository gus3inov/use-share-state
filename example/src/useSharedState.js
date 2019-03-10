import { useState, useEffect } from 'react';
import BroadcastChannel from 'broadcast-channel';

const defaultConfig = {
  channel: 'shared_state',
  predicate: null,
  blacklist: [],
  whitelise: [],
  broadcastChannelOptions: null,
};

const useSharedState = (initialState, config = defaultConfig) => {
  const channel = new BroadcastChannel(config.channel, config.broadcastChannelOptions);
  const [state, setState] = useState(initialState);

  const postMessage = message => {
    channel.postMessage(message);
    setState(message);
  }

  useEffect(() => {
    channel.onmessage = (message) => setState(message);

    return () => {
      channel.close();
    }
  }, []);

  return [state, postMessage];
}

export default useSharedState;
