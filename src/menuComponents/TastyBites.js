import React, { useEffect, useState } from 'react';
import { API } from '../global';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';
import { BackBtn } from '../components/BackBtn';
import IconVeg from '../icons/icons8-veg-48.png'
import IconNonVeg from '../icons/icons8-non-veg-48.png'
import Card from '@mui/material/Card';

export default function TastyBites() {

    const [menu, setMenu] = useState([]);

    const fetchData = () => {
        axios.get(`${API}/tastyBites`)
            .then((res) => setMenu(res.data.menu))
    }

    useEffect(() => fetchData(), []);

    return (
        <div className="menuCardContainer">

            <BackBtn />
            <Card className='menuCardItem'>
                <h2>Tasty Bites</h2>

                <List sx={{ width: '100%' }}>
                    {menu.map(({ name, price, tag }, i) => (
                        <ListItem
                            key={i}
                            disableGutters
                            secondaryAction={
                                <IconButton aria-label="comment">
                                    {price}
                                </IconButton>
                            }
                        >
                            {tag === "veg" ? <img className='tagIcons' src={IconVeg} alt={tag} /> : <img className='tagIcons' src={IconNonVeg} alt={tag} />}

                            <ListItemText primary={name} />
                        </ListItem>
                    ))}
                </List>
            </Card>
        </div>
    )
}
