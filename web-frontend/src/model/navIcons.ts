import type { SvgIconComponent as Icon } from '@mui/icons-material';
import { PieChart as ChartPieIcon } from '@mui/icons-material';
import { Settings as GearSixIcon } from '@mui/icons-material';
import { Book as PlugsConnectedIcon } from '@mui/icons-material';
import { VerifiedUser as UserIcon } from '@mui/icons-material';
import { People as UsersIcon } from '@mui/icons-material';
import { X as XSquare} from '@mui/icons-material';

export const navIcons = {
    'chart-pie': ChartPieIcon,
    'gear-six': GearSixIcon,
    'plugs-connected': PlugsConnectedIcon,
    'x-square': XSquare,
    user: UserIcon,
    users: UsersIcon,
} as Record<string, Icon>;