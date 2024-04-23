import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import Icon from '@ant-design/icons';

type IconWrapperProps = Partial<CustomIconComponentProps> & { cat: string, size?: number };

export const IconWrapper = (props: IconWrapperProps) => (
  <Icon component={() => <svg className="icon" aria-hidden="true" style={{fontSize: props.size ?? 18}}>
    <use xlinkHref={props.cat}></use>
  </svg>} {...props} />
);
