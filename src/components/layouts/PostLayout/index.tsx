import * as React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import classNames from 'classnames';

import { getBaseLayoutComponent } from '../../../utils/base-layout';
import { getComponent } from '../../components-registry';
import getPageUrlPath from '../../../utils/get-page-url-path';
import Link from '../../atoms/Link';
import { DisplayModeContext } from '../../../context/displayMode';
import { getMatchingColor } from '../../../utils/themeColorMapper';
import { I18NContext } from '../../../context/i18Ncontext';

export default function PostLayout(props) {
    const { page, site } = props;
    const BaseLayout = getBaseLayoutComponent(page.baseLayout, site.baseLayout);
    const { title, titleFr, date, author, category, colors = 'colors-d', markdown_content, markdown_content_fr, media, bottomSections = [] } = page;
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('MMMM D, YYYY');
    const { displayMode } = React.useContext(DisplayModeContext);
    const { locale } = React.useContext(I18NContext);
    const getTitle = () => locale === 'fr' && titleFr ? titleFr : title;
    const getMarkdownFieldPath = () => locale === 'fr' && markdown_content_fr ? markdown_content_fr : markdown_content;
    const getTitleFieldPath = () => locale === 'fr' && titleFr ? 'titleFr' : 'title';
    const markdownAnnotation = () => locale === 'fr' && markdown_content_fr ? 'markdown_content_fr' : 'markdown_content';

    return (
        <BaseLayout page={page} site={site}>
            <main id="main" className="sb-layout sb-post-layout">
                <article className={classNames(getMatchingColor(displayMode, colors), 'px-4', 'py-14', 'lg:py-20')}>
                    <div className="max-w-7xl mx-auto">
                        {media && (
                            <div className="w-full mb-8 sm:mb-12">
                                <PostMedia media={media} />
                            </div>
                        )}
                        <header className="max-w-5xl mx-auto mb-12 text-left">
                            {title && <h1 data-sb-field-path={getTitleFieldPath()}>{getTitle()}</h1>}
                            <div className="text-lg mt-6">
                                <span>
                                    <time dateTime={dateTimeAttr} data-sb-field-path="date">
                                        {formattedDate}
                                    </time>
                                </span>
                                <PostAttribution author={author} category={category} />
                            </div>
                        </header>
                        {markdown_content && (
                            <Markdown options={{ forceBlock: true }} className="sb-markdown max-w-screen-md mx-auto" data-sb-field-path={markdownAnnotation()}>
                                {getMarkdownFieldPath()}
                            </Markdown>
                        )}
                    </div>
                </article>
                {bottomSections.length > 0 && (
                    <div data-sb-field-path="bottomSections">
                        {bottomSections.map((section, index) => {
                            const Component = getComponent(section.type);
                            if (!Component) {
                                throw new Error(`no component matching the post section's type: ${section.type}`);
                            }
                            return <Component key={index} {...section} data-sb-field-path={`bottomSections.${index}`} />;
                        })}
                    </div>
                )}
            </main>
        </BaseLayout>
    );
}

function PostMedia({ media }) {
    const mediaType = media.type;
    if (!mediaType) {
        throw new Error(`post media does not have the 'type' property`);
    }
    const Media = getComponent(mediaType);
    if (!Media) {
        throw new Error(`no component matching the post media type: ${mediaType}`);
    }
    return <Media {...media} className={classNames('md:w-6/12', 'sm:w-full', 'mx-auto')} data-sb-field-path="media" />;
}

function PostAttribution(props) {
    if (!props.author && !props.category) {
        return null;
    }
    const author = props.author ? postAuthor(props.author) : null;
    const category = props.category ? postCategory(props.category) : null;
    return (
        <span>
            {author && (
                <>
                    {' | '}
                    {author}
                </>
            )}
            {category && (
                <>
                    {' | '}
                    {category}
                </>
            )}
        </span>
    );
}

function postAuthor(author) {
    const children = (
        <>
            {author.firstName && <span data-sb-field-path=".firstName">{author.firstName}</span>}{' '}
            {author.lastName && <span data-sb-field-path=".lastName">{author.lastName}</span>}
        </>
    );
    return author.slug ? (
        <Link data-sb-field-path="author" href={`/blog/author/${author.slug}`}>
            {children}
        </Link>
    ) : (
        <span data-sb-field-path="author">{children}</span>
    );
}

function postCategory(category) {
    return (
        <Link data-sb-field-path="category" href={getPageUrlPath(category)}>
            {category.title}
        </Link>
    );
}
