import './SectionTitle.scss';


function SectionTitle({type, text}) {

    return (
        <h2 className={`section-title section-title--${type}`}>{text}</h2>
    )

}

export default SectionTitle;