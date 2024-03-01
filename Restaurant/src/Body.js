import './Body.css';


function Body({ menulist }) {
    return (
        <div className='div1'>
            {menulist.map((CurElm) => {
                return (
                    <div className='compo'>
                        <div>

                            <h1>
                                {CurElm.id}
                            </h1>
                            <h1>{CurElm.FoodName}</h1>
                            <h1>
                                {CurElm.catagory}
                            </h1>
                            <p>
                                {CurElm.descripition}

                            </p>
                            <h1><button>Readmore</button></h1>

                        </div>





                    </div>
                )
            })}






        </div>
    )
}
export default Body;