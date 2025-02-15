import './NavigationItem.scss';


function NavigationItem({text, id, activeId, navClickHandler}) {
    return (
        <li scrolltoel={id} className={id === activeId ? 'navigation-item navigation-item--selected' : 'navigation-item'} onClick={(e) => navClickHandler(e)}>
          {text}
        </li>
    )

}

export default NavigationItem;