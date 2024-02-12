import CmsRenderer from '@core_modules/cms/components/cms-renderer';
import { COLORS } from '@core/theme/vars';
import Divider from '@common/Divider';
import DesktopInstall from '@core_modules/theme/components/customPWAInstall/desktop';
import dynamic from 'next/dynamic';
import Button from '@common/Button';
import cx from 'classnames';
import Typography from '@common/Typography';

const SwitcherCurrency = dynamic(() => import('@common_currency'), { ssr: false });
const SwitcherLanguage = dynamic(() => import('@common_language'), { ssr: false });

const FooterV2 = (props) => {
    const {
        data, loading, storeConfig, t,
    } = props;
    return (
        <>
            <div className="bg-neutral-100 flex flex-col justify-center items-center">
                {!loading ? <CmsRenderer content={data.cmsBlocks.items[0].content} storeConfig={storeConfig} /> : null}
                <div className="flex flex-col items-center justify-center tablet:flex-row gap-6 mb-8 mt-6">
                    <DesktopInstall
                        t={t}
                        CustomButton={(
                            <Button
                                className={cx('group', 'swift-button-install', '!bg-opacity-0', 'hover:border-primary-700')}
                                variant="outlined"
                                iconProps={{ className: cx('w-[20px]', 'text-neutral-600', 'inline-block', 'group-hover:!text-primary-700') }}
                            >
                                <Typography className="group-hover:!text-primary-700">{t('common:header:downloadApps')}</Typography>
                            </Button>
                        )}
                    />
                    <div className="flex flex-row gap-6">
                        <SwitcherCurrency
                            {...props}
                            CustomButton={(
                                <Button
                                    className={cx('group', 'swift-currency-switcher', '!bg-opacity-0', 'hover:border-primary-700')}
                                    variant="outlined"
                                />
                            )}
                        />
                        <SwitcherLanguage
                            {...props}
                            CustomButton={(
                                <Button
                                    className={cx(
                                        'group',
                                        'swift-language-switcher',
                                        '!bg-opacity-0',
                                        'hover:border-primary-700',
                                        'focus:border-primary-700',
                                    )}
                                    variant="outlined"
                                />
                            )}
                        />
                    </div>
                </div>
                <Divider />
                <style jsx global>
                    {`
                        .footer-links a {
                            font-size: 16px;
                            font-style: normal;
                            font-weight: 600;
                            line-height: 24px; /* 150% */
                            margin-bottom: 8px;
                            margin-left: 12px;
                            margin-right: 12px;
                            text-decoration: none;
                            &:hover {
                                color: ${COLORS.primary.DEFAULT};
                            }
                        }

                        .footer-links .prose {
                            width: 100%;
                            max-width: 100% !important;
                        }

                        .footer-links.payment-list {
                            background: ${COLORS.neutral[50]};
                        }

                        .footer-links.payment-list .prose > div {
                            display: flex;
                            flex-direction: row !important;
                            justify-content: center;
                            flex-wrap: wrap;
                            padding: 6px 0px;
                        }

                        .footer-links.payment-list .prose span {
                            margin: 0px 8px;
                        }

                        .footer-links.payment-list .prose img {
                            margin: 0px;
                        }

                        .footer-links .mgz-text .prose > div {
                            display: flex;
                            flex-direction: row;
                            justify-content: center;
                            flex-wrap: wrap;
                            padding: 16px;
                        }

                        .footer-links.social-media i {
                            font-size: 32px;
                        }

                        .footer-links.social-media .magezon-icon-inner {
                            height: auto;
                        }

                        @media screen and (max-width: 400px) {
                            .footer-links .mgz-text .prose > div {
                                flex-direction: column;
                            }
                        }

                    `}
                </style>
            </div>
        </>
    );
};

FooterV2.propTypes = {};

export default FooterV2;
