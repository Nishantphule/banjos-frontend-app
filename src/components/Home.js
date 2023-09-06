import React from 'react'
import { useNavigate } from 'react-router-dom';
import ImgMediaCard from './Card';

export default function Home() {
    const navigate = useNavigate();
    const menu = [
        { name: "Banjos", link: "banjos", img: "https://th.bing.com/th/id/R.64f19465b265b753e2b690958c420300?rik=zBqC3UEMOTtc4g&riu=http%3a%2f%2f2.bp.blogspot.com%2f_YzLWZ6F9ITs%2fTFU1FU3tobI%2fAAAAAAAADrg%2fHbx2VNYlKnI%2fs1600%2f1%2bIMG_3587.JPG&ehk=BcTEH%2fcWKTLO2BY%2fGyawQPEeVR6aQGnmu0ZfAk%2bGwE8%3d&risl=&pid=ImgRaw&r=0" },
        { name: "Burger", link: "burger", img: "https://th.bing.com/th/id/OIP.AajdcBLvDf9auB5aSvkLVAHaHa?w=212&h=212&c=7&r=0&o=5&dpr=1.1&pid=1.7" },
        { name: 'Pasta', link: "pasta", img: "https://th.bing.com/th/id/OIP.4YsTtygUBU5Ey3Oby9ApnQHaLH?w=186&h=279&c=7&r=0&o=5&dpr=1.1&pid=1.7" },
        { name: 'Sandwiches', link: "sandwiches", img: "https://th.bing.com/th/id/OIP.-vblDDjaMycxfrpHTne5VQHaE8?w=274&h=183&c=7&r=0&o=5&dpr=1.1&pid=1.7" },
        { name: 'Pizza', link: "pizza", img: "https://th.bing.com/th/id/OIP.MfhIfzrC6x6T1-szQkjtCgHaEo?w=223&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7" },
        { name: 'Momos', link: "momos", img: "https://th.bing.com/th/id/OIP._tgM80_g7K1ymkC1gpvxZAHaE8?pid=ImgDet&rs=1" },
        { name: 'Maggi', link: "maggi", img: "https://th.bing.com/th/id/OIP.TDQdcqWc89xm5QNnCmTNIwHaEw?w=311&h=200&c=7&r=0&o=5&dpr=1.1&pid=1.7" },
        { name: 'Salad', link: "salad", img: "https://th.bing.com/th/id/OIP.KQUpxubSc9mPUSdiEvKlYQHaJs?w=186&h=244&c=7&r=0&o=5&dpr=1.1&pid=1.7" },
        { name: "Rolls", link: "rolls", img: "https://spicecravings.com/wp-content/uploads/2020/12/Paneer-kathi-Roll-Featured-1.jpg" },
        { name: 'Tasty Bites', link: "tastyBites", img: "https://beat.com.au/wp-content/uploads/2019/07/falafel.jpg" },
        { name: "Fries", link: "fries", img: "https://th.bing.com/th/id/OIP.bjwIfbyk1X9FvFq6IMgHAAHaFj?pid=ImgDet&rs=1" },
        { name: 'Beverages', link: "beverages", img: "https://th.bing.com/th/id/OIP.ug0ehM0bLzedc-bl4XV4ZAHaLH?pid=ImgDet&rs=1" },
        { name: "Deserts", link: "deserts", img: "https://i.pinimg.com/originals/d6/b8/5b/d6b85b43b0c2242679f02ffbf1268f2f.jpg" }
    ]

    return (
        <div className='menuContainer'>
            {menu.map(({ name, link, img }, i) => {
                return <ImgMediaCard
                    onClick={() => navigate(`/${link}`)}
                    name={name}
                    key={i}
                    img={img} />
            })}
        </div>
    )
}
