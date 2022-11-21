import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import CategorySeclect from '../components/CategorySeclect'
import FoodModal from '../components/FoodModal'
import { getFilteredFoods } from '../api/foodAPI'



const Home = () => {
    const [search, setSearch] = useState('')
    const [foods, setFoods] = useState([]);

    const [categoryId, setcategoryId] = useState('')
    const [filteredfood, setfilteredfood] = useState([])

    const[foodDetail,setfoodDetail]=useState({})

    useEffect(() => {
        getFilteredFoods(categoryId)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setfilteredfood(data)
                }
            })
    }, [categoryId])
    const handleFilter = (filters) => {
        setcategoryId(filters)
    }

    const renderFoodModal = (e) => {
        e.preventDefault()
        setfoodDetail(filteredfood.find(item=>item._id === e.target.value))
    }

    return (
        <>
            <Navbar />
            <div className='bg-dark'>
                <img src='coverimage4.jpeg' />
            </div>
            <div className='row my-5 mx-5 px-5 py-5'>
                <div className='col-2'>
                    <CategorySeclect handleFilter={handleFilter} />
                </div>
                <div className='col-7'>
                    <div className=''>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 mb-4 border border-warning text-success" type="search" placeholder="Search food item" aria-label="Search" />
                        </form>
                    </div>
                    <div className="list-group">

                        {
                            filteredfood.map((food, i) => {
                                return <button key={i} type="button" className="list-group-item list-group-item-action"
                                    data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={renderFoodModal}
                                    value={food._id}>{food.food_name} {food.food_price}</button>
                            })

                        }
                    </div>

                </div>
                <div className='col-3 shadow-sm'>
                    Total:
                </div>
            </div>

            <FoodModal foodDetail={foodDetail} />
            <Footer />

        </>
    )
}

export default Home