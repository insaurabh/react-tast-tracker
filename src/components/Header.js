import Button from './Button'
const Header = ({title}) => {
    const onAddClick = (e) => {
        console.log('Click in parent')
    }
    return (
        <header className="header">
            <h1>
                {title}
            </h1>
        <Button onClickEv={onAddClick}/>
        </header >
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

// const headingStyles = {
//     color: 'black',
//     backgroundColor: 'black'
// };

export default Header