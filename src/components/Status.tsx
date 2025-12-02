import type { JSX } from "react";

const Status = (props): JSX.Element => {

    return (
        <>  
            {!props.isGameOver && !props.isLastGuessIncorrect && <div className="status-container playing">

            </div>}
            {props.isGameWon && <div className="status-container won">
                <h1>You Win!</h1>
                <h2>Well done!🎉</h2>
            </div>}
            {props.isGameLost && <div className="status-container lost">
                <h1>Game Over!</h1>
                <h2>You lose! Better start learning Assembly 😭</h2>
            </div>}
            {!props.isGameOver && props.isLastGuessIncorrect && <div className="status-container farewell">
                <p className="farewell-message">{props.getFarewellText()}!</p>
            </div>}
        </>
    );
}

export default Status;