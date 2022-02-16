import {
  styled,
  VariantProps,
  cssFocusVisible
} from '../theme/stitches.config';

export const StyledTableRowGroup = styled('thead', {});

export const StyledTableHeaderRow = styled('tr', {});

export const StyledTableColumnHeader = styled(
  'th',
  {
    height: '$14',
    cursor: 'default',
    bg: '$accents1',
    color: '$accents6',
    fontSize: '$tiny',
    textAlign: 'left',
    '&:first-child': {
      pl: '$8',
      br: '$md 0 0 $md'
    },
    '&:last-child': {
      pr: '$8',
      br: '0 $md $md 0'
    },
    variants: {
      align: {
        left: {
          textAlign: 'left'
        },
        center: {
          textAlign: 'center'
        },
        right: {
          textAlign: 'right'
        }
      }
    },
    defaultVariants: {
      align: 'left'
    }
  },
  cssFocusVisible
);

export const StyledTableHeaderCell = styled(
  StyledTableColumnHeader,
  cssFocusVisible
);

export const StyledTableHead = styled('thead', {
  height: '$14'
});

export const StyledTableRow = styled(
  'tr',
  {
    variants: {
      isSelected: {
        true: {
          bg: '$$tableRowSelectedColor',
          color: '$$tableRowTextColor'
        }
      }
    }
  },
  cssFocusVisible
);

export const StyledTableColumn = styled('th', {
  textAlign: 'left',
  bg: '$accents1',
  color: '$accents6',
  fontSize: '$tiny',
  '&:first-child': {
    pl: '$8',
    br: '$md 0 0 $md'
  },
  '&:last-child': {
    pr: '$8',
    br: '0 $md $md 0'
  }
});

export const StyledTableCell = styled(
  'td',
  {
    userSelect: 'none',
    py: '$5',
    transition:
      'background 0.25s ease 0s, box-shadow 0.25s ease 0s, opacity 0.25s ease 0s',
    '&:first-child': {
      pl: '$8'
    },
    '&:last-child': {
      pr: '$8'
    },
    variants: {
      align: {
        left: {
          textAlign: 'left'
        },
        center: {
          textAlign: 'center'
        },
        right: {
          textAlign: 'right'
        }
      }
    }
  },
  cssFocusVisible
);

export const StyledTableBody = styled('tbody', {});

export const StyledTableFoot = styled('tfoot', {});

export const StyledTableCaption = styled('caption', {
  captionSide: 'top',
  textAlign: 'left',
  color: '$accents6',
  fontWeight: '$semibold',
  fontSize: '$sm',
  margin: '$4'
});

