import './Button.scss';


function Button({type, text}) {

    return (
       <button className={`btn btn--${type}`}>{text}</button>
    )

}

export default Button;