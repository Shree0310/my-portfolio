export interface BaseCardProps {
    className?: string,
    childrem?: React.ReactNode
}

export interface AnimatedCardProps extends BaseCardProps {
    title?: string,
    description?: string,
    buttonLabel?: string,
    blurOnHover?: boolean
    items?: {
        icon?: React.ReactNode,
        title?: string,
        subtitle?: string,
        avatar?: string
    }[];
}

export interface BeamCardProps extends BaseCardProps {
    avatars?: string[],
    buttonLabel?: string,
    title?: string,
    description?: string,
    animationDuration?: number
    beamColors?: {
        start?: string,
        mid1?: string,
        mid2?: string,
        mid3?: string,
        end?: string
    }
}

export interface MenuCardProps extends BaseCardProps {
  items?: {
    icon?: React.ReactNode;
    title: string;
    description: string;
    onClick?: () => void;
  }[];
}
 

export interface IDCardProps extends BaseCardProps {
    title?: string;
    subtitle?: string;
}

export interface SecondaryBeamCardProps extends BaseCardProps {
    title?: string,
    description?: string,
    buttonLabel?: string,
    beamColors?: {
        start: string,
        mid1?: string,
        mid2?: string,
        mid3?: string,
        end: string
    }
}

export interface ConcentricCirclesProps {
  className?: string;
  circleCount?: number;
  baseOpacity?: number;
}