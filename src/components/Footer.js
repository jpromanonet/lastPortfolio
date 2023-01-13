import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <BottomNavigation >
          <BottomNavigationAction href="https://twitter.com/jpromanonet" target="_blank" label="Twitter" value="favorites" icon={<TwitterIcon  style={{fill: "#1DA1F2"}}/>} />
          <BottomNavigationAction href="https://instagram.com/jpromanonet" target="_blank" label="Instagram" value="nearby" icon={<InstagramIcon  style={{fill: " #C13584"}}/>} />
        </BottomNavigation>
)
}

export default Footer
