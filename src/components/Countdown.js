import React, { useEffect, useState } from 'react';
import CountDownTimer from './CountDownTimer';
import './Countdown.css';

export default function Countdown() {
	const [timerDays, SetTimerDays] = useState();
	const [timerHours, SetTimerHours] = useState();
	const [timerMinutes, SetTimerMinutes] = useState();
	const [timerSeconds, SetTimerSeconds] = useState();
	
	let countDownDate;
	let now;
	let distance;
	const startTimer = () => {
		const countDownDate = new Date("Dec 17, 2022 17:45:00").getTime();

		let interval = setInterval(() => {
				const now = new Date().getTime();
				const distance = countDownDate - now;
				const days = Math.floor(distance / (24 * 60 * 60 * 1000));
				const hours = Math.floor(
					(distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
				);
				const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
				const seconds = Math.floor((distance % (60 * 1000)) / (1000));
				const daystimer = days < 10 ? '0' + days : days
				const hourstimer = hours < 10 ? '0' + hours : hours
				const minutestimer = minutes < 10 ? '0' + minutes : minutes
				const secondstimer = seconds < 10 ? '0' + seconds : seconds
				if (distance < 0){
					clearInterval(interval.current);
				} else {
					SetTimerDays(daystimer);
					SetTimerHours(hourstimer);
					SetTimerMinutes(minutestimer);
					SetTimerSeconds(secondstimer);
				}
			});
	}
	useEffect(() => {
		startTimer();
	});
	countDownDate = new Date("Dec 17, 2022 17:45:00").getTime();
	now = new Date().getTime();
	distance = countDownDate - now;
	return (
		<>
			{/* <div className='now'>Now</div> */}
			{/* <a className='github-repo' href='https://amiralariska.github.io/my-react-app/' target='_blank' rel='noopener noreferrer'>Please check this github repo</a> */}
			{distance < 0 ? <a className='github-pages' href='https://amiralariska.github.io/my-react-app-without-cra-web/' target='_blank' rel='noopener noreferrer'>View in browser</a> : <CountDownTimer timerDays={timerDays} timerHours={timerHours} timerMinutes={timerMinutes} timerSeconds={timerSeconds} />}
		</>
	);
}