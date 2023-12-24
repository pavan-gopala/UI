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
               <div class="wrap-circles">
  <div class="circle per-0">
    <div class="inner">0%</div>
  </div>
  <div class="circle per-25">
    <div class="inner">25%</div>
  </div>
  <div class="circle per-50">
    <div class="inner">50%</div>
  </div>
  <div class="circle per-75">
    <div class="inner">75%</div>
  </div>
  <div class="circle per-100">
    <div class="inner">100%</div>
  </div>
</div>
    </div>
  )
}
