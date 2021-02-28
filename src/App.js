import './App.css';
import Dropdown from './components/Dropdown/Dropdown';

const dropdownMenu = [
  { id: 0, text: 'Profile Information' },
  { id: 1, text: 'Change Password' },
  { id: 2, text: 'Become PRO' },
  { id: 3, text: 'Help' },
  { id: 4, text: 'Log out' },
]

function App() {
  return (
    <div className="container">
      <Dropdown menu={dropdownMenu}/>
    </div>
  )
}

export default App;
