import * as React from 'react';
import classNames from 'classnames';
import Markdown from 'markdown-to-jsx';

import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import Action from '../../atoms/Action';
import ImageBlock from '../../molecules/ImageBlock';

export default function FeaturedPeopleSection(props) {
    const { type, elementId, colors, variant, title, subtitle, actions = [], people = [], styles = {}, 'data-sb-field-path': fieldPath } = props;
    return (
        <Section type={type} elementId={elementId} colors={colors} styles={styles.self} data-sb-field-path={fieldPath}>
            {title && (
                <h2 className={classNames(styles.title ? mapStyles(styles.title) : null)} data-sb-field-path=".title">
                    {title}
                </h2>
            )}
            {subtitle && (
                <p
                    className={classNames('text-lg', 'sm:text-xl', styles.subtitle ? mapStyles(styles.subtitle) : null, {
                        'mt-6': title
                    })}
                    data-sb-field-path=".subtitle"
                >
                    {subtitle}
                </p>
            )}
            <FeaturedPeopleActions actions={actions} styles={styles.actions} hasTopMargin={!!(title || subtitle)} />
            <FeaturedPeopleVariants variant={variant} people={people} hasTopMargin={!!(title || subtitle || actions.length > 0)} />
        </Section>
    );
}

function FeaturedPeopleActions(props) {
    const { actions = [], styles = {}, hasTopMargin } = props;
    if (actions.length === 0) {
        return null;
    }
    return (
        <div className={classNames('overflow-x-hidden', { 'mt-8': hasTopMargin })}>
            <div className={classNames('flex', 'flex-wrap', 'items-center', '-mx-2', mapStyles(styles))} data-sb-field-path=".actions">
                {actions.map((action, index) => (
                    <Action key={index} {...action} className="mb-3 mx-2 lg:whitespace-nowrap" data-sb-field-path={`.${index}`} />
                ))}
            </div>
        </div>
    );
}

function FeaturedPeopleVariants(props) {
    const { variant = 'variant-a', ...rest } = props;
    switch (variant) {
        case 'variant-a':
            return <PeopleVariantA {...rest} />;
        case 'variant-b':
            return <PeopleVariantB {...rest} />;
        case 'variant-c':
            return <PeopleVariantC {...rest} />;
    }
    return null;
}

