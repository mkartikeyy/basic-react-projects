import { useState } from 'react'
import { InputBox } from './components'
import useCurrInfo from './hooks/value'

  

  function App() {
    const [amount, setAmount] = useState("")
    const [from, setFrom] = useState("inr")
    const [to, setTo] = useState("eur")
    const [cnvrtAmt, setCnvrtAmt] = useState("")

    const currInfo = useCurrInfo(from)
    const options = Object.keys(currInfo)

    const swap = () => {
      setFrom(to)
      setTo(from)
      setCnvrtAmt(amount)
      setAmount(cnvrtAmt)
    }
    const showVal= () => {
      setCnvrtAmt(amount*currInfo[to])
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            showVal();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currOptions={options}
                                onCurrChange={(curr)=>setFrom(curr)}
                                selectCurr={from}
                                onAmountChange={(amount)=>setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={cnvrtAmt}
                                currOptions={options}
                                onCurrChange={(curr)=>setTo(curr)}
                                selectCurr={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}  
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  }

export default App