
import { SharedAccesosEffectsArray } from "./store/accesos/acessos.reducer";
import { AuthEffects } from "./store/auth/effects/auth.effects";
import { SharedEffectsArray } from "./store/shared/shared.effects";



export const AppEffectsArray:any[] = [...SharedEffectsArray, ...SharedAccesosEffectsArray, AuthEffects];