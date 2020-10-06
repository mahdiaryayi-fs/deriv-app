import PropTypes from 'prop-types';
import React from 'react';
import { Swipeable } from 'react-swipeable';
import classNames from 'classnames';
import Card from './carousel-card.jsx';
import Nav from './carousel-nav.jsx';
import Icon from '../icon';
import { useInterval } from '../../hooks';

const Carousel = ({
    bullet_color,
    className,
    handleSelect,
    initial_index,
    list,
    bullet_position,
    nav_position,
    show_bullet,
    show_nav,
    autoplay_time,
    width,
}) => {
    const [active_index, setActiveIndex] = React.useState(initial_index);

    const handleNextClick = () => {
        const next_idx = active_index + 1;
        const is_reached_end = next_idx === list.length;

        if (!is_reached_end) {
            setActiveIndex(next_idx);
        } else {
            setActiveIndex(0);
        }
    };

    const handlePrevClick = () => {
        const prev_idx = active_index - 1;

        if (prev_idx > -1) {
            setActiveIndex(prev_idx);
        } else {
            setActiveIndex(list.length - 1);
        }
    };

    if (autoplay_time) {
        useInterval(handleNextClick, autoplay_time);
    }

    return (
        <Swipeable onSwipedLeft={handleNextClick} onSwipedRight={handlePrevClick}>
            <div className={classNames('carousel', className)}>
                {list.length > 1 && (
                    <Nav
                        active_index={active_index}
                        className='carousel__nav--upper'
                        handleNextClick={handleNextClick}
                        handlePrevClick={handlePrevClick}
                        handleNavigationClick={setActiveIndex}
                        show_bullet={show_bullet && bullet_position === 'top'}
                        show_nav={show_nav && nav_position === 'top'}
                        list={list}
                    />
                )}
                <div className='carousel__container'>
                    {nav_position === 'middle' && (
                        <span className='carousel__icon' onClick={handlePrevClick}>
                            <Icon icon='IcChevronLeft' size='24' />
                        </span>
                    )}

                    <div
                        className='carousel__box'
                        style={{
                            width: `${width}px`,
                        }}
                    >
                        <div
                            className='carousel__wrapper'
                            style={{ transform: `translate3d(-${width * active_index}px, 0, 0)` }}
                        >
                            {list.map((type, idx) => (
                                <Card key={idx} onClick={handleSelect} width={width}>
                                    {list[idx]}
                                </Card>
                            ))}
                        </div>
                    </div>

                    {nav_position === 'middle' && (
                        <span className='carousel__icon' onClick={handleNextClick}>
                            <Icon icon='IcChevronRight' size='24' />
                        </span>
                    )}
                </div>
                {list.length > 1 && (
                    <Nav
                        active_index={active_index}
                        bullet_color={bullet_color}
                        className='carousel__nav--lower'
                        handleNextClick={handleNextClick}
                        handlePrevClick={handlePrevClick}
                        handleNavigationClick={setActiveIndex}
                        show_bullet={show_bullet && bullet_position === 'bottom'}
                        show_nav={show_nav && nav_position === 'bottom'}
                        list={list}
                    />
                )}
            </div>
        </Swipeable>
    );
};

Carousel.defaultProps = {
    initial_index: 0,
    bullet_color: 'var(--text-prominent)',
    nav_position: 'bottom',
    bullet_position: 'bottom',
    show_bullet: true,
    show_nav: true,
    width: 400,
};
Carousel.propTypes = {
    className: PropTypes.string,
    handleSelect: PropTypes.func,
    bullet_color: PropTypes.string,
    list: PropTypes.array,
    nav_position: PropTypes.oneOf(['top', 'middle', 'bottom']),
    show_nav: PropTypes.bool,
    bullet_position: PropTypes.oneOf(['top', 'bottom']),
    show_bullet: PropTypes.bool,
    autoplay_time: PropTypes.number,
    width: PropTypes.number,
};

export default Carousel;
