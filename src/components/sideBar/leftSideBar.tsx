import './leftSideBar.css';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

function leftSideBar() {
    return (
        <div className="sideBar">
            <div className="mainMenu">
                <Paper sx={{ width: 320, maxWidth: '100%' }}>
                    <MenuList>
                        <MenuItem>
                            <ListItemIcon>
                                <FormatListNumberedIcon/>
                            </ListItemIcon>
                            <ListItemText>СУВ</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <DesktopWindowsIcon/>
                            </ListItemIcon>
                            <ListItemText>Мониторинг СУВ</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <FormatListNumberedIcon/>
                            </ListItemIcon>
                            <ListItemText>КЗП</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <DesktopWindowsIcon/>
                            </ListItemIcon>
                            <ListItemText>Мониторинг КЗП</ListItemText>
                        </MenuItem>
                    </MenuList>
                </Paper>
            </div>
            <div className="bugReportButton">
                <Button variant="contained">БАГ РЕПОРТ</Button>
            </div>
        </div>
    )
}

export default leftSideBar;