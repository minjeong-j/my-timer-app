import React, { useState, useEffect } from "react";

function Timer() {
	const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
    	console.log("componentDidMount와 동일한 역할!");
    	
        const interval = setInterval(() => {
        	setSeconds((prev) => prev +1);	//1초마다 seconds 상태 업데이트
        }, 1000);
        
        return () => clearInterval(interval);	//componentWillUnmount와 동일한 역할
    }, []);	//빈 배열로 의존성 없음 => 마운트/언마운트 시 실행
    
    return <p>Seconds: {seconds}</p>;
}

export default Timer;