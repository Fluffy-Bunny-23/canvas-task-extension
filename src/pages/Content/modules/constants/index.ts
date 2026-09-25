import { FinalAssignment, Options } from '../types';
import JSONAssignmentDefaults from './defaults/assignmentDefaults.json';
import JSONOptionsDefaults from './defaults/optionsDefaults.json';

export const MAX_MARKED_ASSIGNMENTS = 400;

export const AssignmentDefaults = JSONAssignmentDefaults as FinalAssignment;
export const OptionsDefaults = JSONOptionsDefaults as Options;

// export const THEME_COLOR = '#ec412d';
export const THEME_COLOR = 'var(--ic-brand-global-nav-bgd)';
export const THEME_COLOR_LIGHT = 'rgba(199, 205, 209)';

export const CLIENT_ID_LENGTH = 9;

// Kept for demo-mode detection only (isDemo/detectSettings compare the
// page URL against it). It is never opened as a link: the old
// tasksforcanvas.info domain now redirects to BetterCampus.
export const HOME_WEBSITE = 'https://www.tasksforcanvas.info';
export const EXPERIMENT_CONFIG_URL =
  'https://canvas-task-static.onrender.com/live.json';

// for platforms that don't have dashboard colors by default
export const DEFAULT_DASHBOARD_COLORS = [
  '#4989F4',
  '#DC4B3F',
  '#7E57C2',
  '#1AA260',
  '#FFB300',
];
