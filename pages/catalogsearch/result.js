import { customerTokenKey } from '@config';
import Page from '@core_modules/searchresult/pages/default';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps(ctx) {
    return {
        props: {
            ...(await serverSideTranslations(ctx.locale, ['common', 'catalog', 'validate', 'login'])),
            token: (ctx.req && ctx.req.cookies && ctx.req.cookies[customerTokenKey]) ? ctx.req.cookies[customerTokenKey] : '',
        },
    };
}

export default Page;
