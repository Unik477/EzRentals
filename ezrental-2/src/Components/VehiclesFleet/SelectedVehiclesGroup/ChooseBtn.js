import { useNavigate } from "react-router-dom"

 export default function ChooseBtn(props){
    
   

    const navigate= useNavigate()
    function checkCar(){
       
            if(!localStorage.getItem('user')){
             navigate("/Login")
             alert("login to continue")

            }else{
                if(props.car!="Choose A Car"){
                    navigate("/Checkout")
                }
            }
         
       
    }

    return(
        <button onClick={checkCar} className="btn btn-light btn-lg mt-5 checkbtn"    > {props.car}</button>
    )
}