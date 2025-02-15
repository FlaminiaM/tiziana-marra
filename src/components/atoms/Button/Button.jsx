import './Button.scss';


function Button({type, text, clickHandler}) {

    return (
       <button className={`btn btn--${type}`} onClick={clickHandler}>{text}</button>
    )

}

export default Button;