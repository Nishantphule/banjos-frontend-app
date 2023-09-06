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
import IconCheese from '../icons/icons8-cheese-wedge-48.png'
import Card from '@mui/material/Card';

export default function Pizza() {

    const [menu, setMenu] = useState([]);

    const fetchData = () => {
        axios.get(`${API}/pizza`)
            .then((res) => setMenu(res.data.menu))
    }

    useEffect(() => fetchData(), []);

    return (
        <div className="menuCardContainer">

            <BackBtn />
            <Card className='menuCardItem'>

                <div className='pizzaPrice'>
                    <div><h2>Pizza</h2></div>

                    <div><h1><img src={IconCheese} alt='single Cheese' /> / <img src={IconCheese} alt='double Cheese' /><img src={IconCheese} alt='double Cheese' /></h1></div>


                </div>

                <List sx={{ width: '100%' }}>
                    {menu.map(({ name, price, tag }, i) => (
                        <ListItem
                            key={i}
                            disableGutters
                            secondaryAction={
                                <IconButton aria-label="comment">
                                    {price.single}  /  {price.double}
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
