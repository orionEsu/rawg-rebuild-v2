import { IconType } from 'react-icons';
import { AiFillWindows, AiFillApple, AiFillAndroid } from 'react-icons/ai';
import {
	BsGlobe,
	BsPlaystation,
	BsXbox,
	BsNintendoSwitch,
} from 'react-icons/bs';
import { DiLinux } from 'react-icons/di';
import { RiMacLine } from 'react-icons/ri';
import { SiSega, SiAtari, SiCommodore } from 'react-icons/si';

export const iconMap: { [key: string]: IconType } = {
	pc: AiFillWindows,
	web: BsGlobe,
	playstation: BsPlaystation,
	xbox: BsXbox,
	nintendo: BsNintendoSwitch,
	linux: DiLinux,
	ios: AiFillApple,
	mac: RiMacLine,
	android: AiFillAndroid,
	sega: SiSega,
	atari: SiAtari,
	'commodore-amiga': SiCommodore,
};
