import {useEffect} from 'react';
import SoundPlayer from 'react-native-sound-player';

function usePlayBarkSound() {
  useEffect(() => {
    try {
      SoundPlayer.playAsset(require('../../assets/mp3/barking.mp3'));
      SoundPlayer.setVolume(1.0);
    } catch (e) {
      console.log('Cannot play the sound file', e);
    }
    return () => {
      SoundPlayer.stop();
    };
  }, []);

  return null;
}

export default usePlayBarkSound;
