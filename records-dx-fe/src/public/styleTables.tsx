import {theme} from './themeTables'
export const customTableStyles = {
    table: {
		style: {
			color: theme.dark.text.primary,
			backgroundColor: theme.dark.background.default,
		},
	},
	tableWrapper: {
		style: {
			display: 'table',
		},
	},
	header: {
		style: {
			fontSize: '22px',
			color: theme.dark.text.primary,
			backgroundColor: theme.dark.background.default,
			minHeight: '56px',
			paddingLeft: '16px',
			paddingRight: '8px',
		},
	},
	subHeader: {
		style: {
			backgroundColor: theme.dark.background.default,
			minHeight: '52px',
		},
	},
	head: {
		style: {
			color: theme.dark.text.primary,
			fontSize: '12px',
			fontWeight: 500,
		},
	},
	headRow: {
		style: {
			backgroundColor: theme.dark.background.default,
			minHeight: '56px',
			borderBottomWidth: '1px',
			borderBottomColor: theme.dark.divider.default,
			borderBottomStyle: 'solid',
		},
		denseStyle: {
			minHeight: '32px',
		},
	},
	headCells: {
		style: {
			paddingLeft: '16px',
			paddingRight: '16px',
		},
		draggingStyle: {
			cursor: 'move',
		},
		activeSortStyle: {
			color: theme.dark.text.primary,
			'&:focus': {
				outline: 'none',
			},
			'&:hover:not(:focus)': {
				color: theme.dark.sortFocus.default,
			},
		},
		inactiveSortStyle: {
			'&:focus': {
				outline: 'none',
				color: theme.dark.sortFocus.default,
			},
			'&:hover': {
				color: theme.dark.sortFocus.default,
			},
		},
	},
	contextMenu: {
		style: {
			backgroundColor: theme.dark.context.background,
			fontSize: '18px',
			fontWeight: 400,
			color: theme.dark.context.text,
			paddingLeft: '16px',
			paddingRight: '8px',
			transform: 'translate3d(0, -100%, 0)',
			transitionDuration: '125ms',
			transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
			willChange: 'transform',
		},
		activeStyle: {
			transform: 'translate3d(0, 0, 0)',
		},
	},
	cells: {
		style: {
			paddingLeft: '16px',
			paddingRight: '16px',
			wordBreak: 'break-word',
		},
		draggingStyle: {},
	},
	rows: {
		style: {
			fontSize: '13px',
			fontWeight: 400,
			color: theme.dark.text.primary,
			backgroundColor: theme.dark.background.default,
			minHeight: '48px',
			'&:not(:last-of-type)': {
				borderBottomStyle: 'solid',
				borderBottomWidth: '1px',
				borderBottomColor: theme.dark.divider.default,
			},
		},
		denseStyle: {
			minHeight: '32px',
		},
		selectedHighlightStyle: {
			// use nth-of-type(n) to override other nth selectors
			'&:nth-of-type(n)': {
				color: theme.dark.selected.text,
				backgroundColor: theme.dark.selected.default,
				borderBottomColor: theme.dark.background.default,
			},
		},
		highlightOnHoverStyle: {
			color: theme.dark.highlightOnHover.text,
			backgroundColor: theme.dark.highlightOnHover.default,
			transitionDuration: '0.15s',
			transitionProperty: 'background-color',
			borderBottomColor: theme.dark.background.default,
			outlineStyle: 'solid',
			outlineWidth: '1px',
			outlineColor: theme.dark.background.default,
		},
		stripedStyle: {
			color: theme.dark.striped.text,
			backgroundColor: theme.dark.striped.default,
		},
	},
	expanderRow: {
		style: {
			color: theme.dark.text.primary,
			backgroundColor: theme.dark.background.default,
		},
	},
	expanderCell: {
		style: {
			flex: '0 0 48px',
		},
	},
	expanderButton: {
		style: {
			color: theme.dark.button.default,
			fill: theme.dark.button.default,
			backgroundColor: 'transparent',
			borderRadius: '2px',
			transition: '0.25s',
			height: '100%',
			width: '100%',
			'&:hover:enabled': {
				cursor: 'pointer',
			},
			'&:disabled': {
				color: theme.dark.button.disabled,
			},
			'&:hover:not(:disabled)': {
				cursor: 'pointer',
				backgroundColor: theme.dark.button.hover,
			},
			'&:focus': {
				outline: 'none',
				backgroundColor: theme.dark.button.focus,
			},
			svg: {
				margin: 'auto',
			},
		},
	},
	pagination: {
		style: {
			color: theme.dark.text.secondary,
			fontSize: '13px',
			minHeight: '56px',
			backgroundColor: theme.dark.background.default,
			borderTopStyle: 'solid',
			borderTopWidth: '1px',
			borderTopColor: theme.dark.divider.default,
		},
		pageButtonsStyle: {
			borderRadius: '50%',
			height: '40px',
			width: '40px',
			padding: '8px',
			margin: 'px',
			cursor: 'pointer',
			transition: '0.4s',
			color: theme.dark.button.default,
			fill: theme.dark.button.default,
			backgroundColor: 'transparent',
			'&:disabled': {
				cursor: 'unset',
				color: theme.dark.button.disabled,
				fill: theme.dark.button.disabled,
			},
			'&:hover:not(:disabled)': {
				backgroundColor: theme.dark.button.hover,
			},
			'&:focus': {
				outline: 'none',
				backgroundColor: theme.dark.button.focus,
			},
		},
	},
	noData: {
		style: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: theme.dark.text.primary,
			backgroundColor: theme.dark.background.default,
		},
	},
	progress: {
		style: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			color: theme.dark.text.primary,
			backgroundColor: theme.dark.background.default,
		},
	},
};