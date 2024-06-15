import React,{useState} from 'react'

const FAQ = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [q2,setq2]=useState(false)
    const [q3,setq3]=useState(false)
    const [q4,setq4]=useState(false)
    const [q5,setq5]=useState(false)
    const [q6,setq6]=useState(false)

    const [q7,setq7]=useState(false)
    const [q8,setq8]=useState(false)

    const [q9,setq9]=useState(false)
    const [q10,setq10]=useState(false)

    const toggleAnswer = () => {
      setIsOpen(!isOpen);
    };


    const toggleAnswer2=()=>{
        setq2(!q2)
    }
    
    const toggleAnswer3=()=>{
        setq3(!q3)
    }
    
    const toggleAnswer4=()=>{
        setq4(!q4)
    }
    
    const toggleAnswer5=()=>{
        setq5(!q5)
    }
    
    const toggleAnswer6=()=>{
        setq6(!q6)
    }
    
    const toggleAnswer7=()=>{
        setq7(!q7)
    }
    
    const toggleAnswer8=()=>{
        setq8(!q8)
    }
    
    const toggleAnswer9=()=>{
        setq9(!q9)
    }
    const toggleAnswer10=()=>{
        setq10(!q10)
    }

  return (
    <div>
        <div>
        <h1 className='text-center text-2xl font-bold'>Frequently Asked Questions:</h1>
        <div className="flex justify-center mb-4">
          <svg
            width="300"
            height="20"
            viewBox="0 0 100 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 15 Q 50 0, 95 15"
              stroke="orange"
              strokeWidth="5"
              fill="none"
            />
          </svg>
        
        
        
        
        </div>

           {/* FAQ   questions */}
           <div className='sm:text-xl mx-14 md:mx-[90px]'>

             {/* Q1 */}
             <div>
      <div onClick={toggleAnswer} className="py-2 flex justify-between cursor-pointer">
        <div>
          <h1 className={`mt-3 ${isOpen ? 'text-yellow-300' : 'text-white'}`}>
           
            What is the Entrepreneurship Decision Revolution Seminar about?
          </h1>
        </div>
        <div>
          <p className="text-yellow-500 text-5xl">{isOpen ? '-' : '+'}</p>
        </div>
      </div>
      {isOpen && (
        <div>
         <div className={`overflow-hidden transition-max-height duration-900 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
            <p className='text-xl'>
            This seminar is designed to equip entrepreneurs with powerful decision-making strategies tailored for business success. Participants will learn how to make informed choices, overcome common challenges, and drive significant growth in their ventures.
            </p>
           
          </div>
        </div>
      )}
    </div>
             <hr className='text-gray'/>
            {/* Q2 */}
            <div>
      <div onClick={toggleAnswer2} className="py-2 flex justify-between cursor-pointer">
        <div>
          <h1 className={`mt-3 ${q2 ? 'text-yellow-300' : 'text-white'}`}>
           
            What is the Entrepreneurship Decision Revolution Seminar about?
          </h1>
        </div>
        <div>
          <p className="text-yellow-500 text-5xl">{q2 ? '-' : '+'}</p>
        </div>
      </div>
      {q2 && (
        <div>
         <div className={`overflow-hidden transition-max-height duration-900 ease-in-out ${q2 ? 'max-h-96' : 'max-h-0'}`}>
            <p className='text-xl'>
            This seminar is designed to equip entrepreneurs with powerful decision-making strategies tailored for business success. Participants will learn how to make informed choices, overcome common challenges, and drive significant growth in their ventures.
            </p>
           
          </div>
        </div>
      )}
    </div>
             <hr className='text-gray'/>
          {/* Q3 */}
          <div>
      <div onClick={toggleAnswer3} className="py-2 flex justify-between cursor-pointer">
        <div>
          <h1 className={`mt-3 ${q3 ? 'text-yellow-300' : 'text-white'}`}>
           
            What is the Entrepreneurship Decision Revolution Seminar about?
          </h1>
        </div>
        <div>
          <p className="text-yellow-500 text-5xl">{q2 ? '-' : '+'}</p>
        </div>
      </div>
      {q3 && (
        <div>
         <div className={`overflow-hidden transition-max-height duration-900 ease-in-out ${q3? 'max-h-96' : 'max-h-0'}`}>
            <p className='text-xl'>
            This seminar is designed to equip entrepreneurs with powerful decision-making strategies tailored for business success. Participants will learn how to make informed choices, overcome common challenges, and drive significant growth in their ventures.
            </p>
           
          </div>
        </div>
      )}
    </div>
             <hr className='text-gray'/>
          {/* Q4 */}
          <div>
      <div onClick={toggleAnswer4} className="py-2 flex justify-between cursor-pointer">
        <div>
          <h1 className={`mt-3 ${q4 ? 'text-yellow-300' : 'text-white'}`}>
           
            What is the Entrepreneurship Decision Revolution Seminar about?
          </h1>
        </div>
        <div>
          <p className="text-yellow-500 text-5xl">{q4 ? '-' : '+'}</p>
        </div>
      </div>
      {q4 && (
        <div>
         <div className={`overflow-hidden transition-max-height duration-900 ease-in-out ${q4 ? 'max-h-96' : 'max-h-0'}`}>
            <p className='text-xl'>
            This seminar is designed to equip entrepreneurs with powerful decision-making strategies tailored for business success. Participants will learn how to make informed choices, overcome common challenges, and drive significant growth in their ventures.
            </p>
           
          </div>
        </div>
      )}
    </div>
             <hr className='text-gray'/>
               {/* Q5 */}

               <div>
      <div onClick={toggleAnswer5} className="py-2 flex justify-between cursor-pointer">
        <div>
          <h1 className={`mt-3 ${q5 ? 'text-yellow-300' : 'text-white'}`}>
           
            What is the Entrepreneurship Decision Revolution Seminar about?
          </h1>
        </div>
        <div>
          <p className="text-yellow-500 text-5xl">{q5 ? '-' : '+'}</p>
        </div>
      </div>
      {q5 && (
        <div>
         <div className={`overflow-hidden transition-max-height duration-900 ease-in-out ${q5 ? 'max-h-96' : 'max-h-0'}`}>
            <p className='text-xl'>
            This seminar is designed to equip entrepreneurs with powerful decision-making strategies tailored for business success. Participants will learn how to make informed choices, overcome common challenges, and drive significant growth in their ventures.
            </p>
           
          </div>
        </div>
      )}
    </div>
             <hr className='text-gray'/>
                 {/* Q6 */}
                 <div>
      <div onClick={toggleAnswer6} className="py-2 flex justify-between cursor-pointer">
        <div>
          <h1 className={`mt-3 ${q6 ? 'text-yellow-300' : 'text-white'}`}>
           
            What is the Entrepreneurship Decision Revolution Seminar about?
          </h1>
        </div>
        <div>
          <p className="text-yellow-500 text-5xl">{q6 ? '-' : '+'}</p>
        </div>
      </div>
      {q6 && (
        <div>
         <div className={`overflow-hidden transition-max-height duration-900 ease-in-out ${q6 ? 'max-h-96' : 'max-h-0'}`}>
            <p className='text-xl'>
            This seminar is designed to equip entrepreneurs with powerful decision-making strategies tailored for business success. Participants will learn how to make informed choices, overcome common challenges, and drive significant growth in their ventures.
            </p>
           
          </div>
        </div>
      )}
    </div>
             <hr className='text-gray'/>


               {/* Q7 */}
               <div>
      <div onClick={toggleAnswer7} className="py-2 flex justify-between cursor-pointer">
        <div>
          <h1 className={`mt-3 ${q7 ? 'text-yellow-300' : 'text-white'}`}>
           
            What is the Entrepreneurship Decision Revolution Seminar about?
          </h1>
        </div>
        <div>
          <p className="text-yellow-500 text-5xl">{q7 ? '-' : '+'}</p>
        </div>
      </div>
      {q7 && (
        <div>
         <div className={`overflow-hidden transition-max-height duration-900 ease-in-out ${q7 ? 'max-h-96' : 'max-h-0'}`}>
            <p className='text-xl'>
            This seminar is designed to equip entrepreneurs with powerful decision-making strategies tailored for business success. Participants will learn how to make informed choices, overcome common challenges, and drive significant growth in their ventures.
            </p>
           
          </div>
        </div>
      )}
    </div>
             <hr className='text-gray'/>
                  {/* Q8 */}
                  <div>
      <div onClick={toggleAnswer8} className="py-2 flex justify-between cursor-pointer">
        <div>
          <h1 className={`mt-3 ${q8 ? 'text-yellow-300' : 'text-white'}`}>
           
            What is the Entrepreneurship Decision Revolution Seminar about?
          </h1>
        </div>
        <div>
          <p className="text-yellow-500 text-5xl">{q2 ? '-' : '+'}</p>
        </div>
      </div>
      {q8 && (
        <div>
         <div className={`overflow-hidden transition-max-height duration-900 ease-in-out ${q8 ? 'max-h-96' : 'max-h-0'}`}>
            <p className='text-xl'>
            This seminar is designed to equip entrepreneurs with powerful decision-making strategies tailored for business success. Participants will learn how to make informed choices, overcome common challenges, and drive significant growth in their ventures.
            </p>
           
          </div>
        </div>
      )}
    </div>
             <hr className='text-gray'/>
               {/* Q9 */}

               <div>
      <div onClick={toggleAnswer9} className="py-2 flex justify-between cursor-pointer">
        <div>
          <h1 className={`mt-3 ${q9 ? 'text-yellow-300' : 'text-white'}`}>
           
            What is the Entrepreneurship Decision Revolution Seminar about?
          </h1>
        </div>
        <div>
          <p className="text-yellow-500 text-5xl">{q9 ? '-' : '+'}</p>
        </div>
      </div>
      {q9 && (
        <div>
         <div className={`overflow-hidden transition-max-height duration-900 ease-in-out ${q9 ? 'max-h-96' : 'max-h-0'}`}>
            <p className='text-xl'>
            This seminar is designed to equip entrepreneurs with powerful decision-making strategies tailored for business success. Participants will learn how to make informed choices, overcome common challenges, and drive significant growth in their ventures.
            </p>
           
          </div>
        </div>
      )}
    </div>
             <hr className='text-gray'/>

                      {/* Q10 */}
                      <div>
      <div onClick={toggleAnswer10} className="py-2 flex justify-between cursor-pointer">
        <div>
          <h1 className={`mt-3 ${q10 ? 'text-yellow-300' : 'text-white'}`}>
           
            What is the Entrepreneurship Decision Revolution Seminar about?
          </h1>
        </div>
        <div>
          <p className="text-yellow-500 text-5xl">{q10 ? '-' : '+'}</p>
        </div>
      </div>
      {10 && (
        <div>
         <div className={`overflow-hidden transition-max-height duration-900 ease-in-out ${q10 ? 'max-h-96' : 'max-h-0'}`}>
            <p className='text-xl'>
            This seminar is designed to equip entrepreneurs with powerful decision-making strategies tailored for business success. Participants will learn how to make informed choices, overcome common challenges, and drive significant growth in their ventures.
            </p>
           
          </div>
        </div>
      )}
    </div>
                <hr className='text-gray'/>

             </div>

        </div>
       
      
    </div>
  )
}

export default FAQ
