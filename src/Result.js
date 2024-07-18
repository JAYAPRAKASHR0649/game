import React from 'react'

const Result = ({secrectNumber,term}) => {
        let result;
        if(term){
        if(term>secrectNumber){
            result = "Higher";
        }else if(term<secrectNumber){
            result="Lower";
        }else if(term==secrectNumber){
            result="Yipeeee! Correct";
        }
        else{
            result="Enter a valid input";
        }
        }
  return (
    <div>
      <h3>You Guessed {result}</h3>
    </div>
  )
}

export default Result
