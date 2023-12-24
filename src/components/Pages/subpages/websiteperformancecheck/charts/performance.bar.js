import React from 'react'
import '../../../../../styles/performancebar.css';
import { useSelector } from 'react-redux';
export const PerformanceBar = () => {
  const  data = useSelector((state)=>state.mailvalidation?.validationResult?.data?state.mailvalidation.validationResult.data : '')
  const domain = useSelector((state)=>state.mailvalidation?.email)
  const progressData = data.necessaryData.scores;
  console.log(progressData)
  return (
    <div>
             {Object.entries(progressData).map(([key, value])=>{
              return (
                    <div key={key}>
                    <p>{`Key: ${key}, Value: ${value}`}</p>
                  </div>
             )}            
             )}
             <p style={{color:'yellow'}}>Performance Bar</p>
    </div>
  )
}