export const StyledTable = styled('table', {
  borderCollapse: 'separate',
  borderSpacing: 0,
  width: '100%',
  '@motion': {
    [`& ${StyledTableCell}`]: {
      transition: 'none'
    }
  },
  variants: {
    animated: {
      false: {
        [`& ${StyledTableCell}`]: {
          transition: 'none'
        }
      }
    },
    selectedColor: {
      primary: {
        $$tableRowSelectedColor: '$colors$primaryLight',
        $$tableRowTextColor: '$colors$primary'
      },
      secondary: {
        $$tableRowSelectedColor: '$colors$secondaryLight',
        $$tableRowTextColor: '$colors$secondary'
      },
      success: {
        $$tableRowSelectedColor: '$colors$successLight',
        $$tableRowTextColor: '$colors$success'
      },
      warning: {
        $$tableRowSelectedColor: '$colors$warningLight',
        $$tableRowTextColor: '$colors$warning'
      },
      error: {
        $$tableRowSelectedColor: '$colors$errorLight',
        $$tableRowTextColor: '$colors$error'
      }
    },
    striped: {
      true: {
        [`& ${StyledTableRow}[aria-selected=false]:nth-child(even)`]: {
          [`& ${StyledTableCell}`]: {
            bg: '$accents1'
          }
        },
        [`& ${StyledTableRow}:nth-child(even)`]: {
          [`& ${StyledTableCell}:first-child`]: {
            br: '$lg 0 0 $lg'
          },
          [`& ${StyledTableCell}:last-child`]: {
            br: '0 $lg $lg 0'
          }
        }
      }
    },
    lineWeight: {
      light: {
        $$tableLineWeight: '$borderWeights$light'
      },
      normal: {
        $$tableLineWeight: '$borderWeights$normal'
      },
      bold: {
        $$tableLineWeight: '$borderWeights$bold'
      },
      extrabold: {
        $$tableLineWeight: '$borderWeights$extrabold'
      },
      black: {
        $$tableLineWeight: '$borderWeights$black'
      }
    },
    headerLined: {
      true: {
        [`& ${StyledTableColumnHeader}`]: {
          position: 'relative',
          bg: 'transparent',
          '&:after': {
            content: '',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: 'calc($$tableLineWeight * 1.5)',
            bg: '$accents2'
          },
          '&:first-child': {
            ml: '$12',
            br: '0',
            '&:after': {
              left: '$space$md'
            }
          },
          '&:last-child': {
            br: '0',
            '&:after': {
              right: '$space$md'
            }
          }
        }
      }
    },
    lined: {
      true: {
        [`& ${StyledTableRow}:not(:last-child)`]: {
          position: 'relative',
          [`& ${StyledTableCell}:after`]: {
            content: '',
            position: 'absolute',
            bottom: 0,
            left: '$space$md',
            right: '$space$md',
            height: '$$tableLineWeight',
            bg: '$border'
          }
        }
      }
    },
    fixed: {
      true: {
        tableLayout: 'fixed'
      }
    },
    shadow: {
      true: {
        bs: '$md',
        p: '$lg $md',
        br: '$xl'
      }
    },
    hoverable: {
      true: {
        [`& ${StyledTableCell}:first-child`]: {
          br: '$md 0 0 $md'
        },
        [`& ${StyledTableCell}:last-child`]: {
          br: '0 $md $md 0'
        },
        [`& ${StyledTableRow}`]: {
          cursor: 'pointer',
          '&:hover': {
            [`& ${StyledTableCell}`]: {
              bg: '$accents1',
              opacity: 0.8
            }
          }
        }
      },
      false: {
        [`& ${StyledTableCell}`]: {
          userSelect: 'all'
        }
      }
    },
    isMultiple: {
      true: {}
    },
    compact: {
      true: {
        [`& ${StyledTableCell}`]: {
          py: '$1'
        },
        [`& ${StyledTableColumnHeader}`]: {
          height: '$12',
          '&:first-child': {
            br: '$sm 0 0 $sm'
          },
          '&:last-child': {
            br: '0 $sm $sm 0'
          }
        }
      }
    }
  },
  compoundVariants: [
    // isMultiple && hoverable
    {
      isMultiple: true,
      hoverable: true,
      css: {
        [`& ${StyledTableRow}:not(:first-child):not(:last-child)`]: {
          [`& ${StyledTableCell}:first-child`]: {
            br: 0
          },
          [`& ${StyledTableCell}:last-child`]: {
            br: 0
          }
        },
        [`& ${StyledTableRow}:first-child`]: {
          [`& ${StyledTableCell}:first-child`]: {
            br: '$md 0 0 0'
          },
          [`& ${StyledTableCell}:last-child`]: {
            br: '0 $md 0 0'
          }
        },
        [`& ${StyledTableRow}:last-child`]: {
          [`& ${StyledTableCell}:first-child`]: {
            br: '0 0 0 $md'
          },
          [`& ${StyledTableCell}:last-child`]: {
            br: '0 0 $md 0'
          }
        }
      }
    },
    // compact && shadow
    {
      compact: true,
      shadow: true,
      css: {
        p: '$md $sm'
      }
    }
  ],
  defaultVariants: {
    shadow: true,
    selectedColor: 'primary',
    lineWeight: 'light'
  }
});

export type TableVariantsProps = VariantProps<typeof StyledTable>;
export type TableColumnHeaderVariants = VariantProps<
  typeof StyledTableColumnHeader
>;