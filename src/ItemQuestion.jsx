import { useState } from "react";



const ItemQuestion = (props) => {
    const {question, key, num} = props;
    const [showQuestion, setShowQuestion] = useState(false);
    return (
        <div className={`w-[600px] p-2 bg-natural-200 mt-4 shadow-md  ${showQuestion ? "border-t-4 border-green-600" : "border-t-0 border-black"}`}>
            <div className={`flex p-2 justify-around cursor-pointer ${showQuestion ? "text-emerald-700" : "text-slate-900"}`}
            onClick={(e)=>{setShowQuestion(!showQuestion)}}>
            <div className={` text-lg font-bold ${num < 10 ? `0${num}` : num} `}>
                    {num < 10 ? `0${num}` : num}
                    </div>
                <div className=" text-lg font-bold">
                    {question.title}
                </div>
                <div className="text-2xl "
                >{
                    showQuestion ? '-' : '+'
                }</div>
            </div>
            
            {showQuestion && <div className="p-10 italic text-zinc-600">
                {question.text}
            </div>}
        </div>
    )
}

export default ItemQuestion;

/*

return (
    <div className={`flex flex-col items-center border-4 border-red-500 p-4 ${ toggle ? "text-black bg-white" : "text-white bg-black"}`}>
      <button className='text-2xl'
       onClick={()=> {setToggle(!toggle)}} >
        {toggle ? (<i class="fa-solid fa-toggle-on"></i>): (<i class="fa-solid fa-toggle-off"></i>) }
      </button>
      <div className='border-4 border-yellow-600 w-full max-w-2xl'>
      <p className="my-4">
        Coffee, often hailed as the elixir of wakefulness, has woven itself into the fabric of daily life for millions around the globe. Derived from the beans of the Coffea plant, this beverage has transcended its origins to become a cultural phenomenon, appreciated for its rich flavor, stimulating properties, and its ability to bring people together. As the aroma of freshly brewed coffee permeates the air, it triggers a sensory journey that extends far beyond the simple act of consumption.
      </p>
      <p className="my-4">
        The journey of coffee begins with the cultivation of coffee beans in equatorial regions worldwide. These beans undergo a meticulous process of harvesting, drying, roasting, and grinding before they finally transform into the dark elixir that graces countless cups each day. The diversity in coffee varieties and brewing methods has given rise to a myriad of flavors, ranging from the robustness of a dark roast to the subtle nuances of a light, fruity blend. This variety caters to the individual preferences of coffee enthusiasts, making it a versatile and personalized experience.
      </p>

*/