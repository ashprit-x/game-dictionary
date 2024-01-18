import { Platform } from '../hooks/useGames';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { FaWindows, FaXbox, FaPlaystation, FaLinux, FaAndroid, FaApple} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from 'react-icons';
interface Props{
    platforms: Platform[];
}

const PlatformIconList = ({platforms}: Props) => {

    const iconMap: {[key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,

    }

  return (
    <HStack marginY={"10px"}>
        {platforms.map((platform) => <Icon key={platform.id} color='gray.500' as={iconMap[platform.slug]}/>)}
    </HStack>
    
    
  )
}

export default PlatformIconList