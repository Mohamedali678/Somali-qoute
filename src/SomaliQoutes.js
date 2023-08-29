
import {React, useState} from "react"
import Header from "./components/Header"
function SomaliQuote(){

    const [index, setIndex] = useState(0)

    const xigmad = [
        "1. Maroodiga takarta saaran ma arkee kan kale tan saaran ayuu arkaa",
        "2. Beentaada hore runtaada danbay u baas baxdaa ",
        "3. Ama afeef hore lahow, ama adkeysi dambe lahow ",
        "4. Dheri ninkii ag jooga ayaa lafta kala baxa ",
        "5. Geeljire geela waa wada jiraa, waana kala jiraa ",
        "6. Abaal nin gala waa la arkay, nin gudase lama arag"
    ]

    const nextBtn = () => {
        if(index < xigmad.length - 1){
            setIndex(index + 1)
        }
    }

    const previousBtn = () => {
        if(index > 0){
            setIndex(index - 1)
        }
    }

    return <div>
        <Header />
        <p className="text-center mt-10 text-4xl"> {xigmad[index]} </p>

        <div className="flex justify-between mx-40 mt-60" >
            <button className="bg-blue-500 p-3 rounded" onClick={previousBtn}>Previous</button>
            <button className="bg-blue-500 px-6 rounded" onClick={nextBtn}>Next</button>
        </div>


    </div>
}

export default SomaliQuote