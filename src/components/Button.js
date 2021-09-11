
const Button = ({color, text, onClickEv}) => {
    // const onAddClick = (e) => {
    //     console.log(e);
    // }
    return (
        <button
        onClick={onClickEv}
        className="btn"
        style={{backgroundColor: color}}>
            {text}
        </button>

    )
}

Button.defaultProps = {
    text: 'Add',
    color: 'green '
}

export default Button