import { styled } from './../theme';

export const StyledButton = styled('button', {
  appearance: 'none',
  border: 0,
  variants: {
    variant: {
      default: {
        backgroundColor: '$primary',
        color: "$primarySolidContrast",
      },
      primary: {
        backgroundColor: "$primary",
        color: "$primarySolidContrast",
      },
      secondary: {
        backgroundColor: "$secondary",
        color: "$secondarySolidContrast",
      },
      success: {
        backgroundColor: "$success",
        color: "$successSolidContrast",
      },
      warning: {
        backgroundColor: "$warning",
        color: "$warningSolidContrast",
      },
      error: {
        backgroundColor: "$error",
        color: "$errorSolidContrast",
      },
    },
    size: {
      xs: {
        $$buttonPadding: "$space$3",
        $$buttonBorderRadius: "$radii$xs",
        $$buttonHeight: "$space$10",
        px: "$3",
        height: "$$buttonHeight",
        lh: "$space$10",
        width: "auto",
        minWidth: "$20",
        fontSize: "$xs",
      },
      sm: {
        $$buttonPadding: "$space$5",
        $$buttonBorderRadius: "$radii$sm",
        $$buttonHeight: "$space$12",
        px: "$5",
        height: "$$buttonHeight",
        lh: "$space$14",
        width: "auto",
        minWidth: "$36",
        fontSize: "$sm",
      },
      md: {
        $$buttonPadding: "$space$7",
        $$buttonBorderRadius: "$radii$md",
        $$buttonHeight: "$space$14",
        px: "$7",
        height: "$$buttonHeight",
        lh: "$space$14",
        width: "auto",
        minWidth: "$48",
        fontSize: "$sm",
      },
      lg: {
        $$buttonPadding: "$space$9",
        $$buttonBorderRadius: "$radii$base",
        $$buttonHeight: "$space$16",
        px: "$9",
        height: "$$buttonHeight",
        lh: "$space$15",
        width: "auto",
        minWidth: "$60",
        fontSize: "$md",
      },
      xl: {
        $$buttonPadding: "$space$10",
        $$buttonBorderRadius: "$radii$xl",
        $$buttonHeight: "$space$18",
        px: "$10",
        height: "$$buttonHeight",
        lh: "$space$17",
        width: "auto",
        minWidth: "$72",
        fontSize: "$lg",
      },
    }
  }
});