function PeopleVariantA(props) {
    const { people = [], hasTopMargin } = props;
    if (people.length === 0) {
        return null;
    }
    return (
        <div className={classNames('grid', 'gap-x-8', 'gap-y-10', 'sm:grid-cols-2', 'lg:grid-cols-4', { 'mt-12': hasTopMargin })} data-sb-field-path=".people">
            {people.map((person, index) => (
                <article key={index} data-sb-field-path={`.${index}`}>
                    {person.image && (
                        <div className="h-0 w-full pt-1/1 relative mb-4">
                            <ImageBlock {...person.image} className="absolute left-0 h-full object-cover top-0 w-full" data-sb-field-path=".image" />
                        </div>
                    )}
                    {(person.firstName || person.lastName) && (
                        <h3 className="text-2xl">
                            {person.firstName && <span data-sb-field-path=".firstName">{person.firstName}</span>}{' '}
                            {person.lastName && <span data-sb-field-path=".lastName">{person.lastName}</span>}
                        </h3>
                    )}
                    {person.role && (
                        <p className={classNames({ 'mt-1': person.firstName || person.lastName })} data-sb-field-path=".role">
                            {person.role}
                        </p>
                    )}
                    {person.bio && (
                        {/*<Markdown
                            options={{ forceBlock: true, forceWrapper: true }}
                            className={classNames({ 'mt-4': person.firstName || person.lastName || person.role })}
                            data-sb-field-path=".bio"
                        >
                            {person.bio}
                        </Markdown>}
                        /**
                         * <p>
                         *      <Social type="social" altText="Mail" label="Mail" url={person.bio} icon="mail"
                         *          {...link} data-sb-field-path={`.${index}`}
                         * />
                           </p>
                         */
                    )}
                </article>
            ))}
        </div>
    );
}

function PeopleVariantB(props) {
    const { people = [], hasTopMargin } = props;
    if (people.length === 0) {
        return null;
    }
    return (
        <div className={classNames('grid', 'gap-x-8', 'gap-y-10', 'lg:grid-cols-2', 'sm:gap-y-14', { 'mt-12': hasTopMargin })} data-sb-field-path=".people">
            {people.map((person, index) => (
                <article key={index} className="sm:flex" data-sb-field-path={`.${index}`}>
                    {person.image && (
                        <div className="w-full mb-4 sm:flex-shrink-0 sm:h-full sm:w-1/3 sm:mb-0 sm:mr-6">
                            <div className="block h-0 w-full pt-1/1 relative">
                                <ImageBlock {...person.image} className="absolute left-0 h-full object-cover top-0 w-full" data-sb-field-path=".image" />
                            </div>
                        </div>
                    )}
                    <div className="sm:flex-grow">
                        {(person.firstName || person.lastName) && (
                            <h3 className="text-2xl">
                                {person.firstName && <span data-sb-field-path=".firstName">{person.firstName}</span>}{' '}
                                {person.lastName && <span data-sb-field-path=".lastName">{person.lastName}</span>}
                            </h3>
                        )}
                        {person.role && (
                            <p className={classNames({ 'mt-1': person.firstName || person.lastName })} data-sb-field-path=".role">
                                {person.role}
                            </p>
                        )}
                        {person.bio && (
                            <Markdown
                                options={{ forceBlock: true, forceWrapper: true }}
                                className={classNames({ 'mt-4': person.firstName || person.lastName || person.role })}
                                data-sb-field-path=".bio"
                            >
                                {person.bio}
                            </Markdown>
                        )}
                    </div>
                </article>
            ))}
            {/**
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image="/static/images/cards/paella.jpg"
                        alt="Paella dish"
                    />

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>

                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>

                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>

                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                large plate and set aside, leaving chicken and chorizo in the pan. Add
                                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
             */}
        </div>
    );
}

function PeopleVariantC(props) {
    const { people = [], hasTopMargin } = props;
    if (people.length === 0) {
        return null;
    }
    const middleIndex = Math.floor(people.length / 2);
    const peopleLeft = people.slice(0, middleIndex);
    const peopleRight = people.slice(middleIndex, people.length);
    return (
        <div className={classNames('grid', 'gap-x-14', 'gap-y-12', 'sm:grid-cols-2', { 'mt-12 sm:mt-20': hasTopMargin })} data-sb-field-path=".people">
            <PeopleColumnVariantC people={peopleLeft} className="sm:mt-32" />
            <PeopleColumnVariantC people={peopleRight} fieldPathIndex={middleIndex} />
        </div>
    );
}

function PeopleColumnVariantC(props) {
    const { people = [], fieldPathIndex = 0, className } = props;
    if (people.length === 0) {
        return null;
    }
    return (
        <div className={classNames('space-y-12', 'sm:space-y-16', className)}>
            {people.map((person, index, arr) => (
                <article key={index} data-sb-field-path={`.${fieldPathIndex + index}`}>
                    {person.image && (
                        <div className="mb-4">
                            <ImageBlock {...person.image} className="w-full" data-sb-field-path=".image" />
                        </div>
                    )}
                    <div>
                        {(person.firstName || person.lastName) && (
                            <h3 className="text-xl">
                                {person.firstName && <span data-sb-field-path=".firstName">{person.firstName}</span>}{' '}
                                {person.lastName && <span data-sb-field-path=".lastName">{person.lastName}</span>}
                            </h3>
                        )}
                        {person.role && (
                            <p className={classNames({ 'mt-1': person.firstName || person.lastName })} data-sb-field-path=".role">
                                {person.role}
                            </p>
                        )}
                        {person.bio && (
                            <Markdown
                                options={{ forceBlock: true, forceWrapper: true }}
                                className={classNames('sb-markdown', { 'mt-4': person.firstName || person.lastName || person.role })}
                                data-sb-field-path=".bio"
                            >
                                {person.bio}
                            </Markdown>
                        )}
                    </div>
                </article>
            ))}
        </div>
    );
}
