import './Tag.sass';

const Tag = ({title}) => {
    return (
        <a href="#" className="tag small">{title}</a>
    );
}

export default Tag;