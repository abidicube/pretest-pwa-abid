import { getCmsBlocks } from '@core_modules/cms/services/graphql';
import Skeleton from '@common_skeleton';
import CmsRenderer from '@core_modules/cms/components/cms-renderer';

const CustomCmsBlock = () => {
    const { data: dataCmsCustom, loading: loadingCmsCustom } = getCmsBlocks({ identifiers: 'pretest-block' });
    const cmsCustom = dataCmsCustom?.cmsBlocks?.items[0].content;

    return (
        !cmsCustom && loadingCmsCustom ? (
            <>
                <Skeleton width="100%" height={20} className="mt-[5px]" />
                <Skeleton width="100%" height={20} className="mt-[5px]" />
                <Skeleton width="100%" height={20} className="mt-[5px]" />
            </>
        ) : (
            <div className="cms-bank-credit-info mt-[30px]">
                <CmsRenderer content={cmsCustom} />
            </div>
        )
    );
};

export default CustomCmsBlock;
