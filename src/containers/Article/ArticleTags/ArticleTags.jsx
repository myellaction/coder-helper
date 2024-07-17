import './ArticleTags.sass';
import Tag from "@containers/Content/Tag/Tag.jsx";

const ArticleTags = () => {
    return (
        <div className="article-tags">
            <div className="article-tags__tag">
                <Tag title="javascript"/>
            </div>
            <div className="article-tags__tag">
                <Tag title="react"/>
            </div>
            <div className="article-tags__tag">
                <Tag title="php"/>
            </div>
            <div className="article-tags__tag">
                <Tag title="python"/>
            </div>
            <div className="article-tags__tag">
                <Tag title="Django"/>
            </div>
            <div className="article-tags__tag">
                <Tag title="javascript"/>
            </div>
            <div className="article-tags__tag">
                <Tag title="react"/>
            </div>
            <div className="article-tags__tag">
                <Tag title="php"/>
            </div>
            <div className="article-tags__tag">
                <Tag title="python"/>
            </div>
            <div className="article-tags__tag">
                <Tag title="Django"/>
            </div>
        </div>
    );
}

export default ArticleTags;