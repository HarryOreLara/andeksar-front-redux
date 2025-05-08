import { SharedAccesosEffectsArray } from './store/accesos/accesos.effects';
import { AuthEffects } from './store/auth/effects/auth.effects';
import { SharedMaestrosEffectsArray } from './store/maestros/maestros.effects';
import { SharedEffectsArray } from './store/shared/shared.effects';

export const AppEffectsArray: any[] = [
  ...SharedEffectsArray,
  ...SharedAccesosEffectsArray,
  ...SharedMaestrosEffectsArray,
  AuthEffects,
];
