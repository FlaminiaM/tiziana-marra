import './NavigationItem.scss';


function NavigationItem({text, isSelected}) {
    return (
        <li className={isSelected ? 'navigation-item navigation-item--selected' : 'navigation-item'}>
            {text}
        </li>
    )

}

export default NavigationItem;