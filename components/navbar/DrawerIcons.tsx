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

export const iconDict: { [name: string]: JSX.Element }  = {
  'columns': <AccountBalanceIcon color="secondary" />,
  'debit-card': <CreditCardIcon color="secondary" />,
  'plus-square': <AddBoxIcon color="secondary" />,
  'dominos': <DomainIcon color="secondary" />,
  'clipboard': <AssignmentIcon color="secondary" />,
  'person': <PersonIcon color="secondary" />,
  'graph': <AssessmentIcon color="secondary" />,
  'paragraph': <ArticleIcon color="secondary" />,
  'hammer': <HardwareIcon color="secondary"/>,
  'film': <MoneyIcon color="secondary" />,
  'skyline': <LocationCityIcon color="secondary" />,
  'dollar-paper': <RequestPageIcon color="secondary" />,
  'box-with-handle': <InventoryIcon color="secondary" />,
  'bookeared-paper-text': <FeedIcon color="secondary" />,
  'bookeared-paper-plain': <InsertDriveFileIcon color="secondary" />,
};