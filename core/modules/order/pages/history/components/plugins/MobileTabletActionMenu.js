import Button from '@common_button';
import Popover from '@common_popover';
import Typography from '@common_typography';

import Link from 'next/link';

import cx from 'classnames';

import EllipsisVerticalIcon from '@heroicons/react/24/solid/EllipsisVerticalIcon';

const MobileTabletActionMenu = (props) => {
    const { t, orderNumber, reOrder } = props;

    const [open, setOpen] = React.useState(false);

    const PopoverContent = () => (
        <ul className={cx('py-2')}>
            <li className={cx('text-base', 'px-4', 'py-2', 'hover:bg-neutral-100', 'cursor-pointer')}>
                <Link href={`/sales/order/view/order_id/${orderNumber}`} className={cx('hover:text-primary-700')}>
                    View
                </Link>
            </li>
            <li className={cx('text-base', 'px-4', 'py-2', 'hover:bg-neutral-100', 'cursor-pointer')}>
                <Typography className={cx('hover:text-primary-700', 'cursor-pointer')} onClick={() => reOrder(orderNumber)}>
                    {t('order:reorder')}
                </Typography>
            </li>
        </ul>
    );

    return (
        <>
            <Popover
                content={<PopoverContent />}
                open={open}
                setOpen={setOpen}
                className={cx('top-[120%]', 'p-0', 'right-0')}
                wrapperClassName={cx('self-end')}
                wrapperId="top-header__content--currency-language-changer-menu__currency-switcher"
            >
                <Button
                    onClick={() => setOpen(!open)}
                    className={cx('!p-0')}
                    variant="plain"
                    iconOnly
                    icon={<EllipsisVerticalIcon className="h-[20px] w-[24px]" />}
                    iconProps={{
                        className: cx('text-neutral-700', 'w-[20px]', 'h-[20px]', 'group-hover:text-primary-700'),
                    }}
                />
            </Popover>
        </>
    );
};

export default MobileTabletActionMenu;
