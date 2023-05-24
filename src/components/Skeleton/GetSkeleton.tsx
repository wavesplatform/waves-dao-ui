import * as React from 'react';
import { SkeletonIcon } from './SkeletonIcon';
import { SkeletonText } from './SkeletonText';
import { SkeletonTable } from './SkeletonTable';
import { SkeletonBox } from './SkeletonBox';
import { SkeletonProps } from './types';

export const GetSkeleton: React.FC<SkeletonProps> = ({
    type,
    size,
    hasAnimation,
    ...rest
}) => {
    switch (type) {
        case 'icon':
            return (
                <SkeletonIcon
                    size={size}
                    hasAnimation={hasAnimation}
                    {...rest}
                />
            );
        case 'text':
            return (
                <SkeletonText
                    size={size}
                    hasAnimation={hasAnimation}
                    {...rest}
                />
            );
        case 'table':
            return (
                <SkeletonTable
                    size={size}
                    hasAnimation={hasAnimation}
                    {...rest}
                />
            );
        case 'box':
            return (
                <SkeletonBox
                    size={size}
                    hasAnimation={hasAnimation}
                    {...rest}
                />
            );
        default:
            return null;
    }
};
