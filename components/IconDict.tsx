import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DomainIcon from '@mui/icons-material/Domain';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ArticleIcon from '@mui/icons-material/Article';
import HardwareIcon from '@mui/icons-material/Hardware';
import MoneyIcon from '@mui/icons-material/Money';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import InventoryIcon from '@mui/icons-material/Inventory';
import FeedIcon from '@mui/icons-material/Feed';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DiamondIcon from '@mui/icons-material/Diamond';

export const iconDict: { [name: string]: JSX.Element }  = {
  'columns': <AccountBalanceIcon />,
  'debit-card': <CreditCardIcon  />,
  'plus-square': <AddBoxIcon />,
  'dominos': <DomainIcon />,
  'clipboard': <AssignmentIcon />,
  'person': <PersonIcon />,
  'graph': <AssessmentIcon />,
  'paragraph': <ArticleIcon />,
  'hammer': <HardwareIcon />,
  'film': <MoneyIcon />,
  'skyline': <LocationCityIcon />,
  'dollar-paper': <RequestPageIcon />,
  'box-with-handle': <InventoryIcon />,
  'bookeared-paper-text': <FeedIcon />,
  'bookeared-paper-plain': <InsertDriveFileIcon />,
  'light-columns': <AccountBalanceIcon color="secondary" />,
  'light-debit-card': <CreditCardIcon color="secondary" />,
  'light-plus-square': <AddBoxIcon color="secondary" />,
  'light-dominos': <DomainIcon color="secondary" />,
  'light-clipboard': <AssignmentIcon color="secondary" />,
  'light-person': <PersonIcon color="secondary" />,
  'light-graph': <AssessmentIcon color="secondary" />,
  'light-paragraph': <ArticleIcon color="secondary" />,
  'light-hammer': <HardwareIcon color="secondary"/>,
  'light-film': <MoneyIcon color="secondary" />,
  'light-skyline': <LocationCityIcon color="secondary" />,
  'light-dollar-paper': <RequestPageIcon color="secondary" />,
  'light-box-with-handle': <InventoryIcon color="secondary" />,
  'light-bookeared-paper-text': <FeedIcon color="secondary" />,
  'light-bookeared-paper-plain': <InsertDriveFileIcon color="secondary" />,
  'account-tree': <AccountTreeIcon />,
  'auto-stories': <AutoStoriesIcon />,
  'diamond': <DiamondIcon />,
  'light-account-tree': <AccountTreeIcon color="secondary" />,
  'light-auto-stories': <AutoStoriesIcon color="secondary" />,
  'light-diamond': <DiamondIcon color="secondary" />,
};

interface IconComponentProps {
  icon: string;
  lightTheme?: boolean;
}
export default function IconComponent({
  icon,
  lightTheme = false
}:IconComponentProps) {
  const iconName = lightTheme ? `light-${icon}` : icon;
  return iconDict[iconName];
}