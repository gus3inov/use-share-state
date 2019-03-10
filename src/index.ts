import { useState, useEffect } from 'react';
import BroadcastChannel, { BroadcastChannelOptions } from 'broadcast-channel';

type Config = {
  channel: string;
  broadcastChannelOptions: BroadcastChannelOptions;
}

const defaultConfig = {
  channel: 'shared_state',
  broadcastChannelOptions: null,
};

const useSharedState = <State>(initialState: State, config: Config = defaultConfig): [State, Function] => {
  const channel: BroadcastChannel<State> = new BroadcastChannel(config.channel, config.broadcastChannelOptions);
  const [state, setState] = useState<State>(initialState);

  const postMessage = (message: State) => {
    channel.postMessage(message);
    setState(message);
  }

  useEffect(() => {
    channel.onmessage = (message: State) => setState(message);

    return () => {
      channel.close();
    }
  }, []);

  return [state, postMessage];
}

export default useSharedState;
