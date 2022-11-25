import React, { Fragment } from 'react'
import './CountDownTimer.css'

export default function CountDownTimer({ timerDays, timerHours, timerMinutes, timerSeconds }) {
    return (
        <Fragment>
            <section className="timer-container">
                <section className="timer">
                    <div className="countdown-timer">
                        <section className="timer-numb days">
                            <p className="numb">{timerDays}</p>
                        </section>
                        <span className="clone">:</span>
                        <section className="timer-numb hours">
                            <p className="numb">{timerHours}</p>
                        </section>
                        <span className="clone">:</span>
                        <section className="timer-numb minutes">
                            <p className="numb">{timerMinutes}</p>
                        </section>
                        <span className="clone">:</span>
                        <section className="timer-numb seconds">
                            <p className="numb">{timerSeconds}</p>
                        </section>
                    </div>
                </section>
            </section>
        </Fragment>
    )
}

CountDownTimer.defaultProps = {
    timerDays: '--',
    timerHours: '--',
    timerMinutes: '--',
    timerSeconds: '--',
}